/** @format */

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { copy } from "vite-plugin-copy";
const resolve = (dir: any) => path.resolve(__dirname, dir);

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    copy([
      { src: "src/assets/js/tinymce_6.7.0", dest: "dist/src/assets/js" },
      { src: "src/assets/img", dest: "dist/src/assets" },
    ]),
  ],
  resolve: {
    alias: {
      "@": resolve("./src"),
    },
  },
  build: {
    // rollupOptions: {
    //   plugins: [copyPlugin({ targets: [{ src: "src/assets/js/tinymce_6.7.0", dest: "dist/src/assets/js/tinymce_6.7.0" }] })],
    // },
    outDir: "dist",
    assetsDir: "assets",
  },
});
