# 05 — Filesystems & Storage

> VFS, filesystems locales (ext4, Btrfs, XFS, ZFS, NTFS, APFS), almacenamiento distribuido, FUSE y protocolos de red.

## Mapa del dominio

```
05-filesystems-storage/
├── vfs/
│   ├── vfs-layer.md                   # superblock, inode, dentry, file
│   ├── dcache.md                      # Dentry cache, negative dentries
│   └── page-cache.md                  # Radix tree, writeback, mmap
├── local/
│   ├── ext4-internals.md              # Journal, extents, HTree, lazy init
│   ├── btrfs-internals.md             # B-tree, CoW, subvolumes, checksums
│   ├── xfs-internals.md               # AG, allocation groups, B+trees
│   ├── zfs-internals.md               # ZPL, DMU, ARC, VDEV, zpools, dedup
│   ├── ntfs-internals.md              # MFT, records, attributes, journals
│   └── apfs-internals.md              # CoW, encryption, snapshots, clones
├── distribuido/
│   ├── ceph/
│   │   ├── ceph-rados.md              # RADOS object storage, CRUSH algorithm
│   │   ├── ceph-rbd.md                # Block device
│   │   └── ceph-cephfs.md             # Metadata servers
│   ├── glusterfs.md
│   ├── hdfs.md                        # NameNode HA, DataNode, rack awareness
│   └── nfs-smb.md                     # NFS v4.1, SMB3, multi-channel
├── fuse.md                            # FUSE protocol, low-level API
├── storage-hardware/
│   ├── block-layer.md                 # bio, request_queue, blk-mq
│   ├── io-scheduler.md                # mq-deadline, kyber, bfq
│   └── nvme-internals.md              # Namespaces, queues, ZNS
└── _index.md
```

## Topics pendientes

- [ ] ext4 journal modes (writeback, ordered, data) — fuente: [ext4 docs](https://www.kernel.org/doc/html/latest/filesystems/ext4/)
- [ ] Btrfs CoW semantics y RAID modes — fuente: [Btrfs wiki](https://btrfs.wiki.kernel.org/index.php/Main_Page)
- [ ] ZFS ARC y L2ARC algoritmos — fuente: [OpenZFS GitHub](https://github.com/openzfs/zfs)
- [ ] CEPH CRUSH algorithm — fuente: [CRUSH paper (Weil et al., 2006)](https://ceph.io/assets/pdfs/weil-crush-sc06.pdf)
- [ ] NFS v4.1 session y trunking — fuente: [RFC 5661](https://www.rfc-editor.org/rfc/rfc5661)

## Estadísticas

| Métrica | Valor |
|---------|-------|
| Archivos totales | 0 |
| Archivos completos (✅) | 0 |
| Stubs (📋) | 0 |
| Topics pendientes | 5 |

---

*Última actualización: 2026-05*
