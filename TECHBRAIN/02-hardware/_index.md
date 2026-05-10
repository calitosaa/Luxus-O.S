# 02 — Hardware

> Arquitectura de CPUs, GPUs, memoria, almacenamiento e interconexiones — desde microarquitectura hasta plataformas de servidor.

## Mapa del dominio

```
02-hardware/
├── cpu/
│   ├── pipeline/
│   │   ├── fetch-decode-execute.md
│   │   ├── branch-prediction.md
│   │   └── out-of-order-execution.md
│   ├── cache/
│   │   ├── cache-coherence-mesi.md
│   │   ├── tlb.md
│   │   └── prefetching.md
│   ├── memoria/
│   │   ├── ddr5-architecture.md
│   │   ├── hbm-architecture.md
│   │   └── numa.md
│   └── x86/
│       ├── instruction-encoding.md
│       ├── simd-avx512.md
│       └── vmx-virtualization.md
├── gpu/
│   ├── sm-architecture.md
│   ├── warp-execution.md
│   └── memory-hierarchy.md
├── interconnects/
│   ├── pcie-tlp.md
│   ├── cxl-protocol.md
│   ├── ucie-chiplets.md
│   └── iommu.md
├── storage/
│   ├── nvme-protocol.md
│   └── nand-flash.md
└── _index.md
```

## Archivos disponibles

*(vacío — pendiente)*

## Topics pendientes

- [ ] PCIe Transaction Layer Packets (TLPs) — fuente: [PCIe Base Spec 6.0](https://pcisig.com/specifications)
- [ ] IOMMU y virtualización de dispositivos — fuente: [Intel VT-d spec](https://software.intel.com/content/www/us/en/develop/articles/intel-virtualization-technology-for-directed-io-vt-d-enhancing-intel-platforms-for-efficient-virtualization-of-io-devices.html)
- [ ] Coherencia de caché MESI/MOESI en NUMA — fuente: [Intel SDM Vol 3](https://www.intel.com/content/www/us/en/developer/articles/technical/intel-sdm.html)
- [ ] CXL 3.1 protocolo — fuente: [CXL Specification 3.1](https://www.computeexpresslink.org/spec-landing)
- [ ] HBM3 arquitectura — fuente: [JEDEC HBM3 Standard](https://www.jedec.org/standards-documents/docs/jesd235c)
- [ ] DDR5 sub-channel y ECC — fuente: [JEDEC JESD79-5](https://www.jedec.org/standards-documents/docs/jesd79-5)
- [ ] Chiplet design y UCIe interconnects — fuente: [UCIe Spec 2.0](https://www.uciexpress.org/)
- [ ] AVX-512 instruction encoding — fuente: [Intel ISA Extensions Reference](https://www.intel.com/content/www/us/en/develop/documentation/intrinsics-guide/index.html)
- [ ] Branch prediction: TAGE predictor — fuente: [Seznec & Michaud, 2006]
- [ ] Out-of-order execution: Tomasulo algorithm — fuente: [Tomasulo 1967]

## Prereqs recomendados

- Física & Electrónica → [[../01-physics-electronics/_index.md]]
- Sistemas Operativos → [[../03-operating-systems/_index.md]]

## Estadísticas

| Métrica | Valor |
|---------|-------|
| Archivos totales | 0 |
| Archivos completos (✅) | 0 |
| Archivos parciales (🔶) | 0 |
| Stubs (📋) | 0 |
| Topics pendientes | 10 |

---

*Última actualización: 2026-05*
