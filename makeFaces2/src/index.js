import React, { useState, useCallback } from "react";
import ReactDOM from "react-dom";

const width = 960;
const height = 500;
const circleRadius = 30;
const initialMousePosition = { x: width / 2, y: height / 2 };

const App = () => {
  const [mousePosition, setMousePosition] = useState(initialMousePosition);
  // useState(initialMousePosition) => [initialMousePosition, func]
  // State = mousePosition, default State = initialMousePosition, changing State = setMousePosition
  const handleMouseMove = useCallback(
    (event) => {
      const { clientX, clientY } = event;
      setMousePosition({ x: clientX, y: clientY });
    },
    [setMousePosition] // array of dependencies(needs most up-to date version of it in order to run)
    // setMousePosition doesn't change between renders. So more efficient, handleMouseMove isn't reset each render.
  );
  // when setMousePosition is invoked, the App object is rerendered. (all updated)
  // handleMouseMove is being set to newly defined closure function.
  // this is a place that performance can be optimized. we can eliminate extra work that react is doing. => useCallback

  return (
    <svg width={width} height={height} onMouseMove={handleMouseMove}>
      <circle cx={mousePosition.x} cy={mousePosition.y} r={circleRadius} />
    </svg>
  );
  // add EventListener => onMouseMove on svg
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
