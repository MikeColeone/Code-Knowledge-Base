为Array实现一个Reader，通过接口getReader获取，Reader有一个接口read(n)每次调用会按顺序读取数组的n（默认为1）个元素调用不会改变数组本身的值若数组已全部读取完则返回空数组若传入的参数不为正整数则抛出异常例如：interface Reader {
    read: (s: any) => any[],
}

Array.prototype.getReader = function(): Reader {
  // TODO
}

// example
const arr = [1, 2, 3, 4, 5, 6];
const reader = arr.getReader();
console.log(reader.read('1')); // Error
console.log(reader.read(-1)); // Error
console.log(reader.read(1.5)); // Error
console.log(reader.read()); // [1]
console.log(reader.read(1)); // [2]
console.log(reader.read(2)); // [3, 4]
console.log(reader.read(3)); // [5, 6]
console.log(reader.read()); // []
console.log(arr); // [1, 2, 3, 4, 5, 6]



```js
Array.prototype.getReader = function() {
    let point = 0;
    return {
        read: (n = 1) => {
            if (!Number.isInteger(n) || n <= 0) throw new Error();
            return this.slice(point, point += n);
        }
    }
}
```
