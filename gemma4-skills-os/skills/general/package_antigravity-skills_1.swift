---
source_repo: https://github.com/sickn33/antigravity-awesome-skills
source_file: plugins/antigravity-awesome-skills/skills/macos-spm-app-packaging/assets/templates/bootstrap/Package.swift
license: MIT
category: skills/general
imported_at: 2026-04-19
---

// swift-tools-version: 6.2
import PackageDescription

let package = Package(
    name: "MyApp",
    platforms: [
        .macOS(.v14),
    ],
    targets: [
        .executableTarget(
            name: "MyApp",
            path: "Sources/MyApp",
            resources: [
                .process("Resources"),
            ])
    ]
)
