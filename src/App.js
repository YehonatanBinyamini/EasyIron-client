import React, { Component } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import axios from "axios";
import { saveAs } from "file-saver";
import "./App.css";
import Attribute from "./components/attribute/Attribute";
import L from "./components/L/L";
import Header from "./components/header/Header";
import Shape3 from "./components/shape3/Shape3";
import Line from "./components/line/Line";
import Home from "./pages/Home";
import Login from "./pages/Login";
import RootLayout from "./components/rootLayout/RootLayout";
import Error from "./pages/Error";
import About from "./pages/About";
import Catalog from "./pages/Catalog";
import ContactUs from "./pages/ContactUs";
import NewOrder from "./pages/NewOrder";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <Error />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/About", element: <About /> },
      { path: "/Catalog", element: <Catalog /> },
      { path: "/ContactUs", element: <ContactUs /> },
      { path: "/NewOrder", element: <NewOrder /> },
      { path: "/login", element: <Login /> },
    ],
  },
]);

class App extends Component {
  stat = {
    name: "",
    receiptId: 0,
    price1: 0,
    price2: 0,
  };

  handleChange = ({ target: { value, name } }) =>
    this.setState({ [name]: value });

  createAndDownloadPdf = () => {
    axios
      .post("/create-pdf", this.state)
      .then(() => axios.get("fetch-pdf", { responseType: "blob" }))
      .then((res) => {
        const pdfBlob = new Blob([res.data], { type: "application/pdf" });

        saveAs(pdfBlob, "newPdf.pdf");
      });
  };
  options = [
    { label: "one", value: 1 },
    { label: "two", value: 2 },
  ];
  // // <div className="App">

  // //   <input type="text" placeholder="Name" name="name" onChange={this.handleChange} />
  // //  <input type="" placeholder="Receipt ID" name="receiptId" onChange={this.handleChange} />
  // //   <input type="number" placeholder="Price 1" name="price1" onChange={this.handleChange} />
  // //   <input type="number" placeholder="Price 2" name="price2" onChange={this.handleChange} />
  // //   <input type="number" placeholder="test" isDisabled={this.props.disabled} />

  // //</div>
  // //{/* <img src={logo} alt="logo"/> */}
  // <div className="container">

  // </div>
  // //{/* <button onClick={this.createAndDownloadPdf}>Download Pdf</button> */}

  render() {
    return (
      <div className="App-container">
        <RouterProvider router={router} />
      </div>
    );

    /*return (
      <RouterProvider />

      <div className="App-container">
         <Header />
        <Attribute />
        <Line />
        <Shape3 />
        <L />
        <L /> 
      </div>
    );*/
  }
}

export default App;
