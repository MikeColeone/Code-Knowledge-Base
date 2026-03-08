假设你有 100 万用户，每名用户都有自己的唯一id(整数型，uid)。现在要对指定 pct% 的用户进行实验。请编写一个算法，用来确认某一个用户是否应该进入实验组（pct% 中的用户）。

你的实现应该是幂等的。

```js
function isUserInTestGroup(uid, pct) {
  const base = 10000;
  const isTestMod = Math.floor(base * pct);
  const mod = uid % base;
  return mod <= isTestMod;
}
```
