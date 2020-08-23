// using using fat arrow function with map in previous version of file.

import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Card from "./Cards";
import Sdata from "./Sdata";

ReactDOM.render(
  <>
    <h1 className="heading">My Top Favorite Netflix Web Series</h1>
    <div className="container">
      {Sdata.map((curVal) => (
        <Card sname={curVal.sname} imgsrc={curVal.imgsrc} link={curVal.link} />
      ))}
    </div>
  </>,
  document.getElementById("root")
);

//look how compact this project become from first HTML/CSS version to now.
