import React, { useState, useEffect, useRef } from "react";
import Img from "../../assets/images/line.PNG";
import "./line.css";
import Diameter from "../diameter/Diameter";
import Input from "../input/Input";

function Line() {
  const [lengthA, setLengthA] = useState("");
  const [diameter, setDiameter] = useState(0);
  const [units, setUnits] = useState("");
  const totalLength = useRef(0);

  useEffect(() => {
    totalLength.current = parseInt(lengthA);
    console.log(totalLength.current);
  });

  function handleDiameterValue(val) {
    setDiameter(val);
    console.log(diameter);
  }

  const handleInputs = (text, setter) => {
    if (text > 0 || text.length === 0) setter(text);
  };

  return (
    <div className="container">
      <div className="A_B_L">
        <div className="A_L">
          <img className="line_img" src={Img} alt="L" />
          <div className="kubeA">
            A <br />
            {lengthA}
          </div>
        </div>
        
      </div>
      <div className="AB_inputs">
        <Input
          letter="A"
          length={lengthA}
          onChange={(e) => {
            handleInputs(e.target.value, setLengthA);
          }}
        />
      </div>
      <div className="units">
        <Diameter handleValue={handleDiameterValue} />
      </div>
      <div className="units">
        <input
          value={units}
          onChange={(e) => handleInputs(e.target.value, setUnits)}
          maxLength={4}
          placeholder={"0"}
        />
      </div>
    </div>
  );
}

export default Line;
