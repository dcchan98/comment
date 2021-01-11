/** @format */

import React from "react";
import ReactDOM from "react-dom";

import App from "./App";



window.navigator.geolocation.getCurrentPosition(
  (msg) => {
    console.log(msg)
    console.log(msg.coords)
    console.log(msg.coords.latitude) 
    console.log(msg.coords.longitude) 
  }
   ,
	(err) => console.log(err)
);

ReactDOM.render(<App />, document.getElementById("root"));
