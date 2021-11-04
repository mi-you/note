
function multiRequest(urls, maxRequestNum) {
    return new Promise((resolve, reject) => {
        let result = Array.from({ length: urls.length }); // 请求结果
        let count = 0; // 计数
        // 发送请求， 要实现每个请求完成后触发剩余请求的发送
        const nextRequest = function () {
            const index = count++; // 请求的位置
            const url = urls[index]; 
            fetch(url).then(res => res).then(res => {
                result[index] = res
            }).catch(err => {
                result[index] = err
            }).finally(() => {
                if (count < urls.length) {
                    nextRequest();
                } else if (!result.includes(undefined)) {
                    resolve(result);
                }
            })
        }
        // 先以最大数量发送请求
        while (count < urls.length && maxRequestNum--) {
            nextRequest()
        }
    })
}
multiRequest().then(res => { })