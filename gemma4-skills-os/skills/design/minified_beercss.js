---
source_repo: https://github.com/beercss/beercss
source_file: build/minified.js
license: MIT
category: skills/design
imported_at: 2026-04-19
---

import { build } from "vite";
import fs from "fs";

export default async function() {
  try {
    await build({
      build: {
        esbuild: {
          legalComments: 'none'
        },
        emptyOutDir: false,
        assetsInlineLimit: 0,
        outDir: "./dist/cdn",
        rollupOptions: {
          preserveEntrySignatures: "allow-extension",
          input: {
            "beer": "./src/cdn.ts",
          },
          output: {
            entryFileNames: "[name].min.js",
            chunkFileNames: "[name].min.js",
            assetFileNames: (info) => (info.name.includes(".css")) ? "[name].min.css" : "[name].[ext]",
            manualChunks: undefined,
          },
        },
      },
    });
    
    const cssContent = fs.readFileSync("./dist/cdn/beer.min.css", "utf-8");
    fs.writeFileSync("./dist/cdn/beer.min.css", cssContent.replace(/url\(\//g, "url("));
  } catch (error) {
    console.error(error);
  }
}
