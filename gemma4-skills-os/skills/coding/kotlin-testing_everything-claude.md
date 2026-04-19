---
source_repo: https://github.com/affaan-m/everything-claude-code
source_file: .cursor/rules/kotlin-testing.md
license: MIT
category: skills/coding
imported_at: 2026-04-19
---

---
description: "Kotlin testing extending common rules"
globs: ["**/*.kt", "**/*.kts", "**/build.gradle.kts"]
alwaysApply: false
---
# Kotlin Testing

> This file extends the common testing rule with Kotlin-specific content.

## Framework

Use **Kotest** with spec styles (StringSpec, FunSpec, BehaviorSpec) and **MockK** for mocking.

## Coroutine Testing

Use `runTest` from `kotlinx-coroutines-test`:

```kotlin
test("async operation completes") {
    runTest {
        val result = service.fetchData()
        result.shouldNotBeEmpty()
    }
}
```

## Coverage

Use **Kover** for coverage reporting:

```bash
./gradlew koverHtmlReport
./gradlew koverVerify
```

## Reference

See skill: `kotlin-testing` for detailed Kotest patterns, MockK usage, and property-based testing.
