- [【JavaScript 学习--14】--深入理解ES6中class的this指向问题_class中this的指向-CSDN博客](https://blog.csdn.net/corner2030/article/details/97802475)

```js
inner = 'window';

function say() {
    console.log(inner);
    console.log(this.inner);
}

var obj1 = (function() {
    var inner = '1-1';
    return {
        inner: '1-2',
        say: function() {
            console.log(inner);
            console.log(this.inner);
        }
    }
})();

var obj2 = (function() {
    var inner = '2-1';
    return {
        inner: '2-2',
        say: function() {
            console.log(inner);
            console.log(this.inner);
        }
    }
})();


say();
obj1.say();
obj2.say();
obj1.say = say;
obj1.say();
obj1.say = obj2.say;
obj1.say();
```

1. 下面代码输出什么结果？

```js
window.name = 'ByteDance';
function A () {
   this.name = 123;
}
A.prototype.getA = function(){
	console.log(this);
	return this.name + 1;
}
let a = new A();
let funcA = a.getA;
funcA();
```

2. 如何使`funcA()`返回`undefined`?

3. 下面ES6中又会发生什么，this是什么？

```js
window.name = 'ByteDance';
class A {
	constructor() {
  	this.name = 123;
	}
	getA() { 
	  console.log(this);
		return this.name + 1; 
	}
}
let a = new A();
let funcA = a.getA;
funcA();
```

4. 下面输出什么？

```js
window.name = 'ByteDance';
class A {
        constructor() {
          this.name = 123;
        }
        getA = () => { 
          console.log(this);
                return this.name + 1; 
        }
}
let a = new A();
let funcA = a.getA;
funcA();
```
