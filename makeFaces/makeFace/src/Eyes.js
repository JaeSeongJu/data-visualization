export const Eyes = ({ eyeOffsetX, eyeOffsetY, eyeRadius }) => (
  <>
    <circle cx={-eyeOffsetX} cy={-eyeOffsetY} r={eyeRadius} />
    <circle cx={eyeOffsetX} cy={-eyeOffsetY} r={eyeRadius} />
  </> // do not need to make new DOM elements like <g></g> => using react fragments
);
// Adjacent JSX elements must be wrapped in an enclosing tag.
