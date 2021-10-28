function sort(arr){
  quickSort(arr,0,arr.length-1)
  console.log('快速排序_尾递归',arr);
}
function quickSort(s,low,height){
  while(low < height){
    let p = partition(s,low,height);
    quickSort(s,low,p-1)
    low = p+1

  }
}
function partition(s,low,height){
  // 提前处理 使s[low]的值位于所选3个数的中间值，即使中枢值的选取更合理
  let m = parseInt((low + height)/2);
  if(s[low] > s[height]){
    swapAB(s,low,height)
  }
  if(s[m] > s[height]){
    swapAB(s,m,height)
  }
  if(s[m] > s[low]){
    swapAB(s,m,low)
  }
  // 根据选取的中枢值p将数组数据分散到其两侧使大的在右小的在左
  let p = s[low];
  while(low < height){
    while(low<height && p <= s[height]){
      height--
    }
    s[low] = s[height]
    while(low<height && p>= s[low]){
      low++
    } 
    s[height] = s[low]
  }
  s[low] = p
  return low
}
function swapAB(arr,prev,next){
  let temp = arr[prev];
  arr[prev] = arr[next];
  arr[next] = temp;
}

export default sort