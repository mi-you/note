function sort(arr){
  // 这里的1代表的是数组的第一项arr[0]
  mSort(arr,arr,1,arr.length)
  console.log('归并排序_递归',arr);
}
function mSort(s,t,start,end){
  if(start === end){
    t[start-1] = s[start-1]
  }else{
    let temp = [],
      m = parseInt((start+end)/2);
    mSort(s,temp,start,m)
    mSort(s,temp,m+1,end)
    merge(temp,t,start,m,end)
  }
}
function merge(s,t,start,center,end){
  let i,j,k;
  for(i = start,j = center + 1;i<=center && j<=end;start++){
    if(s[i-1] < s[j-1]){
      t[start-1] = s[i++-1]
    }else{
      t[start-1] = s[j++-1]
    }
  }
  if(i<=center){
    for(k = 0;k <= center-i;k++){
      t[start+k-1] = s[i+k-1]
    }
  }
  if(j<=end){
    for(k=0;k<=end-j;k++){
      t[start+k-1] = s[j+k-1]
    }
  }
}

export default sort