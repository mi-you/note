const obj = {};
Object.defineProperty(obj,'name',{
  configurable:false,
  writable:false,
  enumerable:false,
  value:'miyou'
})
Object.defineProperties(obj,{
  age:{
    configurable:true,
    writable:true,
    enumerable:true,
    value:'18'
  },
  sex:{
    configurable:true,
    writable:true,
    enumerable:true,
    value:'1'
  }
})
Object.defineProperty(obj,'name',{
  configurable:false,
  writable:true,
  enumerable:false,
  value:'miyou'
})
obj.name = 124
for (const key in obj) {
  console.log(key)
}
for (const [key,value] of Object.entries(obj)) {
  console.log(key +":"+ value)
}
for (const key of [obj.name,obj.age,obj.sex]) {
  console.log(key)
}