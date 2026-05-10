# 26 — Blockchain & Web3

> Bitcoin internals, Ethereum y EVM, Solidity, DeFi, ZK proofs y Layer 2 scaling.

## Mapa del dominio

```
26-blockchain-web3/
├── bitcoin/
│   ├── bitcoin-protocol.md            # UTXO model, script, P2P network
│   ├── bitcoin-mining.md              # PoW, difficulty adjustment, mining pools
│   └── bitcoin-lightning.md           # Payment channels, HTLC, routing
├── ethereum/
│   ├── evm-internals.md               # Opcodes, gas, stack machine
│   ├── ethereum-consensus.md          # Gasper, Casper FFG, LMD GHOST
│   └── ethereum-data.md               # Account model, Patricia Merkle Trie
├── solidity/
│   ├── solidity-internals.md          # ABI encoding, storage layout, gas
│   ├── solidity-security.md           # Reentrancy, overflow, access control
│   └── erc-standards.md               # ERC-20, ERC-721, ERC-1155
├── defi/
│   ├── amm-uniswap.md                 # CFMM, x*y=k, concentrated liquidity
│   ├── lending-aave.md
│   └── mev.md                         # Maximal Extractable Value
├── zk-proofs/
│   ├── zk-snarks.md                   # Groth16, PLONK, arithmetic circuits
│   └── zk-rollups.md                  # zkSync, StarkNet
└── _index.md
```

## Topics pendientes

- [ ] EVM opcodes y gas costs — fuente: [Ethereum Yellow Paper](https://ethereum.github.io/yellowpaper/paper.pdf)
- [ ] Uniswap v3 concentrated liquidity — fuente: [Uniswap v3 whitepaper](https://uniswap.org/whitepaper-v3.pdf)
- [ ] PLONK zk-SNARK — fuente: [PLONK paper (Gabizon et al. 2019)](https://eprint.iacr.org/2019/953.pdf)
- [ ] Bitcoin Lightning HTLC — fuente: [Lightning Network paper (Poon & Dryja)](https://lightning.network/lightning-network-paper.pdf)

## Estadísticas

| Métrica | Valor |
|---------|-------|
| Archivos totales | 0 |
| Topics pendientes | 4 |

---

*Última actualización: 2026-05*
