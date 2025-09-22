```js
export function groupBy<T>(array: Array<T>, fn: (data:T) => string): { [key: string]: Array<T> } {
    ///实现一个groupBy函数效果如下
    // 测试数据: [{
    //     "className": "class1",
    //     "name": "张三"
    // },
    // {
    //     "className": "class1",
    //     "name": "李四"
    // },
    // {
    //     "className": "class2",
    //     "name": "王五"
    // }]
    // 结果:
    // {
    //     "class1": [{
    //         "className": "class1",
    //         "name": "张三"
    //     },
    //     {
    //         "className": "class1",
    //         "name": "李四"
    //     }],
    //     "class2": [{
    //         "className": "class2",
    //         "name": "王五"
    //     }]
    // }
    return {}
}
```
