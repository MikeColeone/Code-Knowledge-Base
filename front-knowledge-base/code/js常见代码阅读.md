```js
var x = +'1';
console.log(typeof x);
```

| 操作数类型 A       | 操作数类型 B       | 运算结果 | 说明                                          |
| ------------------ | ------------------ | -------- | --------------------------------------------- |
| number + number    | number + number    | number   | 普通加法                                      |
| string + string    | string + string    | string   | 字符串拼接                                    |
| string + number    | string + number    | string   | 数字被转换成字符串，然后拼接                  |
| number + string    | number + string    | string   | 数字被转换成字符串，然后拼接                  |
| boolean + number   | boolean + number   | number   | boolean 转为数字：true→1，false→0，然后加法 |
| boolean + string   | boolean + string   | string   | boolean 转为字符串："true"/"false"，然后拼接  |
| null + number      | null + number      | number   | null 转为 0，然后加法                         |
| undefined + number | undefined + number | NaN      | undefined 转为 NaN，结果是 NaN                |
| null + string      | null + string      | string   | null 转为 "null"，然后拼接                    |
| undefined + string | undefined + string | string   | undefined 转为 "undefined"，然后拼接          |


```js
```javascript
实现一个CodingMan，可以按照以下方式调用:
CodingMan(“Hank”)输出:
Hi! This is Hank!
CodingMan(“Hank”).sleep(10).eat(“dinner”)
输出
Hi! This is Hank!
//Wait 10 seconds...
Wake up after 10
Eat dinner~
CodingMan(“Hank”).eat(“dinner”).eat(“supper”)
输出
Hi This is Hank!
Eat dinner~
Eat supper~
CodingMan(“Hank”).sleepFirst(5).eat(“supper”)
输出
//Wait five seconds
Wake up after 5
Hi This is Hank!
Eat supper
以此类推。
```

```

```
