/* eslint-disable*/

import basicConfig, { name, file } from "./rollup.config";
import packageJson from "../package.json";

export default {
  ...basicConfig,
  output: {
    name: "MagicComponent",
    file: packageJson.main,
    format: "umd",
    globals: {
      react: "React",
      "lodash-es": "_"
    },
    exports: "named"
  }
};
