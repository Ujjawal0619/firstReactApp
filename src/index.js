//  PROPS:
//  props provide the power for creating attrbures for components
//  which can be set during use of components in render method.
//  as creating a component is same as creating a function similarly,
//  creating a props (attribures for component) is same a defining some arguments in a function definition.

import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

function Cards(props) {
  // creating component, not a function.
  // can be used any number of times as HTML element.
  // here 'props' (can be any name) is an object that contains all the custom props created in component, like imgsrc, title and link.
  console.log(props); // checkout in console
  return (
    <>
      <div className="cards">
        {/* card 1 */}
        <div classNam="card">
          <img src={props.imgsrc} alt="myPic" className="card__img" />
          <div className="card__info">
            <span className="card__category">A Netflix Original</span>
            <h3 className="card__sname">{props.sname}</h3>
            <a href={props.link} target="_blank">
              <button> Watch Now </button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

// what to show?, where to show?, callback func.
ReactDOM.render(
  <>
    {/* below is a custom element called component with custom attributs call props, syntax are same as HTML */}
    <Cards
      imgsrc="https://wallpapercave.com/wp/wp7188881.jpg"
      sname="PROJECT POWER"
      link="https://www.netflix.com/in/title/80204465"
    />
    <Cards
      sname="EXTRACTION"
      imgsrc="https://wallpapercave.com/wp/wp6157194.jpg"
      links="https://www.netflix.com/in/title/80230399"
    />
  </>, //multiple element so here is the need of react fragment syntactic sugar.
  document.getElementById("root") // where to show?
);
