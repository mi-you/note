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