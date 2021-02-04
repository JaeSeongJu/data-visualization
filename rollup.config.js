import babel from "@rollup/plugin-babel";

export default {
  input: "makeFace/src/index.js",
  plugins: [
    babel({
      babelHelpers: "bundled",
      exclude: "node_modules/**",
      presets: ["@babel/preset-react"],
    }),
  ],
  output: {
    file: "makeFaceDist/dist/index.js",
    globals: {
      react: "React",
      "react-dom": "ReactDOM",
    },
    format: "umd",
  },
  external: ["react", "react-dom"],
};
