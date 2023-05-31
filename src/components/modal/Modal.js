import React, { useState } from "react";
import "./modal.css";
import Limg from "../../assets/images/L.png";

const Modal = ({ onDataSent }) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const images = [{ src: Limg, alt: "L" }];

  const handleModalToggle = () => {
    setModalOpen(!isModalOpen);
  };

  const sendDataToParent = () => {
    const data = "L";
    onDataSent(data); //the callback function
    setModalOpen(!isModalOpen);
  };

  return (
    <div className="align-right">
      <button onClick={handleModalToggle} className="open-modal-btn">
        הוסף צורה
      </button>
      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <h1>בחר צורה</h1>
            <div className="image-grid">
              {images.map((item, index) => (
                <img
                  key={index}
                  src={item.src}
                  alt={item.alt}
                  className="small-image"
                  onClick={() => sendDataToParent(item.alt)} // Pass the alt content as the data
                />
              ))}
            </div>
            <button className="close-modal-btn" onClick={handleModalToggle}>
              סגור
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;
