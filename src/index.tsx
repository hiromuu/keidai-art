import React from "react";
import ReactDOM from "react-dom";
import Navbar from "./navbar";
import Splash from "./splash";

ReactDOM.render(
  <React.StrictMode>
    <Splash />
    <Navbar />
  </React.StrictMode>,
  document.getElementById("root")
);
