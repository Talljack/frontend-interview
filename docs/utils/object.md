## 常用的 Object 操作

### 对象深拷贝

```typescript
function deepCopy<T = Record<string, any>>(obj: T): T {
  const cloneObj: T = {}
  return Object.keys(obj).reduce((key) => {
    if (typeof obj[key] === 'object') {
      cloneObj[key] = deepCopy(obj[key])
    } else if (typeof obj[key] === 'function') {
      cloneObj[key] = obj[key]
    } else if (typeof obj[key] === 'array') {
      cloneObj[key] = [...obj[key]]
    } else {
      cloneObj[key] = obj[key]
    }
  })
  return cloneObj
}
```
