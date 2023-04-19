import React, { Component } from "react";
import Select from "react-select";
import axios from "axios";
import { saveAs } from "file-saver";
import "./App.css";
import Attribute from "./components/attribute/Attribute";
import L from "./components/L/L";
import logo from "./assets/images/1.png";
//sdfsdfsdf
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
  render() {
    return (
      // <div className="App">

      //   <input type="text" placeholder="Name" name="name" onChange={this.handleChange} />
      //  <input type="" placeholder="Receipt ID" name="receiptId" onChange={this.handleChange} />
      //   <input type="number" placeholder="Price 1" name="price1" onChange={this.handleChange} />
      //   <input type="number" placeholder="Price 2" name="price2" onChange={this.handleChange} />
      //   <input type="number" placeholder="test" isDisabled={this.props.disabled} />

      //</div>
      <body className="App">
        {/* <img src={logo} alt="logo"/> */}
        <div>
          <Attribute />
          <L />
        </div>
        {/* <button onClick={this.createAndDownloadPdf}>Download Pdf</button> */}
      </body>
    );
  }
}

export default App;
