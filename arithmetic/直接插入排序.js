/* 
    思想：以第一个数据为基准，后面的数据依次与前面的比较，找到自己的位置
    时间复杂度：O(n^2)
*/

const data = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0, 11, 44, 55, 66, 88, 11];

function insertUp(arr) {
    const data = [...arr];
    for (let i = 1; i < data.length; i++){
        for (let j = i; j > 0; j--){
            if (data[j] < data[j - 1]) {
                let temp = data[j];
                data[j] = data[j - 1];
                data[j - 1] = temp;
            }
        }
    }
    return data;
}
console.log('insertUp',insertUp(data));