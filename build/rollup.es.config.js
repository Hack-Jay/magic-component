/* eslint-disable*/
import basicConfig, { name, file } from "./rollup.config";
import packageJson from "../package.json";

export default {
  ...basicConfig,
  output: {
    name: "magic-component",
    file: packageJson.module,
    format: "esm"
  }
};
