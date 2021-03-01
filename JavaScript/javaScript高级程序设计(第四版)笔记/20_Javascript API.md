# Atomics与ShareArrayBuffer
# 跨上下文消息[MDN](cross-document-messaging)
  MDN是一种在不同执行上下文（如不同工作线程或不同源的页面）间传递信息的能力。跨上下文消息用于窗口之间通信或工作线程之间通信。本节主要介绍使用postMessage()与其他窗口通信 。关于工作线程之间通信、MessageChannel 和BroadcastChannel，可以参考第 27 章
  > **`postMessage()`**:XDM核心方法
# Encoding API
# File API与Blob API
# 媒体元素
# 原生拖放
  关于拖放最有意思的可能就是可以跨窗格、跨浏览器容器，有时候甚至可以跨应用程序拖动元素。浏览器对拖放的支持可以让我们实现这些功能。
  > 拖放事件关键的部分是确定每个事件是在哪里触发的。有的事件在被拖放元素上触发，有的事件则在放置目标上触发。  

  > 在某个元素被拖动时，会（按顺序）触发以下事件：
  > 1. `dragstart`
  > 2. `drag`
  > 3. `dragend`  
  > 在按住鼠标键不放并开始移动鼠标的那一刻，被拖动元素上会触发 dragstart 事件,dragstart 事件触发后，只要目标还被拖动就会持续触发 drag 事件，当拖动停止时（把元素放到有效或无效的放置目标上），会触发 dragend  
  
  > 在把元素拖动到一个有效的放置目标上时，会依次触发以下事件：
  > 1. `dragenter`
  > 2. `dragover`
  > 3. `dragleave` 或 `drop`  
  > 只要一把元素拖动到放置目标上，dragenter 事件（类似于 mouseover 事件）就会触发。dragenter事件触发之后，会立即触发 dragover 事件，并且元素在放置目标范围内被拖动期间此事件会持续触发。当元素被拖动到放置目标之外，dragover 事件停止触发，dragleave 事件触发（类似于 mouseout事件）。如果被拖动元素被放到了目标上，则会触发 drop 事件而不是 dragleave 事件。这些事件的目  

  > **即使所有元素都支持放置目标事件，这些元素默认也是不允许放置的**。如果把元素拖动到不允许放置的目标上，无论用户动作是什么都不会触发 drop 事件。不过，通过覆盖dragenter 和 dragover 事件的默认行为，可以把任何元素转换为有效的放置目标标是放置目标元素
  ```javascript
    droptarget.addEventListener("dragover", (event) => { 
      event.preventDefault(); 
    }); 
    droptarget.addEventListener("dragenter", (event) => { 
      event.preventDefault(); 
    });
    // Firefox中图片/文本拖动到放置目标上会导致无效 URL 错误。阻止方式
    droptarget.addEventListener("drop", (event) => { 
      event.stopPropagation();
      event.preventDefault(); 
    });
  ```
  > **`dataTransfer`** 对象
  > - `getData()`
  > - `setData()`  
  > 顾名思义，getData()用于获取 setData()存储的值。setData()的第一个参数以及 getData()的唯一参数是一个字符串，表示要设置的数据类型MIME。"text"和"URL"，会分别被映射到`text/plain`和`text/uri-list`
  > - `dropEffect`:可以告诉浏览器允许哪种放置行为
  >   - `none`:被拖动元素不能放到这里。这是除文本框之外所有元素的默认值。
  >   - `move`：被拖动元素应该移动到放置目标。
  >   - `copy`：被拖动元素应该复制到放置目标。
  >   - `link`：表示放置目标会导航到被拖动元素（仅在它是 URL 的情况下）  
  >   说明：在把元素拖动到放置目标上时，上述每种值都会导致显示一种不同的光标。为了使用 dropEffect 属性，必须在放置目标的 ondragenter 事件
处理程序中设置它。除非同时设置 effectAllowed，否则 dropEffect 属性也没有用  
  > - `effectAllowed`:表示对被拖动元素是否允许 `dropEffect`
  >   - `uninitialized`：没有给被拖动元素设置动作。
  >   - `none`：被拖动元素上没有允许的操作。
  >   - `copy`：只允许"copy"这种 dropEffect。
  >   - `link`：只允许"link"这种 dropEffect。 
  >   - `move`：只允许"move"这种 dropEffect。 
  >   - `copyLink`：允许"copy"和"link"两种 dropEffect。
  >   - `copyMove`：允许"copy"和"move"两种 dropEffect。
  >   - `linkMove`：允许"link"和"move"两种 dropEffect。
  >   - `all`：允许所有 dropEffect。
  >   - `uninitialized`：效果没有设置时的默认值，则等同于 all。分配一个没有效果的其他值给 effectAllowed，则保留原值  
  >   说明：必须在 ondragstart 事件处理程序中设置这个属性。
  > - `addElement(element)`：为拖动操作添加元素。这纯粹是为了传输数据，不会影响拖动操作的
外观。在本书写作时，还没有浏览器实现这个方法。
  > - `clearData(format)`：清除以特定格式存储的数据。
  > - `setDragImage(element, x, y)`：允许指定拖动发生时显示在光标下面的图片。这个方法接收 3 个参数：要显示的 HTML 元素及标识光标位置的图片上的 x 和 y 坐标。这里的 HTML 元素可以是一张图片，此时显示图片；也可以是其他任何元素，此时显示渲染后的元素。
  > - `types`：当前存储的数据类型列表。这个集合类似数组，以字符串形式保存数据类型，比如"text"。

  > HTML5 在所有 HTML 元素上规定了一个 `draggable` 属性，表示元素是否可以拖动。图片和链接的 draggable 属性自动被设置为 true，而其他所有元素此属性的默认值为 false。

# Notification API
  Notifications API 在 Service Worker 中非常有用。渐进 Web 应用（PWA，Progressive Web Application）通过触发通知可以在页面不活跃时向用户显示消息，看起来就像原生应用。
  > Notifications API 有被滥用的可能，因此默认会开启两项安全措施：
  > - 通知只能在运行在安全上下文的代码中被触发；
  > - 通知必须按照每个源的原则明确得到用户允许  
  > 用户授权显示通知是通过浏览器内部的一个对话框完成的。除非用户没有明确给出允许或拒绝的答复，否则这个权限请求对每个域只会出现一次。浏览器会记住用户的选择，如果被拒绝则无法重来。一旦拒绝，就无法通过编程方式挽回，因为不可能再触发授权提示
  ```javascript
  Notification.requestPermission() 
  .then((permission) => { 
    // granted:允许 denied:拒绝
    console.log('User responded to permission request:', permission); 
  });
  // close()方法可以关闭通知
  const n = new Notification('I will close in 1000ms'); 
  setTimeout(() => n.close(), 1000);
  ```
  > **生命周期回调**可用于实现交互。Notifications API 提供了 4 个用于添加回调的生命周期方法：
  > - `onshow` 在通知显示时触发；
  > - `onclick` 在通知被点击时触发；
  > - `onclose` 在通知消失或通过 close()关闭时触发；
  > - `onerror` 在发生错误阻止通知显示时触发。

# Page Visibility API
Web 开发中一个常见的问题是开发者不知道用户什么时候真正在使用页面。如果页面被最小化或隐藏在其他标签页后面，那么轮询服务器或更新动画等功能可能就没有必要了。Page Visibility API 旨在为开发者提供页面对用户是否可见的信息。这个 API 本身非常简单，由 3 部分构成。
- `document.visibilityState` 值，表示下面 4 种状态之一。
  - 页面在后台标签页或浏览器中最小化了。
  - 页面在前台标签页中。实际页面隐藏了，但对页面的预览是可见的（例如在 Windows 7 上，用户鼠标移到任务栏图标上会显示网页预览）。
  - 页面在屏外预渲染。
- `visibilitychange` 事件，该事件会在文档从隐藏变可见（或反之）时触发。
- `document.hidden` 布尔值，表示页面是否隐藏。这可能意味着页面在后台标签页或浏览器中被最小化了。这个值是为了向后兼容才继续被浏览器支持的，应该优先使用 document.visibilityState检测页面可见性。要想在页面从可见变为隐藏或从隐藏变为可见时得到通知，需要监听 visibilitychange 事件。
> document.visibilityState 的值是以下三个字符串之一：
> - `hidden`
> - `visible`
> - `prerender`

# Streams API
# 计时 API
# Web 组件
## HTML模板
> **核心思想**：是提前在页面中写出特殊标记，让浏览器自动将其解析为 DOM 子树，但跳过渲染。`<template>`标签正是为这个目的而生的
```html
<template id="foo"> 
 <p>I'm inside a template!</p> 
</template>
```
> 为`<p>`存在于一个包含在 HTML 模板中的 `DocumentFragment` 节点内,通过`<template>`元素的 content 属性可以取得这个 DocumentFragment 的引用。
> ```javascript
> console.log(document.querySelector('#foo').content); // #document-fragment
> ```
> `importNode()`:克隆 DocumentFragment
>```javascript
> document.importNode(DocumentFragment, true) //true表示克隆子节点
>```
## 影子DOM
概念上讲，影子 DOM（shadow DOM） Web 组件相当直观，通过它可以将一个完整的 DOM 树作为节点添加到父 DOM 树。这样可以实现 DOM 封装，意味着 CSS 样式和 CSS 选择符可以限制在影子 DOM子树而不是整个顶级 DOM 树中。影子 DOM 与 HTML 模板还是有区别的，主要表现在影子 DOM 的内容会实际渲染到页面上，而 HTML 模板的内容不会
> **创建影子DOM**：考虑到安全及避免影子 DOM 冲突，并非所有元素都可以包含影子 DOM。尝试给无效元素或者已经有了影子 DOM 的元素添加影子 DOM 会导致抛出错误。以下是可以容纳影子 DOM 的元素。
- 任何以有效名称创建的自定义元素（参见 HTML 规范中相关的定义）
- `<article>`
- `<aside>`
- `<blockquote>`
- `<body>`
- `<div>`
- `<footer>`
- `<h1>`
- `<h2>`
- `<h3>`
- `<h4>`
- `<h5>`
- `<h6>`
- `<header>`
- `<main>`
- `<nav>`
- `<p>`
- `<section>`
- `<span>`
> `attachShadow()`:影子 DOM 是通过此方法创建并添加给有效 HTML 元素的。
> - 容纳影子 DOM 的元素被称为**影子宿主**（shadow host）。
> - 影子 DOM 的根节点被称为**影子根**（shadow root）。
> - 该方法需要一个`shadowRootInit` 对象。且此对象必须包含一个`mode`属性，值为"open"或"closed"

## 自定义元素
> **创建自定义元素**：自定义元素要使用全局属性 `customElements`，这个属性会返回 `CustomElementRegistry` 对象。  
> `customElements.define()`方法可以创建自定义元素
> ```javascript
>    class FooElement extends HTMLElement {} 
>    customElements.define('x-foo', FooElement); 
>    document.body.innerHTML = ` 
>    <x-foo >I'm inside a nonsense element.</x-foo > 
>    `; 
>    console.log(document.querySelector('x-foo') instanceof FooElement); // true
> ```
> 如果自定义元素继承了一个元素类，那么可以使用 `is` 属性和 `extends` 选项将标签指定为该自定义元素的实例
> ```javascript
>    class FooElement extends HTMLDivElement { 
>    constructor() { 
>     super(); 
>     console.log('x-foo') 
>    } 
>    } 
>    customElements.define('x-foo', FooElement, { extends: 'div' }); 
>    document.body.innerHTML = ` 
>     <div is="x-foo"></div> 
>     <div is="x-foo"></div> 
>    `; 
>    // x-foo 
>    // x-foo
> ```
> **不能在构造函数中添加子 DOM（会抛出 DOMException），但可以为自定义元素添
加影子 DOM 并将内容添加到这个影子 DOM 中**  
> ```javascript
>  //（初始的 HTML）
>  // <template id="x-foo-tpl"> 
>  // <p>I'm inside a custom element template!</p> 
>  // </template> 
>  const template = document.querySelector('#x-foo-tpl'); 
>  class FooElement extends HTMLElement { 
>    constructor() { 
>      super(); 
>      this.attachShadow({ mode: 'open' }); 
>      this.shadowRoot.appendChild(template.content.cloneNode(true)); 
>    } 
>  } 
>  customElements.define('x-foo', FooElement); 
>  document.body.innerHTML += `<x-foo></x-foo`;
> ```  

> **生命周期**[MDN](https://developer.mozilla.org/zh-CN/docs/Web/Web_Components/Using_custom_elements)
> - `constructor()`：在创建元素实例或将已有 DOM 元素升级为自定义元素时调用。
> - `connectedCallback()`：在每次将这个自定义元素实例添加到 DOM 中时调用。
> - `disconnectedCallback()`：在每次将这个自定义元素实例从 DOM 中移除时调用。
> - `attributeChangedCallback()`：在每次可观察属性的值发生变化时调用。在元素实例初始化时，初始值的定义也算一次变化。
> - `adoptedCallback()`：在通过 document.adoptNode()将这个自定义元素实例移动到新文档对象时调用。  

> **升级自定义元素**
> - `CustomElementRegistry.get()`方法会返回相应自定义元素的类
> - `CustomElementRegistry.whenDefined()`方法会返回一个期约，当相应自定义元素
有定义之后解决
> - `CustomElementRegistry.upgrade()`在元素连接到 DOM 之前强制升级(连接到 DOM 的元素在自定义元素有定义时会自动升级)
```javascript
  customElements.whenDefined('x-foo').then(() => console.log('defined!'));
  console.log(customElements.get('x-foo')); 
  // undefined 
  customElements.define('x-foo', class {}); 
  // defined! 
  console.log(customElements.get('x-foo')); 
  // class FooElement {}
  /* */
  // 在自定义元素有定义之前会创建 HTMLUnknownElement 对象
  const fooElement = document.createElement('x-foo'); 
  // 创建自定义元素
  class FooElement extends HTMLElement {} 
  customElements.define('x-foo', FooElement); 
  console.log(fooElement instanceof FooElement); // false
  // 强制升级
  customElements.upgrade(fooElement); 
  console.log(fooElement instanceof FooElement); // true
```
# Web Cryptography API