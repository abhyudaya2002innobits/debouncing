import React, { useState, useEffect, useRef } from 'react';
import { debounce } from 'lodash';
import Data from './Data';
import Shimmer from './Shimmer';
import axios from 'axios';

export default function SearchComponent() {
  const[loading,setloading]=useState(false)
  const [inputValue, setInputValue] = useState('');
  const [fetchedData, setFetchedData] = useState([]);
  const debouncedSearch = useRef(null);

  const fetchData = async (postalCode) => {
    
    setloading(true)
    try {
      const response = await axios.get(`https://api.postalpincode.in/pincode/${postalCode}`);
      console.log(response,">:response")
      
      console.log(response.data[0].PostOffice, "response after 4 sec");

      if (response.data.length > 0 && response.data[0].PostOffice) {
        setFetchedData(response.data[0].PostOffice);
      } else if (response.data.length > 6) {
        setFetchedData([]);
      } else {
        setFetchedData([]);
      }
    } catch (error) {
      console.log(error, "error occurred");
    }
    setloading(false)
  };
  
  useEffect(() => {
    debouncedSearch.current = debounce((postalCode) => {
      fetchData(postalCode)
    }, 4000);

    return () => {
      clearTimeout(debouncedSearch.current);
    };
  }, []);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
    console.log(event.target.value, ">>::value")
    debouncedSearch.current(event.target.value)
  };

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        placeholder ='#####'
        onChange={handleInputChange}
      />
      <div>
        {inputValue.length<=6 && !loading? (
          fetchedData.map((item) => (
            <Data key={item.Name} Name={item.Name} District={item.District} />
          ))
        ) : (
          <Shimmer />
        )}
      </div>
    </div>
  );
}
