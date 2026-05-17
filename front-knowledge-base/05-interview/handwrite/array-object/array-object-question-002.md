# 判断是不是空对象

```ts
function isEmpty(obj){
    for (let key in obj){
        return false;
    }
    return true;
}
```
