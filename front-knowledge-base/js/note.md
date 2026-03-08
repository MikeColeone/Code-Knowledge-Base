# AST语法树

# Babel

## 平时开发有有用过babel么，作用是什么？

## 下面这个babel配置文件作用是什么：

```js
{
    "presets": [
        "es2015"，
        "react",
        "stage-0"
    ],
    "plugins": []
}
```

## stage可以取哪些值，作用是什么？

# DOM中对应创建、移除、追加、复制、查找节点的方法是什么？

# js内存模型

# 为什么说JavaScript引擎是单线程的，但是却有await/async关键字？

# Promise

# requestAnimationFrame 和 setTimeout

# require import

# this指针绑定

# var let cons

# 垃圾回收机制

# 内存泄漏？怎么排查？

# 字符串为何不可变

# 异步操作

# 异步队列macrotask和microtask

```
console.log('begin')
setTimeout(() => {
	console.log('setTimeout 1')
	Promise.resolve().then(() => {
		console.log('promise 1')
		setTimeout(() => {
			console.log('setTimeout2 between promise1&2')
		})
	}).then(() => {
		console.log('promise 2')
	})
}, 0)
console.log('end')

```

# 普通函数 箭头函数

# 正则表达式

# 深拷贝 浅拷贝

# decorator(装饰器)的概念和实践有哪些

# 闭包

# 高阶函数

# **ES Module vs CommonJS**

# **apply/call/bind** 

# JS二进制

# 内存空间

# 内存机制

# 常见内存泄漏

# 执行上下文

# 执行上下文栈

# 数据类型和引用

# 原型和原型链
