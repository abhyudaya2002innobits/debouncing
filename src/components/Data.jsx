
const Data = ({ Name, District }) => { // Remove props destructuring
  
  return (
    <div className="data">
        <h1>{Name}</h1>
        <p>{District}</p>
 
       
     </div>
  );
};
export default Data
