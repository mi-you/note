function curry(fn,...arg) {
    return fn.length > arg.length 
    ? (...params) => curry(fn,...arg,...params)
    :fn(...arg)
}
    
let add = curry((a,b,c) => a + b + c)
console.log(add(1)(2)(3))
console.log(add(1, 2)(3))
console.log(add(1,2,3))