import React, { useState, useEffect, useRef } from "react";
import LImg from "../../assets/images/L.png";
import "./L.css";
import Diameter from "../diameter/Diameter";
import Input from "../input/Input";

function L() {
  const [lengthA, setLengthA] = useState("");
  const [lengthB, setLengthB] = useState("");
  const [units, setUnits] = useState("");
  const totalLength = useRef(0);
  const diameter = useRef(0);
  // function calcTotalLength() {
  //   totalLength.current = parseInt(lengthA) + parseInt(lengthB);
  // }

  useEffect(() => {
    totalLength.current = parseInt(lengthA) + parseInt(lengthB);
    //console.log(totalLength.current);
  });

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
          <img className="img" src={LImg} alt="L" />
          <div className="kubeA">
            A <br />
            {lengthA}
          </div>
        </div>
        <div className="kubeB">
          B <br /> {lengthB}{" "}
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
        <Input
          letter="B"
          length={lengthB}
          onChange={(e) => {
            handleInputs(e.target.value, setLengthB);
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

export default L;
