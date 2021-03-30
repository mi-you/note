# window对象
`BOM` 的核心是 `window` 对象，表示浏览器的实例 `window` 对象在浏览器中有两重身份，一个是ECMAScript 中的 `Global` 对象，另一个就是浏览器窗口的 JavaScript 接口。
- `top`: 始终指向最上层（最外层）窗口，即浏览器窗口本身
- `parent`：对象则始终指向当前窗口的父窗口
- `self` ：它是终极 `window` 属性，始终会指向 `window`。实际上，`self` 和 `window` 就是同一个对象。之所以还要暴露 `self`，就是为了和 `top`、`parent` 保持一致。
> 最上层的 `window`如果不是通过 `window.open()`打开的，那么其 name 属性就不会包含值
- `screenLeft` 和 `screenTop` 属性：用于表示窗口相对于屏幕左侧和顶部的位置 ，返回值的单位是 CSS 像素，返回值是数值
- `moveTo()`、`moveBy()`、`resizeTo()`、`resizeBy()`
```javascript
		// 依浏览器而定，以上方法可能会被部分或全部禁用,
		// 缩放窗口的方法只能应用到最上层的 `window` 对象,而且在某些浏览器中默认是禁用的。
		moveTo(100,100) // 新位置的绝对坐标 x 和 y
		moveBy(100,100) // 相对当前位置在两个方向上移动的像素数
		resizeTo(100,100) // 新的窗口大小
		resizeBy(100,100) // 宽高哥要缩放多少
```
- 像素比：CSS 像素是 Web 开发中使用的统一像素单位。这个单位的背后其实是一个角度：0.0213°。如果屏幕距离人眼是一臂长，则以这个角度计算的 CSS 像素大小约为 1/96 英寸
- `window.devicePixelRatio`：物理像素与 CSS 像素之间的转换比率由`window.devicePixelRatio` 属性提供。如从 1920×1080 转换为 640×320 的设备，`window.devicePixelRatio` 的值就是 3
- `innerWidth`、`innerHeight`、`outerWidth`、`outHeight`
	- `innerWidth`、`innerHeight`：返回浏览器窗口中页面视口的大小（不包含浏览器边框和工具栏）
	- `outerWidth`、`outerHeight`：返回浏览器窗口自身的大小（不管是在最外层 window 上使用，还是在窗格`<frame>`中使用）
- `document.documentElement.clientWidth`、`document.documentElement.clientHeight`、`document.body.clientWidth`、`document.documentElement.clientHeight`：返回页面视口的宽度和高度。
> `innerHeight`，`innerWidth`是包含滚动条的,`clientHeight`,`clientWidth`是不包含滚动条的
- `document.compatMode`
	- `"BackCompat"`：文档为怪异模式。
	- `"CSS1Compat"`：文档不是怪异模式，意味着文档处于标准模式或者准标准模式。现在，这些模式都已经被标准化了，准标准模式已和标准模式相同，而标准模式成为了默认表现。标准模式和准标准模式这两个名字已经失去了意义
- 度量文档相对于视口滚动距离的属性有两对，返回相等的值（都是数值）
	- `window.pageXoffset`/`window.scrollX`
	- `window.pageYoffset`/`window.scrollY`
- `scroll()`、`scrollTo()`、`scrollBy()`
	- 这 3 个方法都接收表示相对视口距离的 x 和 y 坐标
	- 这两个参数在前两个方法中表示要滚动到的坐标，在最后一个方法中表示滚动的距离
	```javascript
		window.scrollBy(0, 100); // 相对于当前视口向下滚动 100 像素
		window.scrollBy(40, 0); // 相对于当前视口向右滚动 40 像素
		window.scrollTo(0, 0);	// 滚动到页面左上角
		window.scrollTo(100, 100);// 滚动到距离屏幕左边及顶边各 100 像素的位置
	```
	- 这几个方法也都接收一个 `ScrollToOptions` 字典，除了提供偏移值，还可以通过 behavior 属性告诉浏览器是否平滑滚动
	```javascript
		// 正常滚动 
		window.scrollTo({ 
		 left: 100, 
		 top: 100, 
		 behavior: 'auto' //默认立即跳到指定位置
		}); 
		// 平滑滚动
		window.scrollTo({ 
		 left: 100, 
		 top: 100, 
		 behavior: 'smooth' //平滑过渡到指点位置
		});
	```
- `window.open()`：返回一个对新建窗口的引用。这个方法接收 4个参数：
	1. 要加载的 URL
	2. 目标窗口
	3. 特性字符串：Page366有关于特性字符串的具体配置
	4. 布尔值：表示新窗口在浏览器历史记录中是否替代当前加载页面
> 1. 第二个参数也可以是一个特殊的窗口名，比如_self、_parent、_top 或_blank。第二个参数不是已有窗口，则会打开一个新窗口或标签页
> 2. 如果打开的不是新窗口，则忽略第三个参数;如果没有传第三个参数，则新窗口（或标签页）会带有所有默认的浏览器特性（工具栏、地址栏、状态栏等都是默认配置）。
> 3. 最后一个参数只有在不打开新窗口时才会使用
>```javascript
>	// 某些浏览器默认不允许缩放或移动主窗口，但可能允许缩放或移动通过window.open()创建的窗口
>	let wroxWin = window.open("http://www.wrox.com/", "wroxWindow","height=400,width=400,top=10,left=10,resizable=yes");
>```
- `close()`：关闭新打开的窗口
```javascript
	wroxWin.close()
```
- 新创建窗口的 `window` 对象有一个属性 `opener`，指向打开它的窗口。如果一个标签页打开了另一个，而 `window` 对象需要跟另一个标签页通信，那么标签便不能运行在独立的进程中。在这些浏览器中，可以将新打开的标签页的 `opener` 属性设置为 `null`，表示新打开的标签页可以运行在独立的进程中
```javascript
	wroxWin.opener === window; // true
	wroxWin.opener = null;
```
- 弹窗屏蔽程序
	- 浏览器内置的弹窗屏蔽程序阻止了弹窗，那么 `window.open()`很可能会返回 `null`
	- 在浏览器扩展或其他程序屏蔽弹窗时，`window.open()`通常会抛出错误
```javascript
	let blocked = false;
	try { 
		let wroxWin = window.open("http://www.wrox.com", "_blank"); 
		if (wroxWin == null){ 
			blocked = true; 
		} 
	} catch (ex){ 
		blocked = true; 
	} 
	if (blocked){ 
		alert("The popup was blocked!"); 
	}
```
- `setTimeout()`、`clearTimeout()`、`setInterval()`、`clearInterval()`：所有超时执行的代码（函数）都会在全局作用域中的一个匿名函数中运行，因此函数中的 `this` 值在非严格模式下始终指向 `window`，而在严格模式下是 `undefined`。如果	给 `setTimeout()`提供了一个箭头函数，那么 `this` 会保留为定义它时所在的词汇作用域
- `alert()`、`prompt()`、`confirm()`、`print()`、`find()`
	- 警告框：alert('文本描述')只接受一个参数，非字符串会转为字符串
	- 确认框：confirm('文本描述')返回true(确定按钮)或false(取消按钮)
	- 提示框：prompt('文本描述','默认值')返回
			下面两个方法不会返回任何有关用户在对话框中执行了什么操作的信息，因此很难加以利用
	- window.print():显示打印对话框
	- window.find():快被废除了，不建议使用

# location对象
这个对象独特的地方在于，它既是 `window` 的属性，也是 `document` 的属性
```javascript
	window.location === document.location //true
```
| 属性 | 示例 | 解释 
|---|:---:|--- 
|location.hash|"#contents"|URL 散列值（井号后跟零或多个字符），如果没有则为空字符串
|location.host|"www.wrox.com:80"|服务器名及端口号
|location.hostname|"www.wrox.com"|服务器名
|location.href|"http://www.wrox.com:80/WileyCDA/?q=javascript#contents"|当前加载页面的完整 URL。location 的 toString()方法返回这个值
|location.pathname|"/WileyCDA/"|URL 中的路径和（或）文件名
|location.port|	"80"|请求的端口。如果 URL中没有端口，则返回空字符串
|location.protocol|"http:"|页面使用的协议。通常是"http:"或"https:"
|location.search|"?q=javascript"|URL 的查询字符串。这个字符串以问号开头
|location.username|"foouser"|域名前指定的用户名
|location.password|"barpassword"|域名前指定的密码
|location.origin|"http://www.wrox.com"|URL 的源地址。只读
```javascript
	//下面的函数解析了查询字符串
	function getQueryStringArgs(){
		let qs = location.search.length > 0:location.search.sbustring(1):'',
			args = {};
		for([name,value] of qs.split('&').map(v => v.split('='))){
			if(name){
				args[name] = value
			}
		}
	}
```
- URLSearchParams：ie不支持 https://developer.mozilla.org/zh-CN/docs/Web/API/URLSearchParams
```javascript
	let qs = "?q=javascript&num=10"; 
	let searchParams = new URLSearchParams(qs);
	alert(searchParams.toString()); // " q=javascript&num=10" 
	searchParams.has("num"); // true 
	searchParams.get("num"); // 10 
	searchParams.set("page", "3"); 
	searchParams.delete("q");
```
- 操作地址
```javascript
	location.assign("http://www.wrox.com");
	//下面两行代码会以同一个 URL 值调用 assign()方法
	window.location = "http://www.wrox.com"; 
	location.href = "http://www.wrox.com";
```
> `hash`、`search`、`hostname`、和 `port` 属性被设置为新值之后都会修改当前 URL除了 `hash` 之外，只要修改 `location` 的一个属性，就会导致页面重新加载新 URL 在以前面提到的方式修改 URL 之后，浏览器历史记录中就会增加相应的记录
- `replace()`：这个方法接收一个 URL 参数，但重新加载后不会增加历史记录
- `reload()`：调用 `reload()`而不传参数，页面会以最有效的方式重新加载。脚本中位于 `reload()`调用之后的代码可能执行也可能不执行，这取决于网络延迟和系统资源等因素。为此，最好把 `reload()`作为最后一行代码
```javascript
	location.reload(); // 重新加载，可能是从缓存加载
	location.reload(true); // 重新加载，从服务器加载
```
# navigator
navigator 对象中关于系统能力的属性将在第 13 章详细介绍。
- 检测插件
```javascript
	// IE11 的 window.navigator 对象开始支持 plugins 和 mimeTypes 属性。
	// 这意味着该函数可以适用于所有较新版本的浏览器
	function hasPlugin(name){
		name = name.toLowerCase();
		for(plugin of window.navigator.plugins){
			if(plugin.name.toLowerCase().indexOf(name) > -1){
				return false;
			}
		}
		return false;
	}
```
- 旧版本 IE 中的插件检测：要检测某个插件就必须知道其 COM 标识符。例如，Flash 的标识符是"ShockwaveFlash.ShockwaveFlash"
```javascript
	// 在旧版本 IE 中检测插件
	function hasIEPlugin(name) { 
		try { 
			new ActiveXObject(name); 
			return true; 
		} catch (ex) { 
			return false; 
		} 
	}
```
- 因为检测插件涉及两种方式，所以一般要针对特定插件写一个函数，而不是使用通常的检测函数
```javascript
	function hasFlash() { 
		var result = hasPlugin("Flash"); 
			if (!result){ 
			result = hasIEPlugin("ShockwaveFlash.ShockwaveFlash"); 
			} 
			return result; 
	}
```
- `plugins.refresh()`:用于刷新 `plugins` 属性以反映新安装的插件。这个方法接收一个布尔值参数，表示刷新时是否重新加载页面。如果传入 `true`，则所有包含插件的页面都会重新加载。否则，只有 `plugins` 会更新，但页面不会重新加载
- 注册处理程序(支持情况非常不好)：`navigator.registerProtocolHandler()`在 HTML5 中定义的,这个方法可以把一个网站注册为处理某种特定类型信息应用程序
# screen对象
window 的另一个属性 screen 对象，是为数不多的几个在编程中很少用的 JavaScript 对象，这个对象中保存的纯粹是客户端能力信息，也就是浏览器窗口外面的客户端显示器的信息
|属性|解释|
|---|---|
|availHeight|屏幕像素高度减去系统组件高度（只读）|
|availLeft|没有被系统组件占用的屏幕的最左侧像素（只读）|
|availTop|没有被系统组件占用的屏幕的最顶端像素（只读）|
|availWidth|屏幕像素宽度减去系统组件宽度（只读）|
|colorDepth|表示屏幕颜色的位数；多数系统是 32（只读）|
|height|屏幕像素高度|
|left|当前屏幕左边的像素距离|
|pixelDepth|屏幕的位深（只读）|
|top|当前屏幕顶端的像素距离|
|width|屏幕像素宽度|
|orientation|返回 Screen Orientation API 中屏幕的朝向|
# history对象
因为 history 是 window 的属性，所以每个 window 都有自己的 history 对象。出于安全考虑，这个对象不会暴露用户访问过的 URL，但可以通过它在不知道实际 URL 的情况下前进和后退
- `go()`：这个方法只接收一个参数，这个参数可以是一个整数，表示前进或后退多少步
- `back()`:后退一页
- `forward()`:前进一页
- `length`:反映历史记录数量
对于 2009 年以来发布的主流浏览器，这包括改变 URL 的散列值（因此，把 `location.hash` 设置为一个新值会在这些浏览器的历史记录中增加一条记录）。
- 历史状态管理：用户每次点击都会触发页面刷新的时代早已过去，为解决这个问题，首先出现的是 `hashchange` 事件（第 17 章介绍事件时会讨论）。HTML5 也为 `history` 对象增加了方便的状态管理特性
- `hashchange`:页面 URL 的散列变化时被触发
- 状态管理API 则可以让开发者改变浏览器 URL 而不会加载新页面
	- `history.pushState()`：这个方法接收 3 个参数：一个 state 对象、一个新状态的标题和一个（可选的）相对 URL。`state`--为防止滥用，这个状态的对象大小是有限制的，通常在 500KB～1MB 以内。	`pushState()`方法执行后，状态信息就会被推到历史记录中，浏览器地址栏也会改变以反映新的相对 URL，因为`pushState()`会创建新的历史记录，所以也会相应地启用“后退”按钮,此时单击“后退”按钮，就会触发 window 对象上的` popstate` 事件。
- `history.state`：获取当前状态
- `popstate`事件：该事件的事件对象有一个 `state` 属性，其中包含通过 `pushState()`第一个参数传入的 `state` 对象
```javascript
	window.addEventListener("popstate", (event) => { 
		let state = event.state; 
		if (state) { // 第一个页面加载时状态是 null 
			processState(state); 
		} 
	});
```
- `history.replaceState()`：更新状态不会创建新历史记录，只会覆盖当前状态
> 使用 HTML5 状态管理时，要确保通过 pushState()创建的每个“假”URL 背后
				都对应着服务器上一个真实的物理 URL。否则，单击“刷新”按钮会导致 404 错误
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		