# 不借助变量交换两个数

```ts
function swap(a,b){
  a=a^b;
  b=b^a;
  a=a^b;
    return [a,b]
}

funtion swap(a,b){
    return [a,b] = [b,a];
}

function swap(a,b){
    b = b - a;
    a = a + b;
    b = a - b;
    return [a,b];
}
```
