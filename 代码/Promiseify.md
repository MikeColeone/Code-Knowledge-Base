实现 promisify(fn)

```js
将回调的形式 API（尤其是 Node 提供的很多异步 API） 转成 Promise 形式来调用。
fs.readFile('/etc/passwd', (err, data) => {
  if (err) throw err;
  console.log(data);
});
const readFile = promisify(fs.readFile)
readFile('/etc/passwd').then((data) => {
    console.log(data)
}, (err) => {
  // err 处理
})
```

- solution


```js
function promisify(fn) {
  return function (...args) {
    return new Promise(function (resovle, reject) {
      fn.apply(null, [...args, function (err, data){
        if (err) {
          reject(err);
        } else {
          resolve(data);
        }
      }])
    })
  }
};
```
