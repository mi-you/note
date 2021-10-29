function say(){
  console.log('hello world')
}

say()

(function(){ //在这行前加';'可避免错误，有些人也会使用'!','~'等符号，不报错就行
  console.log('hello')
})()

// 当一行代码是以：
//  (
//  [
//  `
//  开头时，在前面补上一个分号避免语法解析错误
