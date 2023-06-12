import React, { useState, useEffect, useRef } from "react";
import LImg from "../../assets/images/L.png";
import "./L.css";
import Diameter from "../diameter/Diameter";
import Input from "../input/Input";

function L({ id, sendData }) {
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
    handleData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lengthA, lengthB, units, totalLength, diameter]);


  function handleDiameterValue(val) {
    diameter.current = val;
  }

  const handleInputs = (text, setter) => {
    if (text > 0 || text.length === 0) setter(text);
  };

  function handleData() {
    const data = {
      id: id,
      shape: "L",
      A: lengthA.length === 0 ? 0 : lengthA,
      B: lengthB.length === 0 ? 0 : lengthB,
      units: units.length === 0 ? 0 : units,
      diameter: diameter.current,
      totalLength: totalLength.current,
      weight: "TODO",
    };

    sendData(data);
  }

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
