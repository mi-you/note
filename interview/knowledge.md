## js 中的宏任务与微任务[B 站视频](https://www.bilibili.com/video/BV1eJ41177Rg?from=search&seid=5166514918102248165)

- 事件循环队列：setTimeout、setInterval、DOM、Ajax
- task 队列：Promise、async/await、MutationObserver、process.nextTick(Node.js 环境)

## js 常用的设计模式

### 单例模式

### 工厂模式、构造函数模式

### 发布订阅者模式

## 前端性能优化[知乎](https://zhuanlan.zhihu.com/p/121056616)

## es5 类和 es6 中 class 的区别

- class 类必须 new 调用，不能直接执行。
- class 类不存在变量提升
- class 类无法遍历它实例原型链上的属性和方法
- es6 为 new 命令引入了一个 new.target 属性，它会返回 new 命令作用于的那个构造函数
- class 类有 static 静态方法

## link 和 @import 区别

- @import 是同步的会阻塞 DOM tree 的渲染
- link 是 html 标签，不只限于加载 css;@import 属于 css 规则，只限于加载 css
- link 引入 css 在页面载入时同时加载；@import(写在 css 文件内)需要页面完全载入以后加载
- link 没有兼容性问题；@import 低版本不支持
- link 支持使用 JavaScript 控制；@import 不支持

## csrf(cross-site-request-forgery)

- 先理解[session 和 cookie](https://blog.csdn.net/jnshu_it/article/details/79894570)
- [csrf 攻击和防御](https://blog.csdn.net/xiaoxinshuaiga/article/details/80766369)
- 防御 csrf(主要有三种策略)
  > - **验证 HTTP Referer 字段**  
  >   根据 HTTP 协议，在 HTTP 头中有一个字段叫 Referer，它记录了该 HTTP 请求的来源地址。因此，要防御 CSRF 攻击，如银行网站只需要对于每一个转账请求验证其 Referer 值，如果是以 bank.example 开头的域名，则说明该请求是来自银行网站自己的请求，是合法的。如果 Referer 是其他网站的话，则有可能是黑客的 CSRF 攻击，拒绝该请求。
  > - 在请求地址中添加 token 并验证
  > - 在 HTTP 头中自定义属性并验证。

## xss （cross-site-scripting）

## [浏览器垃圾回收](https://www.jianshu.com/p/0cdf8f60400d)

- [标记清除](https://blog.csdn.net/a8725585/article/details/106836648)
- 引用计数

## 什么是 jwt(JSON WEB TOKEN),关于 session 和 token 的一些比较

- 大致概念：https://www.jianshu.com/p/576dbf44b2ae
- 使用方式原理：https://cloud.tencent.com/developer/article/1453903
