---
source_repo: https://github.com/affaan-m/everything-claude-code
source_file: .cursor/rules/kotlin-patterns.md
license: MIT
category: skills/general
imported_at: 2026-04-19
---

---
description: "Kotlin patterns extending common rules"
globs: ["**/*.kt", "**/*.kts", "**/build.gradle.kts"]
alwaysApply: false
---
# Kotlin Patterns

> This file extends the common patterns rule with Kotlin-specific content.

## Sealed Classes

Use sealed classes/interfaces for exhaustive type hierarchies:

```kotlin
sealed class Result<out T> {
    data class Success<T>(val data: T) : Result<T>()
    data class Failure(val error: AppError) : Result<Nothing>()
}
```

## Extension Functions

Add behavior without inheritance, scoped to where they're used:

```kotlin
fun String.toSlug(): String =
    lowercase().replace(Regex("[^a-z0-9\\s-]"), "").replace(Regex("\\s+"), "-")
```

## Scope Functions

- `let`: Transform nullable or scoped result
- `apply`: Configure an object
- `also`: Side effects
- Avoid nesting scope functions

## Dependency Injection

Use Koin for DI in Ktor projects:

```kotlin
val appModule = module {
    single<UserRepository> { ExposedUserRepository(get()) }
    single { UserService(get()) }
}
```

## Reference

See skill: `kotlin-patterns` for comprehensive Kotlin patterns including coroutines, DSL builders, and delegation.
