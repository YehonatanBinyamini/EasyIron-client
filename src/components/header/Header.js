import React from "react";
import "./header.css";
import logo from "../../assets/images/1.png";
import { Link, NavLink } from "react-router-dom";
function Header(props) {
//   const activeColor = "rgb(241, 213, 56)";
//   const nonActiveColor = "#eee";

  const userName = "אורח";

  // function styleHandler({ isActive }) {
  //   return ["nav a", isActive ? "active" : null].filter(Boolean).join(" ");
  // }
  
  function loginHandler() {
    //console.log(userName);
  }

  return (
    <header className="header">
      <Link to="./">
        <img className="logo" src={logo} alt="logo" />
      </Link>
      <nav className="nav">
        <label className="userName-header">שלום {userName}</label>
        <label className="userName-header">|</label>
        <NavLink to="./login" onClick={loginHandler}>
          התחבר
        </NavLink>
        <NavLink to="./NewOrder" >צור הזמנה</NavLink>
        <NavLink to="./Catalog">קטלוג</NavLink>
        <NavLink to="./About">אודות</NavLink>
        <NavLink to="./ContactUs">צור קשר</NavLink>
      </nav>
    </header>
  );
}

export default Header;
