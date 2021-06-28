import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import { terser } from "rollup-plugin-terser";
import typescript from "rollup-plugin-typescript2";
import postcss from "rollup-plugin-postcss";

const overrides = {
  compilerOptions: { declaration: true, declarationDir: "./dist/" },
  exclude: ["tests/**/*.ts", "tests/**/*.tsx"]
};

// 1.组件问题，hooks导出不可用
// 解决方法：
// 使用npm link 到项目的node_modules / react

// 2，ts .d.ts类型文件没有导出
// 解决方法：
// 使用TypeScript2插件并且配置declaration覆盖选项
// 在package.json中添加 `"types": "dist/main.d.ts",`定义类型文件入，
// 之后就可以在项目中使用导出的类型了，而且IDE也能识别到库的信息并跳转

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  input: "src/main.ts",
  //   output: [
  //     {
  //       file: packageJson.main,
  //       format: "cjs",
  //       sourcemap: true
  //     },
  //     {
  //       file: packageJson.module,
  //       format: "esm",
  //       sourcemap: true
  //     }
  //   ],
  plugins: [
    terser(),
    peerDepsExternal(),
    resolve(),
    commonjs(),
    typescript({
      tsconfigOverride: overrides
    }),
    postcss()
  ],
  external: ["react", "react-dom", "lodash-es"]
};
