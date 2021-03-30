// 实现bind
Function.prototype.customBind = function(objThis,...arg){
  const _self = this
  const funcFromBind = function (params) {
    const isNew = this instanceof funcFromBind;
    const context = isNew?Object.getPrototypeOf(this):objThis;
    return _self.call(context,...arg,...params)
  }
  return funcFromBind 
}

// 实现call
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

/*
  事件委托
  parentDOM: 绑定委托事件的节点
  eventType: 事件类型
  selector: 选择器
  callback: 事件触发的回调
*/ 

function delegate(parentDOM,eventType,selector,callback){
  parentDOM.addEventListener(eventType,e => {
    let el = e.target;
    while(!el.matches(selector)){
      if(el === parentDOM){
        el = null
        break
      }
      el = el.parentNode
    }
    el && callback.call(el,e,el)
  })
}