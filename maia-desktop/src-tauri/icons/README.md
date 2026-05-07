# Iconos

`icon.svg` es la fuente. Para generar el set Tauri (PNG, ICO, ICNS):

```bash
npx @tauri-apps/cli icon icons/icon.svg
```

Esto crea `32x32.png`, `128x128.png`, `128x128@2x.png`, `icon.icns`, `icon.ico`, listos para `tauri.conf.json`.
