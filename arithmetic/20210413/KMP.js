/* 
* KMP 
*/

function get_kmp_next(str){
  let next = [],
    len = str.length,
    i = 1,
    j = 0;
  next[0] = 0;
  while(i < len){
    if(j === 0 || str[i-1] === str[j-1]){
      j++;
      next[i] = j;
      i++;
    }else{
      j = next[j-1]
    }
  }
  return next
}

let next = get_kmp_next('aba');
console.log(next);