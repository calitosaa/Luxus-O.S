# 19 — Sistemas Embebidos

> RTOS, bare metal programming, microcontroladores, HAL design, interfaces hardware, IoT y seguridad embebida.

## Mapa del dominio

```
19-sistemas-embebidos/
├── microcontroladores/
│   ├── arm-cortex-m/
│   │   ├── cortex-m-architecture.md   # Pipeline, registers, Thumb2
│   │   ├── nvic-interrupts.md         # NVIC, priority, preemption
│   │   └── mpu.md                     # Memory Protection Unit
│   ├── esp32/
│   │   ├── esp32-architecture.md      # Xtensa LX6/LX7, RISC-V variant
│   │   └── esp-idf.md                 # FreeRTOS-based SDK
│   └── risc-v-embedded.md
├── rtos/
│   ├── freertos/
│   │   ├── freertos-scheduler.md      # Preemptive, cooperative, priorities
│   │   ├── freertos-queues.md         # Queues, semaphores, mutexes, events
│   │   └── freertos-memory.md         # Heap_1 through Heap_5
│   ├── zephyr.md                      # West, devicetree, shields
│   └── rtos-teoria.md                 # Scheduling theory, WCET analysis
├── bare-metal/
│   ├── startup-code.md                # Reset handler, BSS init, stack setup
│   ├── linker-scripts.md              # Memory map, sections, symbols
│   └── bootloaders-embedded.md
├── interfaces/
│   ├── i2c-internals.md               # Start/stop, arbitration, stretch
│   ├── spi-internals.md               # Modes 0-3, DMA transfer
│   ├── uart-internals.md              # Framing, baud, flow control
│   ├── can-bus.md                     # Automotive CAN, CAN-FD
│   └── usb-device.md                  # USB stack, descriptors, endpoints
├── iot/
│   ├── mqtt-iot.md
│   └── ota-updates.md                 # OTA partition scheme, rollback
└── _index.md
```

## Topics pendientes

- [ ] FreeRTOS scheduler internals — fuente: [FreeRTOS docs + source](https://www.freertos.org/Documentation/RTOS_book.html)
- [ ] ARM Cortex-M NVIC priority — fuente: [ARM Cortex-M Programming Guide](https://developer.arm.com/documentation/)
- [ ] Linker script memory sections — fuente: [Binutils LD manual](https://sourceware.org/binutils/docs/ld/)
- [ ] CAN bus frame formats — fuente: [ISO 11898-1 CAN standard]
- [ ] ESP32 IDF FreeRTOS port — fuente: [ESP-IDF docs](https://docs.espressif.com/projects/esp-idf/en/latest/)

## Estadísticas

| Métrica | Valor |
|---------|-------|
| Archivos totales | 0 |
| Topics pendientes | 5 |

---

*Última actualización: 2026-05*
