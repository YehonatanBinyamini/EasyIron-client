import React, { useState } from "react";
import Attribute from "../../components/attribute/Attribute";
import L from "../../components/L/L";
import Modal from "../../components/modal/Modal";
import "./newOrder.css";
import urlServer from "../../assets/urlServer";

export default function NewOrder() {
  const [shapes, setShapes] = useState([]);
  const [htmlContent, setHtmlContent] = useState("");

  function handleDataFromModal(shape) {
    if (shape === "L") {
      const itemId = Math.floor(Math.random() * 99876) + 10000;
      setShapes([...shapes, { id: itemId }]);
    }
  }

  function handleDelete(id) {
    const updatedShapes = shapes.filter((s) => s.id !== id);
    setShapes(updatedShapes);
  }

  function handleDataFromShape(data) {
    const updatedShapes = shapes.map((shape) =>
      shape.id === data.id ? { id: shape.id, data: data } : shape
    );
    setShapes(updatedShapes);
  }

  function handleCreateOrder() {
    const urlServer = "http://localhost:5000";

    fetch(`${urlServer}/new-order`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(shapes),
    })
      .then((response) => {
        if (response.ok) {
          return response.text(); // Get the HTML content
        } else {
          throw new Error("Network response was not ok.");
        }
      })
      .then((htmlContent) => {
        setHtmlContent(htmlContent); // Set the HTML content received from the server
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
      <h1>צור הזמנה חדשה</h1>
      <Attribute />
      {shapes.length === 0 ? (
        <h2>לא נבחרו צורות</h2>
      ) : (
        shapes.map((item) => (
          <React.Fragment key={item.id}>
            <L
              sendData={handleDataFromShape}
              handleData={handleCreateOrder}
              id={item.id}
            />
            <button
              className="delete-button"
              onClick={() => handleDelete(item.id)}
            >
              הסר
            </button>
          </React.Fragment>
        ))
      )}

      {shapes.length > 0 && (
        <button onClick={handleCreateOrder} className="create-new-order-btn">
          צור הזמנה
        </button>
      )}
      <Modal onDataSent={handleDataFromModal} />
    </>
  );
}
