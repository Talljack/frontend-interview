## 常用的数组操作

### 数组去重

```ts
const removeDuplicate = <T = any>(arr: T[]) => {
  return [...new Set(arr)]
}
```
