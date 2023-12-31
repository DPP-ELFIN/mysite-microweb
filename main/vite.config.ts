import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";

const reslove = () => path.resolve(__dirname, "./src");

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@": reslove(),
    },
  },
});
