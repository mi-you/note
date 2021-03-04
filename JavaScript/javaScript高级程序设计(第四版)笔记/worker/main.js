// const worker = new Worker('./globalScopeWorker.js');

// worker.addEventListener('message',({data}) => console.log(data))

// setTimeout(() => {
//   worker.postMessage('p1')
//   worker.terminate()
//   worker.postMessage('p2')
//   setTimeout(() => worker.postMessage('p3'),0)
// },3000)

// 行内工作者线程

// const workerScript = `self.onmessage = ({data}) => console.log(data)`,
//   workerScriptBlob = new Blob([workerScript]),
//   workerScriptBlobUrl = URL.createObjectURL(workerScriptBlob),
//   worker = new Worker(workerScriptBlobUrl)
  
// worker.postMessage('blob worker script')

// function fibonacci(n){
//   return n < 1?0:n<=2?1:fibonacci(n-1)+fibonacci(n-2)
// }
// const workerScript2 = `self.postMessage((${fibonacci.toString()})(9))`,
//   worker2 = new Worker(URL.createObjectURL(new Blob([workerScript2])));
//   worker2.onmessage = ({data}) => console.log(data);

const worker3 = new Worker('./globalScopeWorker.js')