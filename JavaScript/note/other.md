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
## `performance.now()` // `DOMHighResTimeStamp`
```javascript
	let start,end;
	start = performance.now()
	// ...
	end = performance.now()
	end - start
```
# 实现sleep
```javascript
	async function sleep(delay) { 
		return new Promise((resolve) => setTimeout(resolve, delay)); 
	}
	async function foo() { 
		const t0 = Date.now(); 
		await sleep(1500); // 暂停约 1500 毫秒
		console.log(Date.now() - t0); 
	} 
	foo(); // 1502
```








