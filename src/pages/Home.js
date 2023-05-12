import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <h1>my Home Page</h1>
      <p>go to <Link to="./login">login page</Link></p>
    </>
  );
}

export default Home;
