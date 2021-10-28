function sort(arr){
  let i = 1,
  temp = [],
  len = arr.length; 
  while(i < len){
  mergePass(arr,temp,i,len);
  i = i*2;
  mergePass(temp,arr,i,len);
  i = i*2
  }
  console.log('归并排序_迭代',arr);
}
function mergePass(a,t,size,len){
  let i = 1,j;
  while(i<=len-2*size+1){
    merge(a,t,i,i+size-1,i+2*size-1)
    i = i+2*size
  }
  if(i<len-size+1){
  merge(a,t,i,i+size-1,len)
  }else{
  for(;i<=len;i++){
    t[i-1] = a[i-1]
  }
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