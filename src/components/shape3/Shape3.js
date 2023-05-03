import React, { useState, useEffect, useRef } from "react";
import LImg from "../../assets/images/3.png";
import "./shape3.css";
import Diameter from "../diameter/Diameter";
import Input from "../input/Input";

function Shape3() {
  const [lengthA, setLengthA] = useState("");
  const [lengthB, setLengthB] = useState("");
  const [lengthC, setLengthC] = useState("");
  const [lengthD, setLengthD] = useState("");
  const [diameter, setDiameter] = useState(0);
  const [units, setUnits] = useState("");
  const totalLength = useRef(0);

  function calcTotalLength() {
    totalLength.current = parseInt(lengthA) + parseInt(lengthB);
  }

  useEffect(() => {
    totalLength.current = parseInt(lengthA) + parseInt(lengthB);
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
          <div className="kubeA_shape3">
            {lengthA} <br />A
          </div>
          <img className="shape3_img" src={LImg} alt="shape3" />
          <div className="kubeB_shape3">
            B <br /> {lengthB}{" "}
          </div>
          <div className="kubeC_shape3">
            C <br /> {lengthC}{" "}
          </div>
          <div className="kubeD_shape3">
            D <br /> {lengthD}{" "}
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
        <Input
          letter="B"
          length={lengthB}
          onChange={(e) => {
            handleInputs(e.target.value, setLengthB);
          }}
        />
        <Input
          letter="C"
          length={lengthC}
          onChange={(e) => {
            handleInputs(e.target.value, setLengthC);
          }}
        />
        <Input
          letter="D"
          length={lengthD}
          onChange={(e) => {
            handleInputs(e.target.value, setLengthD);
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

export default Shape3;
