const MAX_LENGTH_INSERT = 7 //有认为是7，也有50的
function sort(arr){
  quickSort(arr,0,arr.length-1)
  console.log('快排+插入',arr);
}
function quickSort(s,low,height){
  if(height - low > MAX_LENGTH_INSERT){
    while(low < height){
      let p = partition(s,low,height);
      quickSort(s,low,p-1)
      low = p+1
    }
  }else{
    insert(s,low,height)
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
// 插入排序
function insert(arr,start,end){
  let init = start,
    j,temp;
  for(;start<end; start++){
    if(arr[start] > arr[start+1]){
      temp = arr[start+1];
      for(j = start;j>=init&&arr[j]>temp;j--){
        arr[j+1] = arr[j]
      }
      arr[++j] = temp;
    }
  }
}
export default sort