//  PROPS:
//  props provide the power for creating attrbures for components
//  which can be set during use of components in render method.
//  as creating a component is same as creating a function similarly,
//  creating a props (attribures for component) is same a defining some arguments in a function definition.

import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Card from "./Cards";
import Sdata from "./Sdata"; // array of data object.

// what to show?, where to show?, callback func.
ReactDOM.render(
  <>
    <h1 className="heading">My Top Favorite Netflix Web Series</h1>
    <div className="container">
      {/* below is a custom element called component with custom attributs call props, syntax are same as HTML */}
      <Card
        sname={Sdata[4].sname}
        imgsrc={Sdata[4].imgsrc}
        link={Sdata[4].link}
      />
      <Card
        sname={Sdata[7].sname}
        imgsrc={Sdata[7].imgsrc}
        link={Sdata[7].link}
      />
    </div>
  </>, //multiple element so here is the need of react fragment syntactic sugar.
  document.getElementById("root") // where to show?
);
