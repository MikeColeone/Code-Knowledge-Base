# const add = curry((a,b,c)=>a+b+c); // fn = summation function

>  const add = curry((a,b,c)=>a+b+c); // fn = summation function

> console.log(add(1,2, 3)) // output: 6

> console.log(add(1)(2,3)) // output: 6

> console.log(add(1)(3)(2)) // output: 6

> console.log(add(1,2)(3)) // output: 6

```ts
const curry = (fn)=>{
    // console.log(fn.length)
    const length = fn.length
    return function(...args){
        if(args.length>=length) {
            return fn.apply(this, args)
        }else{
            console.log(args)
            return curry(fn.bind(this, ...args))
        }
    }
}
```

### 深拷贝

```ts

```
