```js
var y = 1;
if (function f(){}) {
    y += typeof f;
}
console.log(y);
```


正确的答案应该是 1undefined。

JavaScript中if语句求值其实使用eval函数，eval(function f(){}) 返回 function f(){} 也就是 true。

下面我们可以把代码改造下，变成其等效代码。

```javascript
var k = 1;
if (1) {
    eval(function foo(){});
    k += typeof foo;
}
console.log(k); 
```
