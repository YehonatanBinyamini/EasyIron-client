import React from "react";
import './header.css';
import logo from '../../assets/images/1.png'

function Header( props ) {

  const userName ="אורח";

  function loginHandler() {
   
    console.log(userName);
  }

    return (
      <header className="header">
        <a href="./">
          <img className="logo" src={logo} alt="logo" />
        </a>
        <nav className="nav">
          <label className="userName-header">שלום {userName}</label>
          <label className="userName-header">|</label>
          <a href="./login" onClick={loginHandler}>התחבר</a>
          <a href="https://www.google.com" >צור הזמנה</a>
          <a href="https://www.google.com" >קטלוג</a>
          <a href="https://www.google.com" >אודות</a>
          <a href="https://www.google.com" >צור קשר</a>
        </nav>
      </header>
    );
}

export default Header;