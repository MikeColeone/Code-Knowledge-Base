# Oauth2.0

可以参考 http://www.jianshu.com/p/0db71eb445c8 或者
http://www.ruanyifeng.com/blog/2014/05/oauth_2_0.html 的答案，
回答的一个重点是 code（授权码）仅一次有效，并且要有失效时间，而且很短，比如一分钟，
因为浏览器收到会立刻跳转。
还有就是服务端可以根据 code 结合相应的 sercet 去获取 token，要说清楚。
