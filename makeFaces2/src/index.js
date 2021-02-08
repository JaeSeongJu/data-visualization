import React from "react";
import ReactDOM from "react-dom";

const width = 960;
const height = 500;
const circleX = width / 2;
const circleY = height / 2;
const circleRadius = 30;

const handleMousemMove = () => {
  console.log("Mouse moved!");
};

const App = () => (
  <svg width={width} height={height} onMouseMove={handleMousemMove}>
    <circle cx={circleX} cy={-circleY} r={circleRadius} />
  </svg>
);

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
