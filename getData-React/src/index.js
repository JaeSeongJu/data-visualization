import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { csv, arc, pie } from "d3";
// import { message } from "./message";

const csvUrl =
  "https://gist.githubusercontent.com/JooJaeSeong/6ac67dadd2cf241001e7ce087228344b/raw/cssNamedColor.csv";

const width = 960;
const height = 500;
const centerX = width / 2;
const centerY = height / 2;

const pieArc = arc().innerRadius(0).outerRadius(width);

const App = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    csv(csvUrl).then(setData); // pass single argument 'data'
  }, []); // manage side effect

  if (!data) {
    return <pre>Loading...</pre>;
  }

  const colorPie = pie().value(1);
  return (
    <svg width={width} height={height}>
      <g transform={`translate(${centerX},${centerY})`}>
        {colorPie(data).map((d) => (
          <path fill={d.data["RGB hex value"]} d={pieArc(d)} />
        ))}
        {/* {data.map((d, i) => (
          <path
            fill={d["RGB hex value"]}
            d={pieArc({
              startAngle: (i / data.length) * 2 * Math.PI,
              endAngle: ((i + 1) / data.length) * 2 * Math.PI,
            })}
          />
        ))} */}
      </g>
    </svg>
  );

  // return <pre>Data is : {data ? message(data) : "Loading..."}</pre>;
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
