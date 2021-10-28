/* 
    思想：通过n-i次比较选出最小的值与当前位置交换
    时间复杂度：O(n^2)
*/


const data = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0, 11, 44, 55, 66, 88, 11];

function selectUp(arr) {
    const data = [...arr];
    for (let i = 0; i < data.length - 1; i++){
        let min = i;
        for (let j = i + 1; j < data.length; j++){
            if (data[min] > data[j]) {
                min = j
            }
        }
        if (min !== i) {
            let temp = data[min];
            data[min] = data[i];
            data[i] = temp;
        }
    }
    return data
}
console.log('selectUp',selectUp(data));