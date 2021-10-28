/* 
    思想：把 n个记录看成 n 个有序子序列，每个子序列长度为1，
        然后两两合并得到[n/2]个长度为2或者1的有序子序列，然后再两两合并
    时间复杂度：O(nlogn)
*/

const data = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0, 11, 44, 55, 66, 88, 11];

function merge(arr) {
    const data = [...arr];
    mergeSort(data, data, 0, data.length - 1);
    return data
}
function mergeSort(source, target, start, end) {
    let temp = [];
    if (start < end) {
        let center = (start + end) / 2 | 0;
        // 把start - center 归并到target的start - center
        mergeSort(source, temp, start, center);
        // 把center+1 - end 归并到target的center+1 - end
        mergeSort(source, temp, center + 1, end);
        // 把target 的start - center - end 合并到data
        mergeTwo(temp, target, start, center, end);
    } else {
        target[start] = source[start]
    }
}
function mergeTwo(temp, target, start, center, end) {
    let i = start, j = center + 1;
    for (; i <= center && j <= end; start++){
        if (temp[i] < temp[j]) {
            target[start] = temp[i++];
        } else {
            target[start] = temp[j++];
        }
    }
    for (;i <= center;){
        target[start++] = temp[i++]
    }
    for (;j <= end;){
        target[start++] = temp[j++]
    }
}
console.log('merge', merge(data));