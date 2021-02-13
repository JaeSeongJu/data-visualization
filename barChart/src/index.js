import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { csv, scaleBand, scaleLinear, max } from "d3";

const csvUrl =
  "https://gist.githubusercontent.com/JooJaeSeong/c97c02ba5cf036319b877346fe6c051e/raw/UN_Population_2019.csv";

const width = 960;
const height = 500;

const App = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const row = (d) => {
      d.Population = +d["2020"];
      return d;
    };
    csv(csvUrl, row).then((data) => {
      setData(data.slice(0, 10));
    }); // pass single argument 'data'
  }, []); // manage side effect

  if (!data) {
    return <pre>Loading...</pre>;
  }

  const yScale = scaleBand()
    .domain(data.map((d) => d.Country))
    .range([0, height]);

  const xScale = scaleLinear()
    .domain([0, max(data, (d) => d.Population)])
    .range([0, width]);

  return (
    <svg width={width} height={height}>
      {data.map((d) => (
        <rect
          x={0}
          y={yScale(d.Country)}
          width={xScale(d.Population)}
          height={yScale.bandwidth()}
        />
      ))}
    </svg>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
