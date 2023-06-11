import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./login.css";
import Loading from "../../components/loading/Loading";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();
  const handleEmailChange = (e) => {
    setErrorMessage("");
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setErrorMessage("");
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const credentials = { email, password };
    setIsLoading(true);
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
        setIsLoading(false);
        console.log(data);
        if (data.passwordIsFit) {
          setEmail("");
          setPassword("");
          navigate("../");
        } else {
          setIsLoading(false);
          setErrorMessage("דואר אלקטרוני או סיסמה אינם נכונים");
        }
      })
      .catch((error) => {
        setIsLoading(false)
        console.error("Error:", error);
      });
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
        <label className="errMsg">{errorMessage}</label>
        {isLoading ? <Loading /> : <button type="submit">התחבר</button>}
      </form>
      <button className="new-user-button" onClick={newUserHandler}>
        משתמש חדש
      </button>
    </>
  );
};

export default Login;
