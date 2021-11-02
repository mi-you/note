/* 
    实现思路 [MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/bind)
    1、接受上下文和一些预置参数
    2、返回一个函数，该函数应该能处理预置参数和本身参数
    3、返回的函数要在上下文中执行，如果该函数被 new 上下文会发生变化
*/
Function.prototype.customBind = function (context, ...arg) {
    const self = this;
    const fn = function (params) {
        const isNew = this instanceof fn;
        const cxt = isNew ? Object.getPrototypeOf(this) : context;
        self.call(cxt, ...arg, ...params);
    }
    return fn
}