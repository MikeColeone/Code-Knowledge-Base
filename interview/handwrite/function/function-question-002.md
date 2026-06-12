# 节流

```ts
function throttle(fun,delay){
    let timer = null;
    return function(...args){
        if(timer) return;
        timer = setTimeout(()=>{
            fun.apply(this,args);  
            timer = null;  
            },delay)
    }
}
```
