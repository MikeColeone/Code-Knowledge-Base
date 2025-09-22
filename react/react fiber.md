官方的一句话解释是“React Fiber是对核心算法的一次重新实现”。 之前React的更新过程是同步的，所有更新逻辑会在一帧之内完成，如果组件过于复杂则会导致更新时间超过一帧，其他事务包括用户输入都会被延迟响应，从而引发卡顿。如下图：  
![](https://pic1.zhimg.com/80/v2-d8f4598c70df94d69825f11dfbf2ca2c_1440w.png) 破解方式——分片。 有了分片之后，更新过程的调用栈如下图所示，中间每一个波谷代表深入某个分片的执行过程，每个波峰就是一个分片执行结束交还控制权的时机。![](https://pic1.zhimg.com/80/v2-78011f3365ab4e0b6184e1e9201136d0_1440w.png) 实现使用的API：requestIdleCallbackQ.为什么引入Fiber架构？原架构有何不足？
A.原架构采用递归遍历方式来更新DOM树，一旦开始，即占用主线程，无法中断，这在页面上会引起问题，如input输入后页面卡顿等
Q.Fiber如何解决该问题
A.时间分片和暂停
Q.Fiber如何实现？
A.使用链表结构，将递归遍历更改为循环遍历，然后配合requestIdleCallback API，实现任务拆分、中断和恢复
Q.Fiber如何实现比较？
A.双缓冲技术，在diff过程中创建新的DOM Tree，diff完成之后生成EffectList，即需要更新的地方，之后进入commit阶段，该阶段不允许中断。
Q.React Hook基于Fiber架构，hook的复用是如何实现的？
A.hook的数据存在于Fiber节点的数据结构中，具体为memoizedState中，该字段中存储了所有hook相关的信息，https://www.jianshu.com/p/d6244228a427 （重要）
