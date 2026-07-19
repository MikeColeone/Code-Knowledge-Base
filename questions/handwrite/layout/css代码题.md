**题目描述**

使用CSS3实现一个秒针绕一点转动的效果

**答案**

@keyframes move {
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
}
.second-pointer {
     animation: move 60s infinite steps(60);
     transform-origin: center bottom;
}


> 1. 使用CSS3设计一个立起的圆形，并围绕自身中轴线做360度持续旋转 (类似用手拨动一枚立起的硬币，在桌面上旋转的效果)

**答案**

```html


    拆红包


```
