import { useState, useEffect } from "react";
import { csv } from "d3";

const csvUrl =
  "https://gist.githubusercontent.com/JooJaeSeong/c97c02ba5cf036319b877346fe6c051e/raw/UN_Population_2019.csv";

export const useData = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const row = (d) => {
      d.Population = +d["2020"] * 1000;
      return d;
    };
    csv(csvUrl, row).then((data) => {
      setData(data.slice(0, 10));
    }); // pass single argument 'data'
  }, []); // manage side effect

  return data;
};
