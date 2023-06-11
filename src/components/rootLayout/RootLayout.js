import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../header/Header";
import './rootLayout.css';
import Footer from "../footer/Footer";

export default function RootLayout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}
