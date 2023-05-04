import React from "react";
import diameter from "./diameter.css";

function Diameter(props) {
  const options = [
    { label: "בחר", value: 0 ,},
    { label: "6", value: 6 ,},
    { label: "8", value: 8 ,},
    { label: "10", value: 10, },
    { label: "12", value: 12, },
    { label: "14", value: 14, },
    { label: "16", value: 16, },
    { label: "18", value: 18, },
    { label: "20", value: 20, },
    { label: "22", value: 22, },
    { label: "25", value: 25, },
    { label: "28", value: 28, },
    { label: "32", value: 32, },
    { label: "36", value: 36, },
  ];
  

  function handleChange(e){
    props.handleValue(e.target.value)
  }
  
  return (
    <select style={{height:22, width: 90, textAlign: 'right', marginTop:2}}
      onChange={handleChange}>
      {options.map((option) => (
        <option key={option.value} value={option.value}>{option.label}</option>
      ))}
    </select>
  );
}


export default Diameter;
