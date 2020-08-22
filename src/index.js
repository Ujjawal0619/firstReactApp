//  PROPS:
//  props provide the power for creating attrbures for components
//  which can be set during use of components in render method.
//  as creating a component is same as creating a function similarly,
//  creating a props (attribures for component) is same a defining some arguments in a function definition.

import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Card from "./Cards";

// what to show?, where to show?, callback func.
ReactDOM.render(
  <>
    {/* below is a custom element called component with custom attributs call props, syntax are same as HTML */}
    <Card
      imgsrc="https://wallpapercave.com/wp/wp7188881.jpg"
      sname="PROJECT POWER"
      link="https://www.netflix.com/in/title/80204465"
    />
    <Card
      sname="EXTRACTION"
      imgsrc="https://wallpapercave.com/wp/wp6157194.jpg"
      links="https://www.netflix.com/in/title/80230399"
    />
  </>, //multiple element so here is the need of react fragment syntactic sugar.
  document.getElementById("root") // where to show?
);
