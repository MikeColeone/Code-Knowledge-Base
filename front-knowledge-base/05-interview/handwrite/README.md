# 手写题

手写题按能力域归档，部分文件来自 `01-foundation/js/code.md` 和 `01-foundation/css/code.md` 的结构迁移。

## algorithm

- [版本号排序](algorithm/algorithm-question-002.md)
- [不借助变量交换两个数](algorithm/algorithm-question-003.md)
- [二进制数相加](algorithm/algorithm-question-004.md)
- [手写n个2的n次方之和](algorithm/n-2-n.md)
- [> 1. 全局唯一标识符（GUID，Globally Unique Identifier）也称作 UUID(Universally Unique IDentifier) 。](algorithm/基于js生成指定长度和基数的UUID算法.md)
- [题目描述](algorithm/最长严格递增子序列.md)
- [versions是一个项目的版本号列表，因多人维护，不规则](algorithm/版本号排序.md)
- [- leetcode](algorithm/螺旋矩阵.md)
- [```js](algorithm/链表去重.md)

## array-object

- [手写Array的map方法](array-object/array-map.md)
- [判断是不是空对象](array-object/array-object-question-002.md)
- [数组清空 尽量多的方法](array-object/array-object-question-003.md)
- [数组拍平](array-object/array-object-question-005.md)
- [数组深度](array-object/array-object-question-006.md)
- [将一个数组分割成多个数组，其中每个数组的单元数目由 length 决定。最后一个数组的单元数目可能会少于 length 个。示例:const a = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];chunk(a, 4);结果：[['a', 'b', 'c', 'd'],['e', 'f', 'g', 'h']]](array-object/array_chunk函数.md)
- [```js](array-object/GroupBy函数.md)
- [用 IIFE 模式实现一个模块（对象）](array-object/iife.md)
- [模拟js数组中的reduce和reduceRight方法](array-object/js-reduce-reduceright.md)
- [模拟js的数组函数中的reduce方法，再通过少许修改实现reduceRight，已知代码如下：](array-object/js数组中的reduce和reduceRight方法.md)
- [示例：var object = { 'a': [{ 'b': { 'c': 3 } }] }; get(object, 'a[0].b.c');// => 3 get(object, ['a', '0', 'b', 'c']);// => 3 get(object, 'a.b.c', 'default');// => 'default'](array-object/lodash.get.md)
- [```js](array-object/列表元素反转.md)
- [```js](array-object/类型判断.md)
- [如何把一个类数组，比如 arguments 转成数组](array-object/类数组对象转换为数组.md)

## async-promise

- [Js原子锁](async-promise/async-promise-question-010.md)
- [基本: 实现定时器 hooks 封装](async-promise/hooks.md)
- [实现JS限流调度器，方法add接收一个返回Promise的函数，同时执行的任务数量不能超过两个。](async-promise/js-add-promise.md)
- [JS的promise可用于封装各类异步调用场景，但多数接口都有访问qps的限制，要求实现一个ES6 class (或ES5函数类），该类可以接受并行执行promise的上限参数M作为构造参数，通过提供一个enqueue方法来接收promise生成器，并确保线程执行中的promise数量始终不超过M，调用样例参考：](async-promise/js-promise-qps-es6-class-es5-promise-m-enqueue-promise-promise-m.md)
- [JS实现一个带并发限制的异步调度器Scheduler，保证同时运行的任务最多有两个。完善代码中Scheduler类，使得以下程序能正确输出](async-promise/js-scheduler-scheduler.md)
- [实现Promise.all](async-promise/promise-all.md)
- [手写Promise.all](async-promise/promise.all.md)
- [手写promise](async-promise/promise.md)
- [实现 promisify(fn)](async-promise/Promiseify.md)
- [promise](async-promise/promise相关手写.md)
- [实现一个repeat方法，要求如下：需要实现的函数function repeat (func, times, wait) { // 补全}使下面调用代码能正常工作const repeatFunc = repeat(console.log, 4, 3000);repeatFunc("hello world"); //会输出4次 hello world, 每次间隔3秒](async-promise/repeat-function-repeat-func-times-wait-const-repeatfunc-repeat-console-log-4-3000-repeatfu.md)
- [请用requestAnimationFrame实现一个心跳函数](async-promise/requestanimationframe.md)
- [使用 seTimteout 实现 setInterval](async-promise/setInterval.md)
- [通过 setTimeout 实现 setInterval 和 clearInterval 函数。](async-promise/settimeout-setinterval-clearinterval-2.md)
- [通过 setTimeout 实现 setInterval 和 clearInterval 函数。](async-promise/settimeout-setinterval-clearinterval.md)
- [```js](async-promise/回调地狱.md)
- [```js](async-promise/并发控制.md)
- [- 实现JS限流调度器，方法add接收一个返回Promise的函数，同时并行处理的任务数不超过设定的上限。](async-promise/异步限流调度器.md)
- [通过requestAnimationFrame，实现一个迭代器](async-promise/心跳函数.md)
- [- JS实现一个带并发限制的异步调度器Scheduler，保证同时运行的任务最多有两个。完善代码中Scheduler类，使得以下程序能正确输出：](async-promise/手写带并发限制的异步调用器.md)

## business-component

- [假设你有 100 万用户，每名用户都有自己的唯一id(整数型，uid)。现在要对指定 pct% 的用户进行实验。请编写一个算法，用来确认某一个用户是否应该进入实验组（pct% 中的用户）。](business-component/AB 实验.md)
- [为Array实现一个Reader，通过接口getReader获取，Reader有一个接口read(n)每次调用会按顺序读取数组的n（默认为1）个元素调用不会改变数组本身的值若数组已全部读取完则返回空数组若传入的参数不为正整数则抛出异常例如：interface Reader {](business-component/Array实现一个Reader.md)
- [```js](business-component/Modal的组件.md)
- [简易 AutoComplete 的实现。现给出一个搜索框（input#search），在其上面输入并停顿超过 200 毫秒会发送 HTTP 请求（请求接口已给出）来获取建议选项并显示在搜索框下方（ul#suggest-list），可点击选取建议选项来替代搜寻框中的文字。](business-component/suggestion控件.md)
- [1. 国家：下拉框](business-component/级联选择器.md)

## design-pattern

- [简单的订阅发布模型](design-pattern/design-pattern-question-001.md)
- [观察者模式](design-pattern/design-pattern-question-003.md)
- [实现简单的MVC,例如HH:mm:ss的展示](design-pattern/mvc-hh-mm-ss.md)

## dom-browser

- [```javascript](dom-browser/defineProperty实现一个最简单的双向数据.md)
- [计算文本行数,计算给定宽度的 div 元素中，文本字符占多少行？](dom-browser/dom-browser-question-001.md)
- [domReady函数能够确保参数callback能够在dom ready后被调用。](dom-browser/domReady函数.md)
- [追问](dom-browser/html标签.md)
- [统计标签数量,考虑iframe](dom-browser/iframe.md)
- [* 某些情况下，用户对象可能会覆盖 `__proto__` 属性：](dom-browser/instanceof.md)
- [```js](dom-browser/js代码执行顺序.md)
- [```js](dom-browser/js常见代码阅读.md)
- [```js](dom-browser/js数字的语法.md)
- [// 例如：](dom-browser/前端类型基础.md)
- [已知如下结构，用css3特性实现sublime和firefox的标签页效果展示](dom-browser/火狐圆角.md)

## function

- [const add = curry((a,b,c)=>a+b+c); // fn = summation function](function/const-add-curry-a-b-c-a-b-c-fn-summation-function.md)
- [设计一个 errorWrapper 函数，要求针对函数 function A 进行包装，当函数 A 执行报错的时候，可以用公共的 errorHandle 函数处理错误，并且把这个错误继续向上抛出，否则正常返回A 的执行结果。](function/errorwrapper-function-a-a-errorhandle-a.md)
- [设计一个 errorWrapper 函数，要求针对函数 function A 进行包装，当函数 A 执行报错的时候，可以用公共的  errorHandle 函数处理错误，并且把这个错误继续向上抛出，否则正常返回A 的执行结果。](function/function error 的包装函数.md)
- [防抖](function/function-question-001.md)
- [节流](function/function-question-002.md)
- [实现一个开平方根的函数，结果精确到小数点后4位](function/function-question-005.md)
- [链式调用封装](function/function-question-007.md)
- [模拟实现loadash中的_.get()函数，实现如下传入参数取值效果](function/loadash-get.md)
- [memoize函数](function/memoize.md)
- [实现一个 Paths 的类型函数, 返回传入类型的所有值的访问路径(以点分割)](function/path类型函数.md)
- [实现一个useThrottle React Hook，要求其可接受一个Function函数和最短触发事件阈值Span，使得该函数在每次调用后的Span时间区间内不再触发重新调用](function/usethrottle-react-hook-function-span-span.md)
- [能够实现xxx时间之前函数后，让其稍加改造，如：输入日期与当前时间相差超过2天就显示该日期等](function/xxx-2.md)
- [数字格式化问题,将1234567890 --> 1,234,567,890](function/数字格式化.md)
- [实现如下函数，要求返回都等于9](function/柯里化.md)
- [```js](function/格式转换.md)
- [实现一个缓存异步函数结果的函数 cacheWrapper，改函数接受一个参数 func，是需要缓存的函数（func 函数本身调用的参数均为 JSON 类型的数据），要求函数如果之前已经成功执行过，直接返回缓存的结果，否则继续执行该函数返回结果，可以不用  ts 进行书写。](function/缓存函数结果.md)
- [- 节流](function/节流-防抖.md)
- [function sum(...args) {](function/链式调用+延迟计算.md)
- [防抖](function/防抖函数.md)

## layout

- [使用CSS3设计一个立起的圆形，并围绕自身中轴线做360度持续旋转 (类似用手拨动一枚立起的硬币，在桌面上旋转的效果)](layout/css3-360.md)
- [题目描述](layout/css代码题.md)
- [css 实现一个自适应搜索框，输入框部分宽度自适应，搜索按钮宽度固定](layout/layout-question-001.md)
- [已知如下结构，要求实现一个经典的三栏布局(可撑满屏幕)效果，要求如下：](layout/layout-question-002.md)
- [三角形绘制](layout/layout-question-003.md)
- [页面布局](layout/layout-question-004.md)
- [实现一个秒针绕一点旋转的效果](layout/layout-question-006.md)
- [宽高比固定的效果](layout/layout-question-007.md)
- [三栏布局](layout/layout-question-008.md)
- [3点骰子布局](layout/layout-question-009.md)
- [如何用css实现一个类似火狐浏览器的圆角tab标签](layout/layout-question-010.md)
- [居中](layout/layout-question-011.md)
- [```js](layout/rgb-hex互转.md)
- [- 通过代码实现图片自适应排列，要求每行图片宽度之和都一致](layout/图片自适应排列.md)

## misc

- [列表元素反转](misc/misc-question-001.md)
- [数组扁平化](手写代码.md)

## node

- [NodeJS实现简单的HTTP代理和隧道代理](node/nodejs-http.md)

## object-oriented

- [js实现多重继承](object-oriented/object-oriented-question-001.md)

## parser-template

- [diff算法](parser-template/diff-2.md)
- [实现一个简单的diff算法 比较两个虚拟DOM 生成patch补丁 支持key优化 最小DOM操作](parser-template/diff.md)
- [```js](parser-template/glob 匹配.md)
- [写一段JS程序提取URL中的各个GET参数](parser-template/js-url-get.md)
- [封装一个JSON的可视化diff  SDK，能够将两个JSON的差异输出为dom，需要展示增删改的状态。](parser-template/JSON diff和展示.md)
- [解析JSON](parser-template/json.md)
- [实现一个JSONP](parser-template/jsonp.md)
- [输入一段JSON字符串，解析后输出一个js对象，不能使用JSON.parse, eval, new Function](parser-template/JSON解析.md)
- [代码如下：](parser-template/模板引擎原理.md)

## type-challenge

- [MyReturnType<T>，正如起名所述，处理的是 function type T 的返回值 type](type-challenge/myreturntype-t-function-type-t-type.md)
