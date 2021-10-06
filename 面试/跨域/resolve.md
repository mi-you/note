### 跨域解决方案
- JSONP
	- 通过`<script>`标签
	- 需要前后端配合，只支持get,不安全
	- ?callback=functionName
	
- cors
	- 后端设置请求头`Access-Control-Allow-Origin:*;`或指定某一特定的域。`*`不能接受`cookie`
	- 前端如果需要可以设置`Access-Control-Allow-Credential:true;`
	
- http proxy
	- 一般结合webpack webpack-dev-server使用
	- 在webpack.config.js的devServer内配置proxy
	
- nginx 反向代理

- postMessage
	- 不同页面间通信，如iframe

- webSocket

- document.domain + iframe
	- 只能实现同一个主域，不同子域之间通信
	
- window.name
	- 