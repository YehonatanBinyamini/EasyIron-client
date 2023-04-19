import React from 'react'

function TwoInputs() {
  return (
    <div className="AB_inputs">
        A
        <input
          maxLength={5}
          type="text"
          value={length1}
          onChange={(e) => {
            handleInputs(e.target.value, setLength1);
          }}
          placeholder={'0'}
        />
        B
        <input
          value={length2}
          onChange={
            (e) => 
            handleInputs(e.target.value, setLength2)
          }
          maxLength={5}
          placeholder={'0'}
        />
      </div>
  )
}

export default TwoInputs;