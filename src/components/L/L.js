import React, { useState, useEffect, useRef } from "react";
import LImg from "../../assets/images/L.png";
import "./L.css";
import Diameter from "../diameter/Diameter";

function L() {
  const [length1, setLength1] = useState("");
  const [length2, setLength2] = useState("");
  const [diameter, setDiameter] = useState(0);
  const [units, setUnits] = useState("");
  const totalLength = useRef(0);

  function calcTotalLength() {
    totalLength.current = parseInt(length1) + parseInt(length2);
  }

  useEffect(() => {
    totalLength.current = parseInt(length1) + parseInt(length2);
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
          <img className="img" src={LImg} alt="L" />
          <div className="kubeA">
            A <br />
            {length1}
          </div>
        </div>
        <div className="kubeB">
          B <br /> {length2}{" "}
        </div>
      </div>
      <div className="AB_inputs">
        A
        <input
          maxLength={5}
          type="text"
          value={length1}
          onChange={(e) => {
            handleInputs(e.target.value, setLength1);
          }}
          placeholder={"0"}
        />
        B
        <input
          value={length2}
          onChange={(e) => handleInputs(e.target.value, setLength2)}
          maxLength={5}
          placeholder={"0"}
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
