import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create an object containing the email and password
    const credentials = {
      email,
      password,
    };

    // Send the credentials to the server
    fetch("http://localhost:5000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credentials),
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle the response from the server
        console.log(data);
      })
      .catch((error) => {
        // Handle any errors
        console.error("Error:", error);
      });

    // Reset the form
    setEmail("");
    setPassword("");
  };

  const newUserHandler = () => {
    navigate("../NewUser");
  };

  return (
    <>
      <form className="login-form" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">דואר אלקטרוני</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
            required
          />
        </div>
        <div>
          <label htmlFor="password">סיסמה</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
        </div>
        <button type="submit">התחבר</button>
      </form>
      <button className="new-user-button" onClick={newUserHandler}>
        משתמש חדש
      </button>
    </>
  );
};

export default Login;
