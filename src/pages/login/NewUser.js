import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./login.css"; // Import the CSS file for styling

const NewUser = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate inputs
    if (!name || !email || !password || !confirmPassword) {
        setErrorMessage("יש למלא את כל השדות");
      return;
    }

    if (password !== confirmPassword) {
      setErrorMessage("הסיסמאות לא תואמות");
      return;
    }

    // Create user object
    const newUser = { name, email, password };

    fetch("http://localhost:5000/newUser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUser),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.Login){
            navigate("../")
        } else {
            setErrorMessage(data.error);
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <>
      <h2>משתמש חדש</h2>
      <form className="login-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">שם</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => {setErrorMessage(""); setName(e.target.value)}}
            className="input-field"
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">דואר אלקטרוני</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => {setErrorMessage(""); setEmail(e.target.value)}}
            className="input-field"
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">סיסמה</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => {setErrorMessage(""); setPassword(e.target.value)}}
            className="input-field"
          />
        </div>
        <div className="form-group">
          <label htmlFor="confirmPassword">אישור סיסמה</label>
          <input
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            onChange={(e) => {setErrorMessage(""); setConfirmPassword(e.target.value)}}
            className="input-field"
          />
        </div>
        <label className="errMsg">{errorMessage}</label>
        <button type="submit" className="submit-button">
          צור משתמש
        </button>
      </form>
    </>
  );
};

export default NewUser;
