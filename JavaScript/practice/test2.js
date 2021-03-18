async function a(num){
  await new Promise((resolve,reject) => {
    setTimeout(resolve,1000)
  })
  return num + 1
}
function b(num){
  return num + 2
}
function c(num){
  return num + 3
}
function d(num){
  return num + 4
}
function compose(...fns){
  return (num) => fns.reduce((promise,fn) => promise.then(fn),Promise.resolve(num))
}
let p = compose(a,b,c,d)
p(1).then(console.log).catch(console.log)