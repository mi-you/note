// ES5继承
function inheritPrototype(Child,Parent){
  // const prototype = Object.create(Parent.prototype)
  const prototype = create(Parent.prototype)
  Child.prototype = prototype
  prototype.constructor = Child
}
function create(obj){
  const Fun = function(){}
  Fun.prototype = obj
  return new Fun()
}

function Parent(){
  this.name = 'Parent'
}
Parent.prototype.sayName = function(){
  console.log(this.name)
}

function Child(){
  Parent.call(this)
  this.secondName = 'Child'
}
inheritPrototype(Child,Parent)

// const instance = new Child()
// console.log(instance)
// instance.sayName()

// throttle and debounce
function throttle(fn,delay = 100){
  let flag = true
  return (...arg) => {
    'use static'
    if(flag){
      flag = false
      window.requestAnimationFrame(() => fn(...arg))
      setTimeout(() => flag = true,delay)
    }
  }
}
function debounce(fn,delay = 100){
  let timer = null
  return (...arg) => {
    clearTimeout(timer)
    timer = setTimeout(() => {
      window.requestAnimationFrame(() => fn(...arg))
    },delay)
  }
}
const move = debounce((event) => {
  console.log('debounce')
})
const move2 = throttle(event => {
  console.log('throttle')
})
// document.getElementById('div').addEventListener('mousemove',move)
// document.getElementById('div').addEventListener('mousemove',move2)

// 大数相加
function bigNumAdd(str1,str2){
  let flag = 0,abSum,
    sum = [];
  str1 = str1.split('');
  str2 = str2.split('');
  while(str1.length || str2.length){
    abSum = ~~str1.pop() +  ~~str2.pop() + flag;
    if(abSum <= 9){
      sum.unshift(abSum)
      flag = 0
    }else{
      sum.unshift(abSum - 10)
      flag = 1
    }
  }
  if(flag){
    sum.unshift(flag)
  }
  return sum.join('')
}

let sum = bigNumAdd('1','999999999999999999999999999999999');
console.log(sum)












