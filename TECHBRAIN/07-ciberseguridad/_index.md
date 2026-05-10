# 07 — Ciberseguridad

> Criptografía, exploits, seguridad ofensiva y defensiva, forensics, cloud security, CTF techniques, malware analysis.

## Mapa del dominio

```
07-ciberseguridad/
├── criptografia/
│   ├── primitivos/
│   │   ├── cifrado-simetrico.md       # AES internals, modes, GCM
│   │   ├── cifrado-asimetrico.md      # RSA math, ECC, ElGamal
│   │   ├── hash-functions.md          # SHA-2/3, BLAKE3, MD5 breaks
│   │   ├── mac-hmac.md                # HMAC construction, poly1305
│   │   └── kdf.md                     # PBKDF2, Argon2, scrypt, bcrypt
│   ├── protocolos/
│   │   ├── tls-internals.md           # 1.2 vs 1.3, cipher suites
│   │   ├── ssh-protocolo.md
│   │   ├── signal-protocol.md         # Double Ratchet, X3DH
│   │   └── pgp-gpg.md
│   └── post-cuantica/
│       └── pqc-nist.md                # CRYSTALS-Kyber, Dilithium, SPHINCS+
├── explotacion/
│   ├── memoria/
│   │   ├── buffer-overflow.md
│   │   ├── heap-exploitation.md       # tcache poisoning, fastbin corruption
│   │   ├── format-string.md           # %n write primitives
│   │   └── use-after-free.md
│   ├── kernel/
│   │   ├── ret2usr.md
│   │   ├── smep-smap-bypass.md
│   │   └── kaslr-bypass.md
│   ├── web/
│   │   ├── xss.md
│   │   ├── sqli.md
│   │   ├── ssrf.md
│   │   └── xxe.md
│   └── browser/
│       ├── v8-exploits.md
│       └── sandbox-escape.md
├── defensa/
│   ├── mitigaciones.md                # ASLR, DEP/NX, CFI, stack canaries
│   ├── waf.md                         # WAF rules, ModSecurity, Cloudflare
│   ├── ids-ips.md                     # Snort, Suricata, YARA rules
│   └── siem.md                        # Splunk, ELK, detection logic
├── red-team/
│   ├── reconocimiento.md              # OSINT, Shodan, amass
│   ├── c2-frameworks.md               # Cobalt Strike, Sliver, Havoc
│   ├── persistencia.md                # COM hijacking, WMI, cron
│   └── evasion.md
├── cloud-security/
│   ├── aws-security.md                # IAM, SCPs, GuardDuty, CloudTrail
│   ├── gcp-security.md
│   └── azure-security.md
├── forensics/
│   ├── memoria-forensics.md           # Volatility, memory artifacts
│   ├── disk-forensics.md
│   └── network-forensics.md
├── side-channels/
│   ├── spectre-meltdown.md
│   ├── flush-reload.md
│   └── rowhammer.md
└── _index.md
```

## Topics pendientes

- [ ] Heap exploitation moderno: tcache poisoning — fuente: [glibc malloc.c](https://sourceware.org/git/?p=glibc.git;a=blob;f=malloc/malloc.c)
- [ ] Kernel exploitation: ret2usr, SMEP/SMAP bypass — fuente: [Linux kernel exploit writeups]
- [ ] XZ Utils backdoor anatomy — fuente: [Openwall analysis](https://www.openwall.com/lists/oss-security/2024/03/29/4)
- [ ] FLUSH+RELOAD side channel — fuente: [FLUSH+RELOAD paper (Yarom & Falkner, 2014)](https://eprint.iacr.org/2013/448.pdf)
- [ ] Privacidad diferencial: mecanismos Laplace y Gaussiano — fuente: [Dwork & Roth 2014]
- [ ] Signal protocol: Double Ratchet — fuente: [Signal Protocol spec](https://signal.org/docs/specifications/doubleratchet/)
- [ ] TLS 1.3 handshake completo — fuente: [RFC 8446](https://www.rfc-editor.org/rfc/rfc8446)
- [ ] AES-GCM internals — fuente: [NIST SP 800-38D](https://csrc.nist.gov/publications/detail/sp/800-38d/final)

## Estadísticas

| Métrica | Valor |
|---------|-------|
| Archivos totales | 0 |
| Archivos completos (✅) | 0 |
| Stubs (📋) | 0 |
| Topics pendientes | 8 |

---

*Última actualización: 2026-05*
