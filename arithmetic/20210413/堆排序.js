function sort(arr){
  // 待排序数组调整为堆结构
  for(let i = parseInt(arr.length/2);i>0;i--){
    heapAdjust(arr,i,arr.length)
  }
  // 将堆顶的值与末尾的值交换，之后调整除最后一个元素之外的元素为一个新的堆结构
  for(let i = arr.length; i > 1;i--){
    swapAB(arr,0,i-1)
    heapAdjust(arr,1,i-1)
  }
  console.log('堆排序',arr);
}

function swapAB(arr,prev,next){
  let temp = arr[prev];
  arr[prev] = arr[next];
  arr[next] = temp;
}
function heapAdjust(arr,index,length){
  let temp = arr[index-1];
  for(let i = index * 2;i <= length;i = i*2){
    if(i<length && arr[i-1] < arr[i]){
      i++
    }
    if(arr[i-1] > temp){
      arr[index-1] = arr[i-1];
      index = i
    }
  }
  arr[index-1] = temp;
}
export default sort