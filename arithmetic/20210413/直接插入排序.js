function sort(arr){
  let i = 1,
    len = arr.length,
    j,temp;
  for(; i<len; i++){
    if(arr[i] < arr[i-1]){
      temp = arr[i];
      for(j = i-1;j>=0&&arr[j]>temp;j--){
        arr[j+1] = arr[j]
      }
      arr[++j] = temp;
    }
  }
  console.log('直接插入排序',arr);
}

export default sort