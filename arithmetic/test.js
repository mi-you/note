function maxLen(listA,listB){
  let listAB = [],max = 0;
  for(let i = 0,lenA = listA.length;i < lenA;i++){
    listAB.push([]);
    for(let j = 0,lenB = listB.length;j < lenB;j++){
      if(listA[i] === listB[j]){
        if(i === 0 || j === 0){
          listAB[i][j] = 1;
        }else{
          listAB[i][j] = listAB[i-1][j-1] + 1; 
          max = Math.max(max,listAB[i][j])
        }
      }else{
        listAB[i][j] = 0;
      }
    }
  }
  return max
}
