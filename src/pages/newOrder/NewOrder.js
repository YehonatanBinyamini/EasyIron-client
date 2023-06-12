import React, { useState, useCallback } from "react";
import Attribute from "../../components/attribute/Attribute";
import L from "../../components/L/L";
import Shape3 from "../../components/shape3/Shape3";
import Line from "../../components/line/Line";
import Modal from "../../components/modal/Modal";
import "./newOrder.css";
import { urlServer } from "../../assets/helpers";
import { saveAs } from "file-saver";
import axios from "axios";
// import { returnShape } from "../../assets/returnShape";

const shapeComponents = {
  L: L,
  line: Line,
  shape3: Shape3,
};

export default function NewOrder() {
  const [shapes, setShapes] = useState([]);
  const [htmlContent, setHtmlContent] = useState("");
  const [htmlContentAvailable, setHtmlContentAvailable] = useState("");

  function handleDataFromModal(shape) {
    if (shape === "L") {
      const itemId = Math.floor(Math.random() * 99876) + 10000;
      setShapes([...shapes, { id: itemId, shape: "L" }]);
    } else if (shape === "line") {
      const itemId = Math.floor(Math.random() * 99876) + 10000;
      setShapes([...shapes, { id: itemId, shape: "line" }]);
    } else if (shape === "shape3") {
      const itemId = Math.floor(Math.random() * 99876) + 10000;
      setShapes([...shapes, { id: itemId, shape: "shape3" }]);
    }
  }

  function handleDelete(id) {
    const updatedShapes = shapes.filter((s) => s.id !== id);
    setShapes(updatedShapes);
  }

  const handleDataFromShape = useCallback(
    (data) => {
      const updatedShapes = shapes.map((shape) =>
        shape.id === data.id ? data : shape
      );
      setShapes(updatedShapes);
    },
    [shapes]
  );

  function handleCreateOrder() {
    console.log(shapes);
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
        //const parsedString = Parse(htmlContent);
        setHtmlContent(htmlContent);
        setHtmlContentAvailable(true);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function handleCloseTemplate() {
    setHtmlContentAvailable(false);
  }

  function handleCreatePDFfile() {
    axios
      .post("/create-pdf", shapes)
      .then(() => axios.get("fetch-pdf", { responseType: "blob" }))
      .then((res) => {
        const pdfBlob = new Blob([res.data], { type: "application/pdf" });

        saveAs(pdfBlob, "EasyIronOrder.pdf");
      });
  }

  return (
    <>
      {htmlContentAvailable ? (
        <>
          <div>
            <button
              className="close-template-btn"
              onClick={handleCloseTemplate}
            >
              ביטול
            </button>
            <button className="create-pdf-btn" onClick={handleCreatePDFfile}>
              הורד קובץ
            </button>
          </div>
          <div
            className="modal-content"
            dangerouslySetInnerHTML={{ __html: htmlContent }}
          />
        </>
      ) : (
        <>
          <h1>צור הזמנה חדשה</h1>
          <Attribute />
          {shapes.length === 0 ? (
            <h2>לא נבחרו צורות</h2>
          ) : (
            shapes.map((item) => {
              const ShapeComponent = shapeComponents[item.shape];
              return (
                <React.Fragment key={item.id}>
                  <ShapeComponent sendData={handleDataFromShape} id={item.id} />
                  <button
                    className="delete-button"
                    onClick={() => handleDelete(item.id)}
                  >
                    הסר
                  </button>
                </React.Fragment>
              );
            })
          )}
          {shapes.length > 0 && (
            <button
              onClick={handleCreateOrder}
              className="create-new-order-btn"
            >
              צור הזמנה
            </button>
          )}
          <Modal onDataSent={handleDataFromModal} />
        </>
      )}
    </>
  );
}
