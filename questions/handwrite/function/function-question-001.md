# 防抖

```ts
function debounce(fun, delay) {
    let timer = null;
    return function (...args) {
        clearTimeout(timer);         // 清除上次定时器
        timer = setTimeout(() => {
            fun.apply(this, args);
        }, delay);
    }
}
```
