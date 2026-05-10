# 17 — Aplicaciones Desktop

> Electron, Tauri, Qt, GTK, WPF, .NET MAUI, WinUI 3, AppKit y desarrollo de plugins para IDEs.

## Mapa del dominio

```
17-aplicaciones-desktop/
├── multiplataforma/
│   ├── electron/
│   │   ├── electron-arquitectura.md   # Main/renderer processes, IPC
│   │   └── electron-security.md       # Context isolation, preload scripts
│   ├── tauri/
│   │   ├── tauri-internals.md         # Rust backend, WRY webview, TAO
│   │   └── tauri-commands.md          # IPC, state management
│   └── flutter-desktop.md
├── windows/
│   ├── winui3.md                      # Windows App SDK, fluent design
│   ├── wpf-internals.md               # XAML, visual tree, dispatcher
│   └── dotnet-maui.md
├── macos/
│   ├── appkit.md                      # NSApplication, run loop, KVO/KVC
│   └── catalyst.md
├── linux/
│   ├── gtk.md                         # GObject system, signals, GNOME
│   └── qt.md                          # Meta-Object system, signals/slots
└── _index.md
```

## Topics pendientes

- [ ] Electron IPC channel internals — fuente: [Electron docs](https://www.electronjs.org/docs/latest/)
- [ ] Tauri WRY webview implementation — fuente: [Tauri WRY source](https://github.com/tauri-apps/wry)
- [ ] Qt Meta-Object Compiler (MOC) — fuente: [Qt docs](https://doc.qt.io/qt-6/)

## Estadísticas

| Métrica | Valor |
|---------|-------|
| Archivos totales | 0 |
| Topics pendientes | 3 |

---

*Última actualización: 2026-05*
