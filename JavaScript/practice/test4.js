 let socket = new WebSocket("ws://www.example.com/server.php");

 socket.onopen = function(){
   console.log('建立成功')
 }
 socket.onerror = function(){
   console.log("建立失败")
 }
 socket.onclose = function(event){
   console.log("连接关闭",event.wasClean,event.code,event.reason)
 }
 socket.onmessage = function(){
   console.log("服务端发来了消息")
 }
console.log(socket.readyState)

setTimeout(() => {
  socket.close()
  console.log(socket.readyState)
},20000)