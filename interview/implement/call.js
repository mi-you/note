/* 
    实现思路
    1、在指定的上下文环境按给定的参数中调用函数
    2、最直接的想法就是把给定的函数作为上下文的一个属性，然后通过 ”上下文.属性(参数)“的调用方式调用
    3、向给定的上下文添加属性可能会覆盖原有的属性，所以可以用 symbol()值做临时属性，之后删除
    4、上下文可能为一些简单类型的值此时要做一些处理
    5、当把上下文作为symbol值作为上下文时，symbol不能被new，还不知道怎么处理。。。。！！！
*/
Function.prototype.customCall = function(context,...arg) {
  if(context === null || context === undefined){
    context = window
  }
  switch(context){
    case typeof context === 'number':
      context = new Number(context)
      break
    case typeof context === 'string':
      context = new String(context)
      break
    case typeof context === 'boolean':
      context = new Boolean(context)
      break
  }
  const symbol = Symbol();
  context[symbol] = this;
  let result = context[symbol](...arg)
  delete context[symbol]
  return result
}