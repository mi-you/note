function deepClone(obj, weakMap = new WeakMap()) {
    if (obj instanceof RegExp) { return new RegExp(obj) }
    if (obj instanceof Date) { return new Date(obj) }
    if (typeof obj !== 'object' || obj === null) { return obj }
    if (weakMap.has(obj)) { return weakMap.get(obj) }

    const objCopy = new obj.constructor();
    weakMap.set(obj,objCopy);
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            objCopy[key] = deepClone(obj[key], weakMap);
        }
    }
    return objCopy;
}

let a = {a:'a'},b = {b:'b'};
a.b = b;
b.a = a;
console.log(deepClone(a))
