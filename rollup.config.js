import { nodeResolve } from "@rollup/plugin-node-resolve";

export default {
  input: "makeFace/src/index.js",
  plugins: [nodeResolve()],
  output: {
    file: "makeFaceDist/dist/index.js",
    format: "umd",
  },
  external: ["react"],
};
