function f1(next) {
    console.log('1-start');
    next();
    console.log('1-end');
}
function f2(next) {
    console.log('2-start');
    next();
    console.log('2-end');
}
function f3(next) {
    console.log('3-start');
    next();
    console.log('3-end');
}
function compose(...fns) {
    return [...fns, () => { }].reduce((a,b) => (...arg) => a(() => b(...arg)))
}

compose(f1, f2, f3)();
// 1-start
// 2-start
// 3-start
// 3-end
// 2-end
// 1-end