/* 
    思想：通过一趟排序将待排序记录分割成独立两部分，其中一部分的关键字均比另一部分的关键字小，
        则可对这两部分记录继续进行排序，以达到整体有序的目的
    时间复杂度：O(nlog(n))
*/

const data = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0, 11, 44, 55, 66, 88, 11];

function quickUp(arr) {
    const data = [...arr]
    // 对数组arr 进行0 - arr.length-1之间的值进行排序
    quickSort(data, 0, arr.length - 1);
    return data
}
function quickSort(arr, low, height) {
    if (low < height) {
        // 获取low - height 之间的一个参考值
        let p = partition(arr, low, height);

        quickSort(arr, low, p - 1);
        quickSort(arr, p + 1, height);
    }
}
function partition(arr, low, height) {
    let temp = arr[low];
    while (low < height) {
        while (low < height && temp <= arr[height]) {
            height--;
        }
        arr[low] = arr[height];
        while (low < height && temp >= arr[low]) {
            low++;
        }
        arr[height] = arr[low];
    }
    arr[low] = temp;
    return low
}
console.log('quickUp',quickUp(data));