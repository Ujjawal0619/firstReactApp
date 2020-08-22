import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

function Cards() {
  // creating component, not a function.
  // can be used any number of times as HTML element.
  return (
    <>
      <div className="cards">
        {/* card 1 */}
        <div classNam="card">
          <img
            src="https://wallpapercave.com/wp/wp7188881.jpg"
            alt="myPic"
            className="card__img"
          />
          <div className="card__info">
            <span className="card__category">A Netflix Original</span>
            <h3 className="card__title">PROJECT POWER</h3>
            <a href="https://www.netflix.com/in/title/80204465" target="black">
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
  <Cards />,
  document.getElementById("root") // where to show?
);
