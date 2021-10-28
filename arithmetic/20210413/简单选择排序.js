function sort(arr){
  let min;
  for(let i = 0,len = arr.length - 1;i<len;i++){
    min = i;
    for(let j = i+1,subLen = arr.length; j<subLen; j++){
      if(arr[min] > arr[j]){
        min = j
      }
    }
    if(min !== i){
      swapAB(arr,min,i)
    }
  }
  console.log('简单选择排序',arr);
}

function swapAB(arr,prev,next){
  let temp = arr[prev];
  arr[prev] = arr[next];
  arr[next] = temp;
}

export default sort