// arr:min -> max
function sort(arr){
  let flag = true;
  for(let i = 0,len = arr.length;i < len && flag;i++){
    flag = false
    for(let j = 0,subLen = len - i - 1; j < subLen;j++){
      if(arr[j] > arr[j + 1]){
        flag = true
        swapAB(arr,j,j+1);
      }
    }
  }
  console.log('冒泡排序',arr);
}

function swapAB(arr,prev,next){
  let temp = arr[prev];
  arr[prev] = arr[next];
  arr[next] = temp;
}

export default sort
