## 写手bind()[MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/bind)
## js中的宏任务与微任务[B站视频](https://www.bilibili.com/video/BV1eJ41177Rg?from=search&seid=5166514918102248165)
- 主线程：也就是 js 引擎执行的线程，这个线程只有一个，页面渲染、函数处理都在这个主线程上执行。
- 工作线程：工作线程：也称幕后线程，这个线程可能存在于浏览器或js引擎内，与主线程是分开的，处理文件读取、网络请求等异步事件。
- 任务队列
  - 宏任务队列：setTimeout、setInterval、DOM、Ajax
  - 微任务队列：Promise、async/await、MutationObserver、process.nextTick(Node.js 环境)
## 函数柯里化
  - 把多参函数转化为单参函数
  ```javascript
    function add(){
      const _args = Array.of(...arguments);
      const _adder = function(){
        _args.push(...arguments);
        return _adder
      };
      _adder.toString = function(){
        return _args.reduce((prev,next) => prev + next)
      }
      return _adder
    }
    let a = add(1)(2)(3)(4)
    console.log(a,a + 1)
  ```
## js常用的设计模式
### 单例模式 
### 工厂模式、构造函数模式
### 发布订阅者模式
  - `301` Moved Permanently：永久性定向。该状态码表示请求的资源已被分配了新的URI，以后应使用资源现在所指的URI。
  - `302` Found：临时性重定向。该状态码表示请求的资源已被分配了新的URI，希望用户（本次）能使用新的URI访问。和301相似，但302表示的资源不是永久移动，只是临时性的。
  - `303` See Other：该状态码表示由于请求对应的资源存在着另一个URI，应使用GET方法定向获取请求的资源， 303和302状态码有着相同的功能，但是303明确表示客户端应当采用get方法获取资源，这点与302状态码有区别。比如，当使用post方法访问CGI程序，其执行后的处理结果为希望客户端能以get方法重定向到另一个uri上去时，返回303状态码。虽然302也可实现相同的功能，但这里使用302状态码是最理想的。当301、302、303响应状态码返回时，几乎所有浏览器都会把post改成get，并删除请求报文内的主体，之后请求会自动再次发送。301、302标准是禁止将post方法改变成get方法的，但实际使用时大家都会这么做。
  - `307` Temporary Redirect：临时重定向。该状态码与302有相同的含义。尽管302标准禁止post变化get，但实际使用时大家不遵守。307会遵照浏览器标准，不会从post变为get。但是对于处理响应时的行为，各种浏览器有可能出现不同的情况。
  - `304` （未修改）：自从上次请求后，请求的网页未修改过。 服务器返回此响应时，不会返回网页内容。
  - `305` （使用代理）：请求者只能使用代理访问请求的网页。 如果服务器返回此响应，还表示请求者应使用代理。
## 前端性能优化[知乎](https://zhuanlan.zhihu.com/p/121056616)
## es5 类和es6中class的区别
  - class类必须new调用，不能直接执行。
  - class类不存在变量提升
  - class类无法遍历它实例原型链上的属性和方法
  - es6为new命令引入了一个new.target属性，它会返回new命令作用于的那个构造函数
  - class类有static静态方法

## link 和 @import区别
- @import 是同步的会阻塞DOM tree的渲染 
- link是html标签，不只限于加载css;@import属于css规则，只限于加载css
- link引入css在页面载入时同时加载；@import(写在css文件内)需要页面完全载入以后加载
- link没有兼容性问题；@import低版本不支持
- link支持使用JavaScript控制；@import不支持
## csrf(cross-site-request-forgery)
- 先理解[session和cookie](https://blog.csdn.net/jnshu_it/article/details/79894570)
- [csrf攻击和防御](https://blog.csdn.net/xiaoxinshuaiga/article/details/80766369)
- 防御csrf(主要有三种策略)
> - **验证 HTTP Referer 字段**  
根据 HTTP 协议，在 HTTP 头中有一个字段叫 Referer，它记录了该 HTTP 请求的来源地址。因此，要防御 CSRF 攻击，如银行网站只需要对于每一个转账请求验证其 Referer 值，如果是以 bank.example 开头的域名，则说明该请求是来自银行网站自己的请求，是合法的。如果 Referer 是其他网站的话，则有可能是黑客的 CSRF 攻击，拒绝该请求。
> - 在请求地址中添加 token 并验证
> - 在 HTTP 头中自定义属性并验证。 
## xss （cross-site-scripting）
```javascript
function htmlEscape(text) { 
  return text.replace(/[<>"&]/g, function(match, pos, originalText) { 
    switch(match) { 
      case "<": 
        return "&lt;"; 
      case ">": 
        return "&gt;"; 
      case "&": 
        return "&amp;"; 
      case "\"": 
        return "&quot;"; 
  } 
}); 
}
```
##  [浏览器垃圾回收](https://www.jianshu.com/p/0cdf8f60400d)
- [标记清除](https://blog.csdn.net/a8725585/article/details/106836648)
- 引用计数

## 实现0.5px的线
- ```
    width: 1000px;
    height: 1px;
    background-color: red;
    border-bottom: 1px solid green;
    box-sizing: border-box;
    transform: scale(.5);
```