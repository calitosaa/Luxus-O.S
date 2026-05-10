# 06 — Networking

> Protocolos de red desde la capa física hasta la aplicación: TCP/IP, DNS, TLS, HTTP/3, QUIC, routing BGP/OSPF, wireless, SDN, VoIP.

## Mapa del dominio

```
06-networking/
├── fundamentos/
│   ├── modelo-osi/
│   │   └── [capa-1 a capa-7].md
│   └── modelo-tcp-ip.md
├── capa-red/
│   ├── ipv4/
│   │   ├── estructura-paquete.md
│   │   └── subnetting-cidr.md
│   ├── ipv6/
│   │   ├── estructura-direccion.md
│   │   └── ndp-slaac.md
│   └── routing/
│       ├── bgp/
│       │   ├── bgp-conceptos.md
│       │   └── bgp-atributos.md
│       └── ospf/
│           └── ospf-conceptos.md
├── capa-transporte/
│   ├── tcp/
│   │   ├── tcp-handshake.md
│   │   ├── tcp-control-congestion.md
│   │   ├── tcp-control-flujo.md
│   │   └── tcp-estado-maquina.md
│   ├── udp.md
│   └── quic/
│       ├── quic-arquitectura.md
│       └── http3-quic.md
├── protocolos-aplicacion/
│   ├── dns/
│   │   ├── dns-resolucion.md
│   │   ├── dns-tipos-registro.md
│   │   └── dns-seguridad.md
│   ├── http/
│   │   ├── http1.md
│   │   ├── http2-internals.md
│   │   └── http3-internals.md
│   ├── tls/
│   │   ├── tls-1-3-handshake.md
│   │   └── certificados-x509.md
│   └── grpc/
│       ├── protobuf.md
│       └── grpc-streaming.md
├── wireless/
│   ├── wifi/
│   │   ├── 802-11-standards.md
│   │   └── wifi-seguridad.md
│   ├── bluetooth/
│   │   └── ble.md
│   └── celular/
│       ├── 4g-lte-arquitectura.md
│       └── 5g-arquitectura.md
├── infraestructura/
│   ├── load-balancers.md
│   ├── reverse-proxy.md
│   ├── cdn-arquitectura.md
│   └── vpn/
│       └── wireguard.md
└── _index.md
```

## Topics pendientes

- [ ] DPDK internals — fuente: [DPDK programmer's guide](https://doc.dpdk.org/guides/prog_guide/)
- [ ] SR-IOV y virtualización de red hardware — fuente: [PCI SIG SR-IOV spec](https://pcisig.com/specifications/iov/)
- [ ] RDMA e InfiniBand — fuente: [InfiniBand Architecture Spec](https://www.infinibandta.org/ibta-specification/)
- [ ] P4 Programming Language — fuente: [P4 Language Spec v1.2](https://p4.org/p4-spec/docs/P4-16-v1.2.2.html)
- [ ] Segment Routing SRv6 — fuente: [RFC 8986](https://www.rfc-editor.org/rfc/rfc8986)
- [ ] Multipath TCP (MPTCP) — fuente: [RFC 8684](https://www.rfc-editor.org/rfc/rfc8684)
- [ ] QUIC loss detection — fuente: [RFC 9002](https://www.rfc-editor.org/rfc/rfc9002)
- [ ] HTTP/3 QPACK — fuente: [RFC 9204](https://www.rfc-editor.org/rfc/rfc9204)
- [ ] BGP RPKI y route origin validation — fuente: [RFC 6480](https://www.rfc-editor.org/rfc/rfc6480)
- [ ] TCP BBR congestion control — fuente: [BBR paper (Cardwell et al., 2016)](https://dl.acm.org/doi/10.1145/3012426.3022184)
- [ ] WebRTC ICE/STUN/TURN completo — fuente: [RFC 8445](https://www.rfc-editor.org/rfc/rfc8445)
- [ ] WireGuard protocol — fuente: [WireGuard paper](https://www.wireguard.com/papers/wireguard.pdf)

## Prereqs recomendados

- Hardware → [[../02-hardware/_index.md]]
- OS → [[../03-operating-systems/_index.md]]
- Criptografía → [[../07-ciberseguridad/_index.md]]

## Estadísticas

| Métrica | Valor |
|---------|-------|
| Archivos totales | 0 |
| Archivos completos (✅) | 0 |
| Stubs (📋) | 0 |
| Topics pendientes | 12 |

---

*Última actualización: 2026-05*
