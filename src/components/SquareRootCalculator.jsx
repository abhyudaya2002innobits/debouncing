import React, { useState, useMemo } from 'react';


const SquareRootCalculator = () => {
  const [number, setNumber] = useState(0);
  const [isDark, setDark] = useState(false);

  const toggleTheme = () => {
    setDark(!isDark); // Toggle the theme
    console.log('theme changed')
  };

  const calculateSquareRoot = (num) => {
    console.log('Calculating square root of', num);
    
    return Math.sqrt(num);
  };


  const memoizedSquareRoot = useMemo(() => calculateSquareRoot(number), [number]);
  const nonMemoizedSquareRoot=calculateSquareRoot(number)

  return (
    <div className={isDark ? 'calculator dark' : 'calculator light'}> 
      <h2>Square Root Calculator</h2>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value))}
      />
      <p>Square root of {number} is: {memoizedSquareRoot}</p>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
};                                                                                                                              

export default SquareRootCalculator;
