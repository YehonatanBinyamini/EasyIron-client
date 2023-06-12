import React, { useState, useEffect, useRef } from "react";
import Shape3Img from "../../assets/images/3.png";
import "./shape3.css";
import Diameter from "../diameter/Diameter";
import Input from "../input/Input";

function Shape3({ id, sendData }) {
  const [lengthA, setLengthA] = useState("");
  const [lengthB, setLengthB] = useState("");
  const [lengthC, setLengthC] = useState("");
  const [lengthD, setLengthD] = useState("");
  const [units, setUnits] = useState("");
  const totalLength = useRef(0);
  const diameter = useRef(0);

  useEffect(() => {
    totalLength.current =
      parseInt(lengthA || 0) +
      parseInt(lengthB || 0) * 2 +
      parseInt(lengthC || 0) +
      parseInt(lengthD || 0);
    handleData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lengthA, lengthB, lengthC, lengthD, units, totalLength, diameter]);

  function handleData() {
    const data = {
      id: id,
      shape: "shape3",
      A: lengthA.length === 0 ? 0 : lengthA,
      B: lengthB.length === 0 ? 0 : lengthB,
      C: lengthC.length === 0 ? 0 : lengthC,
      D: lengthD.length === 0 ? 0 : lengthD,
      units: units.length === 0 ? 0 : units,
      diameter: diameter.current,
      totalLength: totalLength.current,
      weight: "TODO",
    };

    sendData(data);
  }

  function handleDiameterValue(val) {
    diameter.current = val;
  }

  const handleInputs = (text, setter) => {
    if (text > 0 || text.length === 0) setter(text);
  };

  return (
    <div className="container">
      <div className="letters_and_img">
        <div className="A_L">
          <div className="kubeA_shape3">
            {lengthA} <br />A
          </div>
          <img className="shape3_img" src={Shape3Img} alt="shape3" />
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
