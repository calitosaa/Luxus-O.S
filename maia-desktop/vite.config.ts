import { defineConfig } from "vite";

export default defineConfig({
  clearScreen: false,
  server: {
    port: 1420,
    strictPort: true,
    host: "0.0.0.0",
  },
  build: {
    target: "es2022",
    minify: "esbuild",
    sourcemap: true,
  },
});
