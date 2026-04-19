---
source_repo: https://github.com/ruvnet/ruflo
source_file: v2/babel.config.cjs
license: MIT
category: skills/coding
imported_at: 2026-04-19
---

module.exports = {
  presets: [
    ['@babel/preset-env', {
      targets: {
        node: '20'
      },
      modules: false
    }]
  ],
  plugins: [
    '@babel/plugin-syntax-import-attributes'
  ],
  env: {
    test: {
      presets: [
        ['@babel/preset-env', {
          targets: {
            node: '20'
          }
        }]
      ]
    }
  }
};