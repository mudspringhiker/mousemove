import "@tmkelly28/tk-css";
import "./index.css";
import Something from "./Something";

import React from "react";
import ReactDOM from "react-dom";

ReactDOM.render(
  <div id="demo" className="bg-blue column center-xy fill-xy">
    <Something />
  </div>,
  document.getElementById("app")
);
