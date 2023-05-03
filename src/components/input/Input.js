import React from "react";
import "./input.css";

function Input(props) {
  return (
    <div className="align_row">
      <label className="letter_label">{props.letter}</label>
      <input
        maxLength={5}
        type="text"
        value={props.length}
        onChange={props.onChange}
        placeholder={"0"}
      />
    </div>
  );
}

export default Input;
