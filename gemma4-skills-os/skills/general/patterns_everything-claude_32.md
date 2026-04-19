---
source_repo: https://github.com/affaan-m/everything-claude-code
source_file: docs/zh-TW/rules/patterns.md
license: MIT
category: skills/general
imported_at: 2026-04-19
---

# 常見模式

## API 回應格式

```typescript
interface ApiResponse<T> {
  success: boolean
  data?: T
  error?: string
  meta?: {
    total: number
    page: number
    limit: number
  }
}
```

## 自訂 Hooks 模式

```typescript
export function useDebounce<T>(value: T, delay: number): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value)

  useEffect(() => {
    const handler = setTimeout(() => setDebouncedValue(value), delay)
    return () => clearTimeout(handler)
  }, [value, delay])

  return debouncedValue
}
```

## Repository 模式

```typescript
interface Repository<T> {
  findAll(filters?: Filters): Promise<T[]>
  findById(id: string): Promise<T | null>
  create(data: CreateDto): Promise<T>
  update(id: string, data: UpdateDto): Promise<T>
  delete(id: string): Promise<void>
}
```

## 骨架專案

實作新功能時：
1. 搜尋經過實戰驗證的骨架專案
2. 使用平行 agents 評估選項：
   - 安全性評估
   - 擴展性分析
   - 相關性評分
   - 實作規劃
3. 複製最佳匹配作為基礎
4. 在經過驗證的結構中迭代
