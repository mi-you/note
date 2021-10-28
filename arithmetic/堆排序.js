/* 
    思想：先将数据调整为大顶堆，之后把堆顶的数据和队尾的数据交换，然后将length -1的数据调整为大顶堆
    时间复杂度：O(nlogn)
*/

const data = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0, 11, 44, 55, 66, 88, 11];

function heapSort(arr) {
    const data = [...arr];
    // 调整为大顶堆
    for (let i = data.length / 2 | 0; i > 0; i--){
        heapAdjust(data, i - 1, data.length);
    }
    console.log([...data])
    for (let j = data.length - 1; j > 0; j--){
        console.log(j,'=>',[...data])
        // 交换对顶和堆尾元素
        let temp = data[j];
        data[j] = data[0];
        data[0] = temp;
        // 重新调整为大顶堆
        heapAdjust(data, 0, j);
    }

    return data
}
function heapAdjust(data, site, length) {
    let temp = data[site];
    for (let i = (site + 1) * 2 - 1; i < length; i = (i + 1) * 2 - 1) {
        if (i + 1 < length && data[i + 1] >= data[i] && data[i + 1] > temp) {
            data[site] = data[i + 1];
            site = ++i
        } else if (data[i] > temp) {
            data[site] = data[i]
            site = i
        }
    }
    data[site] = temp
}
console.log('heapSort',heapSort(data))