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














