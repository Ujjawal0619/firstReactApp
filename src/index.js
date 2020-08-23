// using arrayObject.map(callback function name) we can make as many component of similar type in one call.
// This is very usefull for api data which handels json data.

import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Card from "./Cards";
import Sdata from "./Sdata"; // array of data object.

// below is the callback function for map, ==> ncard(currentValue, Index, arr) are default arguments.
function ncard(curVal) {
  return (
    <Card sname={curVal.sname} imgsrc={curVal.imgsrc} link={curVal.link} />
  );
}

// what to show?, where to show?, callback func.
ReactDOM.render(
  <>
    <h1 className="heading">My Top Favorite Netflix Web Series</h1>
    <div className="container">
      {/* here the component is mapped with data recieved in Sdata and every data is returned by 'ncard' callback method. no matter how many data is present in Sdata.jsx file */}
      {Sdata.map(ncard)}
    </div>
  </>, //multiple element so here is the need of react fragment syntactic sugar.
  document.getElementById("root") // where to show?
);
