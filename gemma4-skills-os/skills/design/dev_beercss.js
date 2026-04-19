---
source_repo: https://github.com/beercss/beercss
source_file: build/dev.js
license: MIT
category: skills/design
imported_at: 2026-04-19
---

import { createServer } from "vite";
import vue from "@vitejs/plugin-vue";

try {
  const server = await createServer({
    publicDir: "./src/static",
    plugins: [vue()],
    build: {
      rollupOptions: {
        input: {
          app: "./index.html",
        },
        output: {
          entryFileNames: "[name].js",
          chunkFileNames: "[name].js",
          assetFileNames: "[name].[ext]",
          manualChunks: undefined,
        },
      },
    },
    server: {
      open: "/",
      host: true,
    },
  });

  await server.listen();
  server.printUrls();
} catch (error) {
  console.log(error);
}
