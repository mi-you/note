  /* 
  * 大数相加 不考虑a，b包含小数
  * 返回的是number则没有越界，返回string则越界
  */ 
  export function bigNumberAdd(a,b){
    let sum = a + b,
      c = 0; //存储进位
    if(Number.isSafeInteger(sum)){
      return sum
    }
    sum = '';
    a = String(a).split('');
    b = String(b).split('');
    while(a.length || b.length || c){
      c += ~~a.pop() + ~~b.pop();
      sum = c % 10 + sum;
      c = c > 9;
    }
    return sum.replace(/^0+/,'')
  }
  
  /* 
  * 节流函数
   */
export function throttle(fn,delay = 50){
  let flag = true;
  return (...arg) => {
    if(flag){
      flag = false;
      window.requestAnimationFrame(() => fn(...arg));
      setTimeout(() => flag = true,delay);
    }
  }
}
/* 
* 防抖函数
 */
export function debounce(fn,delay = 50){
  let timer = null;
  return (...arg) => {
    clearTimeout(timer)
    timer = setTimeout(() => window.requestAnimationFrame(() => fn(...arg)),delay)
  }
}