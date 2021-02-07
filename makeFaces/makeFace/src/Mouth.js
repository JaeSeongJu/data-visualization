import { arc } from "d3";

export const Mouth = ({ mouthRadius, mouthWidth }) => {
  const mouthArc = arc() // constructor function
    .innerRadius(mouthRadius)
    .outerRadius(mouthRadius + mouthWidth)
    .startAngle(Math.PI / 2)
    .endAngle(Math.PI * (3 / 2)); //method chaining

  return <path d={mouthArc()} />;
};

// mouthArc could be a props element.
// it asks too much of the parent component. but d3 arc generator is too detailed (too much understanding of the internals)
// instead of making the app component come up with d3 arc generator,
// create mouthRadius, mouthWidth props to make Mouth responsible for coming up with d3 arc generator.
