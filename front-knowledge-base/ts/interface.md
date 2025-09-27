```ts
interface Point { x: number; }
interface Point { y: number; }

const point:Point = {x : 1}

```

会报错，声明的同名接口ts会自动合并，因此缺失了y属性，但是注意type不支持合并，不支持重复声明。


type & interface
