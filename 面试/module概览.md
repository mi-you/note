## CommonJs
- 服务端模块规范（node.js）
- 模块加载是同步的,在服务器端没什么问题，在浏览器端需要等待
- 浏览器不支持require，module语法，在浏览器需要提前编译打包--使用 browserify 进行
- 语法
```javascript
/* 模块的导出：a.js */
module.exports = {}
// 或
exports = {}

/* 模块的导入: */
// 第三方 && 内置
const moduleA = require('fs')
// 自定义
const moduleA = require('./a.js')
```
- 使用 browserify 的大致方式
```
// 安装
npm install -g browserify
// 打包 入口js -o 打包后的名（可指定路径）
browserify main.js -o bundle.js
```

## AMD
- 专门用于客户端模块的规范
- 异步加载
- 需要使用require.js
- 语法
```javascript
/* 定义模块 */
define(function(){
  return 要暴露的值
})
// 或者
define(['module1','module2'],function(module1,module2){
  return 要暴露的值
})
/* 引入模块 */
require(['module1','module2'],function(module1,module2){
  // 使用
})
```
- require.js的使用
```
// html 中
  <script data-main='./index.js' src="./require.js"></script>
  // index.js 中
  (function(){
    requirejs.config({
      paths:{
        a:'./a',
        b:'./b'
      }
    })
    require(['a'],function(a){
      console.log(a)
    })
  })()
  // a.js
  define(['b'],function(b){
    return {a:1,b}
  })
  // b.js
  define(function() {
    return {b:2}
  });
```
## CMD 忽略
## ES6
- es6的语法还有不支持的需要babel转换
- 当es6->es5时，里面有使用require语法，浏览器不认识需要使用browserify
- 语法
```javascript
  /* 导入 */
  import xxx from './index'
  import {x,y} from './index'
  /* 导出 */
  export {}
  export default {}
```
- Babel使用
```
// 
```


