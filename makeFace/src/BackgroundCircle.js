export const BackgroundCircle = ({ radius, strokeWidth }) => (
  <circle r={radius} fill="yellow" stroke="black" stroke-width={strokeWidth} />
); // named export module

/* export default ({ radius, strokeWidth }) => (
    <circle r={radius} fill="yellow" stroke="black" stroke-width={strokeWidth} />
  ); 
  => default export module : no need to use curly braces being import
*/

/*
const BackgroundCircle = ({ radius, strokeWidth }) => (
  <circle r={radius} fill="yellow" stroke="black" stroke-width={strokeWidth} />
); 

export default BackgroundCircle;
*/
