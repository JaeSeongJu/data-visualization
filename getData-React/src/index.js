import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { csv } from "d3";
import { message } from "./message";

const csvUrl =
  "https://gist.githubusercontent.com/JooJaeSeong/6ac67dadd2cf241001e7ce087228344b/raw/cssNamedColor.csv";

const App = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    csv(csvUrl).then(setData); // pass single argument 'data'
  }, []); // manage side effect

  return <pre>Data is : {data ? message(data) : "Loading..."}</pre>;
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
