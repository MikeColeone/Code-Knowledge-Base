实现一个 Paths 的类型函数, 返回传入类型的所有值的访问路径(以点分割)

例如 Paths<{ a: { b: string} }> 的结果为 "a" | "a.b"

限定遍历深度为 5


```js
type Paths<T, D extends unknown[] = []> = D extends { length: 5 }
  ? never
  : {
    [K in keyof T]: T[K] extends unknown[]
    ? `${K & string}.${number}` | K
    : T[K] extends object
      ? `${K & string}.${Paths<T[K], [unknown, ...D]> & string}` | K
      : K;
  }[keyof T];
```
