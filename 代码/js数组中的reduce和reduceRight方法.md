模拟js的数组函数中的reduce方法，再通过少许修改实现reduceRight，已知代码如下：

```javascript
if (!Array.prototype.reduce) {
  Array.prototype.reduce = function (fun /*, initialValue */) {
    if (this === void 0 || this === null) { throw TypeError(); }
    // 补全代码...
}
```
