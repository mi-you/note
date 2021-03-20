function a(){}
if(true){
  a = 1
  console.log(a)
}
console.log(a)

function b(){}
if(true){
  function b(){}
  b = 1
  console.log(b)
}
console.log(b)