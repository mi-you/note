// 给你一个字符串 s，找到 s 中最长的回文子串。

// 输入：s = "babad"
// 输出："bab"
// 解释："aba" 同样是符合题意的答案。

// 输入：s = "cbbd"
// 输出："bb"

// 输入：s = "a"
// 输出："a"

// 输入：s = "ac"
// 输出："a"

const data = 'bvchavjhaqwertyuioppoiuytrewqnkjlkk';
function answer(str) {
    let strArr = str.split("");
    let statusArr = [];
    let maxLen = 0;
    let beginIndex = 0;
    for (let strLen = 1; strLen <= strArr.length; strLen++) {
        for (let start = 0; start <= strArr.length - strLen; start++) {
            let end = start + strLen - 1;
            if (start === end) {
                statusArr[start] = []
                statusArr[start][start] = true;
            } else if (start === end - 1) {
                statusArr[start][end] = strArr[start] === strArr[end];
            } else {
                statusArr[start][end] = strArr[start] === strArr[end] && statusArr[start + 1][end - 1]
            }
            if (statusArr[start][end] && strLen > maxLen) {
                maxLen = strLen;
                beginIndex = start
            }
        }
    }
    return str.slice(beginIndex,beginIndex + maxLen)
}
console.log(`${data} 的最长回文子序列: ${answer(data)}`)