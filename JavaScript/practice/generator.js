// const asyncA = () => {
//   setTimeout(() => {
//     console.log('异步A执行了！')
//   },1000)
// }
// const asyncB = () => {
//   setTimeout(() => {
//     console.log('异步B执行了！')
//   },1000)
// }
// const asyncC = () => {
//   setTimeout(() => {
//     console.log('异步C执行了！')
//   },1000)
// }

const { resolve } = require("node:path")

// const generator = function * (){
//   console.log('start')
//   let resultA = yield asyncA()
//   console.log(resultA)
//   let resultB = yield asyncB()
//   console.log(resultB)
//   let resultC = yield asyncC()
//   console.log(resultC)
//   console.log('end')
// }

// const gIterator = generator();
// for (const v of gIterator) {
//   console.log("V:",v)
// }

// for (const v of (function*fn(n){
//   while(n){
//     yield n--
//   }
// })(5)) {
//   console.log(v)
// }

// for (const v of (function*fn(){
//   yield* [1,2,3,4,5]
// })()) {
//   console.log(v)
// }
// for (const v of (function*fn(){
//   console.log(yield* {
//     [Symbol.iterator](){
//       let n = 4
//       return {
//         next(){
//           if(n){
//             return {done:false,value:n--}
//           }else{
//             return {done:true,value:'end'}
//           }
//         }
//       }
//     }
//   })
// })()) {
//   console.log(v)
// }

// function *asy(){
//   let i = yield new Promise((resolve,reject) => {setTimeout(() => resolve(1),1000)})
//   yield new Promise((resolve,reject) => {setTimeout(() => resolve(++i),1000)})
//   yield new Promise((resolve,reject) => {setTimeout(() => resolve(++i),1000)})
//   yield new Promise((resolve,reject) => {setTimeout(() => resolve(++i),1000)})
// }
// for await (iterator of asy()) {
//   console.log(iterator)
// }