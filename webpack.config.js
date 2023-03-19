import { resolve } from "path";

const currentPath = window.location.pathname;
const currentDir = currentPath.substring(0, currentPath.lastIndexOf("/"));
export const entry = "./src/index.js";
export const output = {
  filename: "bundle.js",
  path: resolve(currentDir, "dist")
};
export const module = {
  rules: [
    {
      test: /\.js$/,
      exclude: /node_modules/,
      use: {
        loader: "babel-loader",
        options: {
          presets: ["@babel/preset-env"]
        }
      }
    }
  ]
};
