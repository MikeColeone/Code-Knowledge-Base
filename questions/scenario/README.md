# 场景题

原 `note.md` 已拆分为独立题目文件。迁移阶段只保留原题目和已有内容。

## 方法论

- [场景题回答方法](场景题回答方法.md)

## architecture

- [ES6模块化解析过程运作](architecture/architecture-question-001.md)
- [axios封装](architecture/axios.md)
- [生产环境线下，怎么实现页面自动检查更新](architecture/architecture-question-003.md)
- [Vue组件和插件的区别](architecture/architecture-question-004.md)
- [微前端的域名是如何处理的](architecture/architecture-question-005.md)
- [如何CR的？](architecture/architecture-question-006.md)
- [二次封装组件](architecture/architecture-question-007.md)
- [react组件通信](architecture/architecture-question-008.md)
- [vue组件通信](architecture/architecture-question-009.md)
- [redux原理](architecture/redux.md)
- [输入网址到生成网页](architecture/architecture-question-011.md)
- [前端如何实现截图？](architecture/architecture-question-012.md)
- [当 QPS 达到峰值时，该如何处理？](architecture/architecture-question-013.md)
- [如何解决页面请求接口大规模并发问题](architecture/architecture-question-014.md)
- [大文件上传了解多少](architecture/architecture-question-015.md)
- [站点一键换肤的实现方式有哪些？](architecture/architecture-question-016.md)
- [函数式编程了解多少？](architecture/architecture-question-017.md)
- [什么是领域模型](architecture/architecture-question-018.md)
- [深度 SEO 优化的方式有哪些，从技术层面来说](architecture/architecture-question-019.md)
- [如何通过设置失效时间清除本地存储的数据？](architecture/architecture-question-020.md)
- [【代码实现】JS 中如何实现大对象深度对比](architecture/architecture-question-021.md)
- [如何理解数据驱动视图，有哪些核心要素？](architecture/architecture-question-022.md)
- [vue-cli 都做了哪些事儿，有哪些功能？](architecture/architecture-question-023.md)
- [JS 放在 head 里和放在 body 里有什么区别？](architecture/js-head-body.md)
- [前端如何做页面主题色切换](architecture/architecture-question-025.md)
- [Vue 中 Scoped Styles 是如何实现样式隔离的，原理是什么？](architecture/vue-scoped-styles.md)
- [样式隔离方式有哪些](architecture/architecture-question-027.md)
- [在 JS 中，如何解决递归导致栈溢出问题？](architecture/architecture-question-028.md)
- [在表单校验场景中，如何实现页面视口滚动到报错的位置](architecture/architecture-question-029.md)
- [如何从 0 到 1 搭建前端基建](architecture/architecture-question-030.md)
- [封装一个请求超时，发起重试的代码](architecture/architecture-question-031.md)
- [前端如何设置请求超时时间 timeout](architecture/timeout.md)
- [你认为组件封装的一些基本准则是什么？](architecture/architecture-question-033.md)
- [低代码平台一般底层协议是怎么设计的？](architecture/architecture-question-034.md)
- [大型动态表单的设计与性能优化](architecture/大型动态表单的设计与性能优化.md)

## auth

- [pc端扫码登录](auth/auth-question-001.md)
- [限制一个账号只能在一个地方登录](auth/auth-question-002.md)
- [Oauth2.0](auth/oauth2-0.md)
- [Cookie 构成部分有哪些](auth/cookie.md)
- [扫码登录实现方式](auth/auth-question-005.md)
- [单点登录是什么，具体流程是什么](auth/auth-question-006.md)
- [用 JS 写一个 cookies 解析函数，输出结果为一个对象](auth/auth-question-007.md)
- [HTTP 是一个无状态协议，那么 Web 应用要怎么保持用户的登录态呢？](auth/http-web.md)
- [单点登录是如何实现的？](auth/auth-question-009.md)
- [常见的登录鉴权方式有哪些？](auth/auth-question-010.md)
- [需要在跨域请求中携带另外一个域名下的 Cookie 该如何操作？](auth/cookie-2.md)
- [Token 进行身份验证了解多少？](auth/token.md)
- [在前端应用如何进行权限设计？](auth/auth-question-013.md)
- [图形验证码以及短信验证码登录](auth/auth-question-014.md)
- [登录态无感续期与刷新令牌设计](auth/登录态无感续期与刷新令牌设计.md)

## browser

- [Eventloop requestIdlecallback requestAnimationFrame](browser/eventloop-requestidlecallback-requestanimationframe.md)
- [兼容不同浏览器](browser/browser-question-002.md)
- [跨域 跨站？](browser/browser-question-003.md)
- [JS 超过 Number 最大值的数怎么处理？](browser/browser-question-004.md)
- [DNS 协议了解多少](browser/browser-question-005.md)
- [一直在 window 上面挂东西是否有什么风险](browser/window.md)
- [HTML 中前缀为 data- 开头的元素属性是什么？](browser/browser-question-007.md)
- [script 标签上有哪些属性，分别作用是什么？](browser/script.md)
- [为什么 SPA 应用都会提供一个 hash 路由，好处是什么？](browser/browser-question-009.md)
- [React 如何进行路由变化监听](browser/browser-question-010.md)
- [JS 执行 100 万个任务，如何保证浏览器不卡顿？](browser/browser-question-011.md)
- [React-router 和原生路由区别](browser/browser-question-012.md)
- [HTML 的行内元素和块级元素的区别](browser/browser-question-013.md)
- [介绍一下 requestIdleCallback API](browser/requestidlecallback-api.md)
- [documentFragment API 是什么，有哪些使用场景？](browser/documentfragment-api.md)
- [V8 里面的 JIT 是什么？](browser/browser-question-016.md)
- [不同标签页或窗口间的主动推送消息机制有哪些？（不借助服务端）](browser/browser-question-017.md)
- [在 React 项目开发过程中，是否可以不用 React Router，使用浏览器原生 history 路由来组织页面路由？](browser/react-react-router-history.md)
- [浏览器对队头阻塞有什么优化？](browser/browser-question-019.md)
- [如何检测网页空闲状态（一定时间内无操作）](browser/browser-question-020.md)
- [获取当前页面URL参数](browser/browser-question-021.md)
- [IndexedDB 存储空间大小是如何约束的？](browser/indexeddb.md)
- [浏览器的存储有哪些](browser/browser-question-023.md)
- [大批量 DOM 更新与事件委托怎么设计](browser/大批量DOM更新与事件委托怎么设计.md)

## engineering

- [CI/CD](engineering/ci-cd.md)
- [在一个团队中，你们是如何做版本控制的？如果四个人同时开发一个项目不同的模块，A同事上传合并到了迭代分支，此时你的代码已经拉取下来了，但是A同事的需求被驳回了，不上线嘞，此时你应该怎么办？](engineering/engineering-question-002.md)
- [CDN](engineering/engineering-question-003.md)
- [rspack优化](engineering/rspack.md)
- [Echarts封装](engineering/echarts.md)
- [本地搭建域名调试环境](engineering/engineering-question-006.md)
- [移动端如何实现上拉加载，下拉刷新？](engineering/engineering-question-007.md)
- [如果不使用脚手架，如何用 Webpack 构建一个自己的 React 应用](engineering/engineering-question-008.md)
- [package.json 里面 sideEffects 属性的作用是什么](engineering/package-json-sideeffects.md)
- [Eslint 代码检查的过程是什么？](engineering/eslint.md)
- [git pull 和 git fetch 有什么区别？](engineering/git-pull-git-fetch.md)
- [TS 项目中，如何使用 node_modules 里面定义的全局类型包到自己项目 src 下面使用？](engineering/ts-node-modules-src.md)
- [Webpack 打包时 hash 码是如何生成的](engineering/engineering-question-013.md)
- [你在开发过程中使用过哪些 TS 的特性或者能力？](engineering/engineering-question-014.md)
- [Webpack 项目中通过 script 标签引入资源，在项目中如何处理？](engineering/engineering-question-015.md)
- [应用上线后，怎么通知用户刷新当前页面？](engineering/engineering-question-016.md)
- [Vite 和 Webpack 在热更新上有什么区别？](engineering/engineering-question-017.md)
- [Webpack 有哪些优化项目的手段？](engineering/engineering-question-018.md)
- [Webpack 如何打包运行时 chunk，且在项目工程中如何去加载这个运行时 chunk？](engineering/webpack-chunk-chunk.md)
- [在你的项目中使用过哪些 Webpack Plugin，说一下他们的作用](engineering/engineering-question-020.md)
- [在你的项目中使用过哪些 Webpack Loader，说一下他们的作用](engineering/engineering-question-021.md)
- [前端灰度发布与快速回滚方案](engineering/前端灰度发布与快速回滚方案.md)
- [发布后用户拿到旧资源怎么办](engineering/发布后用户拿到旧资源怎么办.md)

## mobile

- [浏览器或者短信中唤起APP](mobile/mobile-question-001.md)
- [机型适配](mobile/mobile-question-002.md)
- [怎么实现 App 头部和页面的背景渐变](mobile/mobile-question-003.md)
- [怎么判断webview加载完成](mobile/webview.md)
- [使用同一个链接，如何实现 PC 打开是 Web 应用、手机打开是一个 H5 应用？](mobile/pc-web-h5.md)
- [H5 如何解决移动端适配问题](mobile/mobile-question-006.md)
- [小程序为什么会有两个线程](mobile/mobile-question-007.md)

## monitoring

- [监控页面卡顿](monitoring/monitoring-question-001.md)
- [内存泄漏排查](monitoring/monitoring-question-002.md)
- [出现问题怎么排查](monitoring/monitoring-question-003.md)
- [线上前端环境出问题怎么排查](monitoring/monitoring-question-004.md)
- [没有做过埋点和性能上报相关？如果你们用一个第三方的上报库，但页面加载这个 JS 失败了，还想上报该怎么办？](monitoring/monitoring-question-005.md)
- [现代前端应用大都是SPA应用，基本一个路由对应着一个页面，本地路由切换浏览器也不会刷新，现在需要实现一个可以统计前端页面PV的SDK，这个SDK可以被添加到各种类型的前端工程中都可以正常工作，思路是什么？](monitoring/spa-pv-sdk-sdk.md)
- [设计一套全站请求耗时统计工具](monitoring/monitoring-question-007.md)
- [用 Node.js 实现一个命令行工具，统计输入目录下面指定代码的行数](monitoring/monitoring-question-008.md)
- [用户访问页面白屏了，原因是什么，如何排查？](monitoring/monitoring-question-009.md)
- [如何统计长任务时间、长任务执行次数](monitoring/monitoring-question-010.md)
- [前端日志埋点 SDK 设计思路](monitoring/monitoring-question-011.md)
- [第三方 SDK 异常时前端如何兜底](monitoring/第三方SDK异常时前端如何兜底.md)

## node

- [Node.js 如何充分利用多核 CPU？](node/node-js-cpu.md)

## performance

- [性能优化的手段](performance/performance-question-001.md)
- [想打开网站立刻看到页面 怎么做？](performance/performance-question-002.md)
- [如何保证用户的使用体验](performance/performance-question-003.md)
- [如何实现网页加载进度条？](performance/performance-question-004.md)
- [常见图片懒加载方式有哪些？](performance/performance-question-005.md)
- [页面加载速度提升（性能优化）应该从哪些方向来思考？](performance/performance-question-006.md)
- [首屏、白屏与卡顿优化手段](performance/performance-question-007.md)

## rendering

- [input select元素 如果是100个元素怎么优雅显示](rendering/input-select-100.md)
- [后端返回大量数据 怎么处理？ 虚拟列表？ 之外呢？](rendering/rendering-question-002.md)
- [分块渲染](rendering/rendering-question-003.md)
- [虚拟滚动加载原理是什么，用 JS 代码简单实现一个虚拟滚动加载](rendering/rendering-question-004.md)
- [如何一次性渲染十万条数据还能保证页面不卡顿](rendering/rendering-question-005.md)
- [JS 的加载会阻塞浏览器渲染吗？](rendering/rendering-question-006.md)
- [后端一次性返回树形结构数据，数据量非常大，前端该如何处理？](rendering/rendering-question-007.md)
- [低代码平台一般渲染是如何设计的？](rendering/rendering-question-008.md)
- [为何现在市面上做表格渲染可视化技术的，大多数都是 Canvas，而很少用 SVG？](rendering/canvas-svg.md)
- [海量表格渲染与交互优化](rendering/海量表格渲染与交互优化.md)

## security

- [Web攻击](security/security-question-001.md)
- [对称加密 非对称加密](security/security-question-002.md)
- [前端水印了解多少？](security/security-question-003.md)
- [Web 应用中如何对静态资源加载失败的场景做降级处理](security/security-question-004.md)
- [Web 网页如何禁止别人移除水印](security/security-question-005.md)
- [站点如何防止爬虫？](security/security-question-006.md)
- [如何防止录屏截图等恶意下载行为](security/security-question-007.md)
