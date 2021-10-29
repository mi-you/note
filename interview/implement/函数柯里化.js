function curry(fn,...arg) {
    return fn.length > arg.length 
    ? (...params) => curry(fn,...arg,...params)
    :fn(...arg)
}
    
let add = curry((a,b,c) => a + b + c)
console.log(add(1)(2)(3))
console.log(add(1, 2)(3))
console.log(add(1, 2, 3))



  
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
let a = add(1)(2)(3)(4),
    b = add(1,2)(3,4),
    c = add(1,2,3,4),
    d = add(1)(2,3,4);
console.log(add(1)(2)(3)(4))
console.log(b == 10,c,d, typeof add(1)(2)(3),add(1)(2)(3))