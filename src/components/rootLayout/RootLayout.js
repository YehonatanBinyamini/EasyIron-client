import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../header/Header";
import './rootLayout.css';

export default function RootLayout() {
  return (
    <>
      <Header />
      <Outlet />
      <div className="bottomBoard">
        <h4>EasyIron</h4>
        <p>הזמנת ברזל בקליק</p>
      </div>
    </>
  );
}
