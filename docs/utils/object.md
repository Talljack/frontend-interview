# 常用的 Object 操作

## 对象浅拷贝

```typescript
function shallowCopy<T = Object>(obj: T): T {
  return { ...obj }
}
function shallowCopy1<T = Object>(obj: T): T {
  return Object.assign({}, obj)
}
```

## 对象深拷贝

```typescript
const map = new WeakMap()
const deepCopy = <T extends Object>(obj: T) => {
  if (obj instanceof Object) {
    if (map.has(obj)) {
      return map.get(obj)
    } else {
      const desc = Object.getOwnPropertyDescriptors(obj)
      const clone = Object.create(Object.getPrototypeOf(obj), desc)
      map.set(obj, clone)
    }
  }
  const cloneObj = {} as T
  Object.keys(obj).forEach((key) => {
    if (typeof obj[key] === 'function') {
      cloneObj[key] = function (...args) {
        return obj[key].apply(this, args)
      }
    } else if (obj[key] instanceof RegExp) {
      cloneObj[key] = new RegExp(obj[key].source, obj[key].flags)
    } else if (obj[key] instanceof Date) {
      cloneObj[key] = new Date(obj[key])
    } else if (Array.isArray(obj[key])) {
      cloneObj[key] = [...obj[key]]
    } else if (typeof obj[key] === 'object') {
      cloneObj[key] = deepCopy(obj[key])
    } else {
      cloneObj[key] = obj[key]
    }
  })
  return cloneObj
}
```
