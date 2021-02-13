import babel from "@rollup/plugin-babel";

export default {
  input: "src/index.js",
  plugins: [
    babel({
      babelHelpers: "bundled",
      exclude: "node_modules/**",
      presets: ["@babel/preset-react"],
    }),
  ],
  output: {
    file: "dist/index.js",
    globals: {
      react: "React",
      "react-dom": "ReactDOM",
      d3: "d3",
    },
    format: "umd",
  },
  external: ["react", "react-dom", "d3"],
};
