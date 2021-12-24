import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import styleImport from "vite-plugin-style-import";
import path from "path";
import vueJsx from "@vitejs/plugin-vue-jsx";
import usePluginImport from "vite-plugin-importer";
import ViteComponents from "unplugin-vue-components/vite";
import {
  NaiveUiResolver,
} from "unplugin-vue-components/resolvers";
import { generateModifyVars } from "./build/style/generateModifyVars";

// https://vitejs.dev/config/
interface IMatcher {
  pattern: RegExp;
  styleDir: string;
}

export default defineConfig({
  // base: "/dist/",
  plugins: [
    vue(),
    vueJsx(),
    // ElementPlus({
    //   // options
    // }),
    ViteComponents({
      // dirs: ['./components', './', , 'src/components'],
      resolvers: [
        NaiveUiResolver(),
      ],
      // globalComponentsDeclaration: true,
    }),
    //tsx用
  ],
  resolve: {
    alias: [
      {
        find: "@",
        replacement: path.resolve(__dirname, "src"),
      },
    ],
  },
  // build: {
  //   rollupOptions: {
  //     output: {

  //       manualChunks(id) {
  //         if (id.includes('node_modules') && id.includes('element-plus')) {
  //           console.log(id)
  //           return id.toString().split('node_modules/')[1].split('/')[0].toString()
  //         }
  //       }
  //     }
  //   }
  // },
  css: {
    preprocessorOptions: {
      less: {
        modifyVars: generateModifyVars(),
        javascriptEnabled: true,
      },
    },
  },
});
