# 16 — Mobile

> Android (ART runtime, Compose), iOS (XNU, SwiftUI, concurrencia), Flutter, React Native y desarrollo multiplataforma.

## Mapa del dominio

```
16-mobile/
├── android/
│   ├── art-runtime.md                 # ART vs Dalvik, AOT, JIT, profiling
│   ├── android-architecture.md        # Binder IPC, Zygote, init
│   ├── jetpack-compose/
│   │   ├── compose-internals.md       # Slot table, recomposition
│   │   ├── state-hoisting.md
│   │   └── compose-layout.md
│   ├── coroutines-android.md          # Dispatcher, CoroutineScope lifecycle
│   ├── android-memory.md              # ART GC, heap, OOM
│   └── android-security.md            # SELinux, permissions, keystore
├── ios/
│   ├── swift-runtime.md               # ARC, metadata, witness tables
│   ├── swiftui/
│   │   ├── swiftui-internals.md       # AttributeGraph, diff algorithm
│   │   └── swiftui-layout.md          # Layout protocol, GeometryReader
│   ├── swift-concurrency.md           # Actors, async/await, structured concurrency
│   ├── ios-memory.md                  # ARC, autoreleasepool, instruments
│   └── ios-security.md                # Sandbox, Gatekeeper, Secure Enclave
├── flutter/
│   ├── flutter-engine.md              # Skia/Impeller, platform channels
│   ├── dart-isolates.md
│   └── flutter-rendering.md           # Widget, Element, RenderObject trees
├── react-native/
│   ├── nueva-arquitectura.md          # JSI, Fabric, Turbo Modules
│   └── hermes-engine.md               # Hermes JS engine for RN
└── _index.md
```

## Topics pendientes

- [ ] ART runtime AOT/JIT compilation — fuente: [Android ART docs](https://source.android.com/docs/core/runtime)
- [ ] Binder IPC internals — fuente: [Android Binder paper (Ben-Yitzhak 2006)]
- [ ] SwiftUI AttributeGraph — fuente: [WWDC SwiftUI sessions](https://developer.apple.com/wwdc/)
- [ ] Flutter Impeller rendering engine — fuente: [Flutter engine docs](https://github.com/flutter/engine)
- [ ] React Native JSI — fuente: [RN new architecture docs](https://reactnative.dev/docs/the-new-architecture/landing-page)

## Estadísticas

| Métrica | Valor |
|---------|-------|
| Archivos totales | 0 |
| Topics pendientes | 5 |

---

*Última actualización: 2026-05*
