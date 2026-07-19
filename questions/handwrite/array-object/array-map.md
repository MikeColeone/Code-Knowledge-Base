# 手写Array的map方法

```ts
Array.prototype.myMap = function(callback, thisArg) {
  if (typeof callback !== 'function') {
    throw new TypeError(callback + ' is not a function');
  }

  const result = [];
  const arr = this;

  for (let i = 0; i < arr.length; i++) {
    // 只对存在的索引调用（跳过稀疏数组的空位）
    if (i in arr) {
      result[i] = callback.call(thisArg, arr[i], i, arr);
    }
  }

  return result;
};
```
