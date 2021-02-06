import React from "react";
import ReactDOM from "react-dom";
import { range } from "d3";
import { Face } from "./Face";

const width = 150;
const height = 150;
// reduce variables

const array = range(10 * 5);

const App = () =>
  array.map(() => (
    <Face
      width={width}
      height={height}
      centerX={width / 2}
      centerY={height / 2}
      strokeWidth={10 + Math.random() * 5}
      eyeOffsetX={30 + Math.random() * 10}
      eyeOffsetY={30 + Math.random() * 10}
      eyeRadius={10 + Math.random() * 5}
      mouthWidth={10 + +Math.random() * 5}
      mouthRadius={40 + Math.random() * 5}
    />
  ));
// symentically meaningful JSX refactoring
// process of refactoring components & modules allows complexity to scale

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
