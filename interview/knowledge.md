## 写手 bind()[MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/bind)

## js 中的宏任务与微任务[B 站视频](https://www.bilibili.com/video/BV1eJ41177Rg?from=search&seid=5166514918102248165)

- 主线程：也就是 js 引擎执行的线程，这个线程只有一个，页面渲染、函数处理都在这个主线程上执行。
- 工作线程：工作线程：也称幕后线程，这个线程可能存在于浏览器或 js 引擎内，与主线程是分开的，处理文件读取、网络请求等异步事件。
- 任务队列
  - 宏任务队列：setTimeout、setInterval、DOM、Ajax
  - 微任务队列：Promise、async/await、MutationObserver、process.nextTick(Node.js 环境)

## 函数柯里化

- 把多参函数转化为单参函数

```javascript
function add() {
  const _args = Array.of(...arguments);
  const _adder = function () {
    _args.push(...arguments);
    return _adder;
  };
  _adder.toString = function () {
    return _args.reduce((prev, next) => prev + next);
  };
  return _adder;
}
let a = add(1)(2)(3)(4);
console.log(a, a + 1);
```

## js 常用的设计模式

### 单例模式

### 工厂模式、构造函数模式

### 发布订阅者模式

- `301` Moved Permanently：永久性定向。该状态码表示请求的资源已被分配了新的 URI，以后应使用资源现在所指的 URI。
- `302` Found：临时性重定向。该状态码表示请求的资源已被分配了新的 URI，希望用户（本次）能使用新的 URI 访问。和 301 相似，但 302 表示的资源不是永久移动，只是临时性的。
- `303` See Other：该状态码表示由于请求对应的资源存在着另一个 URI，应使用 GET 方法定向获取请求的资源， 303 和 302 状态码有着相同的功能，但是 303 明确表示客户端应当采用 get 方法获取资源，这点与 302 状态码有区别。比如，当使用 post 方法访问 CGI 程序，其执行后的处理结果为希望客户端能以 get 方法重定向到另一个 uri 上去时，返回 303 状态码。虽然 302 也可实现相同的功能，但这里使用 302 状态码是最理想的。当 301、302、303 响应状态码返回时，几乎所有浏览器都会把 post 改成 get，并删除请求报文内的主体，之后请求会自动再次发送。301、302 标准是禁止将 post 方法改变成 get 方法的，但实际使用时大家都会这么做。
- `307` Temporary Redirect：临时重定向。该状态码与 302 有相同的含义。尽管 302 标准禁止 post 变化 get，但实际使用时大家不遵守。307 会遵照浏览器标准，不会从 post 变为 get。但是对于处理响应时的行为，各种浏览器有可能出现不同的情况。
- `304` （未修改）：自从上次请求后，请求的网页未修改过。 服务器返回此响应时，不会返回网页内容。
- `305` （使用代理）：请求者只能使用代理访问请求的网页。 如果服务器返回此响应，还表示请求者应使用代理。

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

```javascript
function htmlEscape(text) {
  return text.replace(/[<>"&]/g, function (match, pos, originalText) {
    switch (match) {
      case "<":
        return "&lt;";
      case ">":
        return "&gt;";
      case "&":
        return "&amp;";
      case '"':
        return "&quot;";
    }
  });
}
```

## [浏览器垃圾回收](https://www.jianshu.com/p/0cdf8f60400d)

- [标记清除](https://blog.csdn.net/a8725585/article/details/106836648)
- 引用计数

## 实现 0.5px 的线

```
    width: 1000px;
    height: 1px;
    background-color: red;
    border-bottom: 1px solid green;
    box-sizing: border-box;
    transform: scale(.5);
```

## 什么是 jwt(JSON WEB TOKEN),关于 session 和 token 的一些比较

- 大致概念：https://www.jianshu.com/p/576dbf44b2ae
- 使用方式原理：https://cloud.tencent.com/developer/article/1453903
