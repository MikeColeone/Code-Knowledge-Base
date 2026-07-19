# 设计一个 errorWrapper 函数，要求针对函数 function A 进行包装，当函数 A 执行报错的时候，可以用公共的 errorHandle 函数处理错误，并且把这个错误继续向上抛出，否则正常返回A 的执行结果。

```ts
//这是一个包装函数 包装函数返回函数 而不是立即执行
function errorWrapper(fun: Function) {
    if (typeof fun !== 'function') {
        throw new Error("is not function");
    }
    return function(...args: any[]) {
        try {
            return fun.apply(this, args);
        } catch (e) {
            // 统一错误处理，比如调用公共 errorHandle
            errorHandle(e);
            throw e;
        }
    }
}
```
