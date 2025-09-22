```js
/**
 * 查找匹配字符串的路径
 * @param obj 目标对象
 * @param pattern 匹配的字符串, 其中 ? 代表通配符
 * @return string[]
 */
function findMatchPaths(obj, pattern) {
  // 补充函数
}
function main() {
  var objNested = {
    a: {
      b1: { c: 1 },
      b2: { c: 1 },
      b3: { d: 1 }
    }
  }
  var arrNested = {
    a: [{ c: 1 }, { c: 1 }, { d: 1 }]
  }
  console.log(findMatchPaths(objNested, 'a.*.c')) // 单个通配符，返回 ['a.b1.c', 'a.b2.c']
  console.log(findMatchPaths(arrNested, 'a.*.*')) // 多个通配符，返回 ['a.0.c', 'a.1.c', 'a.1.d']
}
main()
```
