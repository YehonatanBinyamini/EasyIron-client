import React, { useRef, useState } from "react";
import Attribute from "../../components/attribute/Attribute";
import L from "../../components/L/L";
import Modal from "../../components/modal/Modal";
import './newOrder.css'

export default function NewOrder() {
  const [shapes, setShapes] = useState([]);
  function handleDataFromChild(shape) {
    if (shape == "L") {
      const newShapes = [...shapes];
      newShapes.push(<L key={newShapes.length} />);
      setShapes(newShapes);
    }
  }

  function handleDelete(index) {
    // TODO:: to check if I can delete without rendering and deleting the other components data
      const updatedShapes = [...shapes];
      updatedShapes.splice(index, 1);
      setShapes(updatedShapes);  
      console.log(index)  
  }

  return (
    <>
      <h1>צור הזמנה חדשה</h1>
      <Attribute />
      {/* {shapes.length == 0 ? <h2>לא נבחרו צורות</h2> : shapes} */}
        {shapes.map((item, index) => (
          <div key={index} className="item-container">
            {item}
            <button className="delete-button" onClick={() => handleDelete(index)}>Delete</button>
          </div>
        ))}
        
      <Modal onDataSent={handleDataFromChild} />
    </>
  );
}
