import React, { useState, useEffect, useRef } from "react";
import Img from "../../assets/images/line.PNG";
import "./line.css";
import Diameter from "../diameter/Diameter";
import Input from "../input/Input";

function Line({ id, sendData }) {
  const [lengthA, setLengthA] = useState("");
  const [units, setUnits] = useState("");
  const totalLength = useRef(0);
  const diameter = useRef(0);

  useEffect(() => {
    totalLength.current = parseInt(lengthA || 0);
    handleData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[lengthA, units, totalLength, diameter]);

  function handleData() {
    const data = {
      id: id,
      shape: "line",
      A: lengthA.length === 0 ? 0 : lengthA, 
      units: units.length === 0 ? 0 : units,
      diameter: diameter.current,
      totalLength: totalLength.current,
      weight: "TODO"
    };

    sendData(data);
  }

  function handleDiameterValue(val) {
      diameter.current = val;
      console.log(diameter.current);
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
