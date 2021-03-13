## 实现递归的函数,这个函数避免了严格模式下访问`arguments.callee`报错的问题
```javascript
	const factorial = (function f(num){
		if(num <= 1){
			return 1;
		}else{
			return num + f(num - 1)
		}
	})
```
## 尾调用优化递归
```javascript
	function fib(n){ 
		return fibImpl(0,1,n)
	}
	function fibImpl(a,b,n){
		if(n===0){return a}
		return fibImpl(b,a+b,n-1)
	}
	console.log(fib(1000)) 
	// 浏览器轻松计算
	// 原递归fibb(1000)浏览器处理不了
	function fibb(n){
		if(n<2)return n;
		return fibb(n-1) + fibb(n-2)
	}
```
## `performence.now()` // `DOMHighResTimeStamp`
```javascript
	let start,end;
	start = performence.now()
	// ...
	end = performence.now()
	end - start
```







