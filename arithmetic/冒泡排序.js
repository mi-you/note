/* 
    思想：是通过两两比较把较大的或者较小的值存到队尾，之后缩短队列，循环往复
    时间复杂度：O(n^2)
*/ 

// 待排序数据
const data = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0, 11, 44, 55, 66, 88, 11];

// 冒泡排序 升序
function bubbleUp(arr) {
    // 为了保持原有数据不变，这里不改变原数组
    const data = [...arr]
    for (let compareTime = data.length - 1; 0 < compareTime; compareTime--) {
        for (let j = 0; j < compareTime; j++) {
            if (data[j] > data[j + 1]) {
                // 交换两个值
                let temp = data[j + 1];
                data[j + 1] = data[j];
                data[j] = temp;
            }
        }
    }
    return data
}
console.log('bubbleUp', bubbleUp(data))

// 冒泡排序 降序
function bubbleDown(arr) {
    const data = [...arr];
    for (let compareTime = data.length - 1; 0 < compareTime; compareTime--){
        for (let j = 0; j < compareTime; j++) {
            if (data[j] < data[j + 1]) {
                // 交换两个值
                let temp = data[j + 1];
                data[j + 1] = data[j];
                data[j] = temp;
            }
        }
    }
    return data
}
console.log('bubbleDown',bubbleDown(data))