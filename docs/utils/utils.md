# 常用的工具函数

## 防抖

```typescript
const debounce = (fn: Function, delay: number) => {
  let timer: number
  return function (...args) {
    if (timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(() => {
      fn.apply(this, args)
    }, delay)
  }
}
```

## 节流

```typescript
// timer 实现
const throttle = (fn: Function, delay: number) => {
  let timer: number
  return function (...args) {
    if (!timer) {
      timer = setTimeout(() => {
        fn.apply(this, args)
        timer = null
      }, delay)
    }
  }
}
```

```typescript
// 计时实现
const throttle = (fn: Function, delay: number) => {
  let lastTime = 0
  return function (...args) {
    const now = +new Date()
    if (now - lastTime > delay) {
      fn.apply(this, args)
      lastTime = now
    }
  }
}
```
