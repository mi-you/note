# 使用`requestAnimationFrame`
## 使用`requestAnimationFrame`
  > 这个方法会告诉浏览器要执行动画了，于是浏览器可以通过最优方式确定重绘的时序  
  > - 早期定时动画`setTimeout`:这种定时动画的问题在于无法准确知晓循环之间的延时。定时间隔必须足够短，这样才能让不同的动画类型都能平滑顺畅，但又要足够长，以便产生浏览器可以渲染出来的变化
  > - 知道何时绘制下一帧是创造平滑动画的关键
  > - `requestAnimationFrame()`方法接收一个参数，此参数是一个要在**重绘屏幕前调用的函数**,这个参数函数实际上可以接收一个参数，此参数是一个 DOMHighResTimeStamp 的实例（比如 performance.now()返回的值），表示下次重绘的时间
  > - requestAnimationFrame()也返回一个请求 ID，可以用于通过另一个方法 `cancelAnimationFrame()`来取消重绘任务
  > - 支持这个方法的浏览器实际上会暴露出作为钩子的回调队列。所谓钩子（hook），就是浏览器在执行下一次重绘之前的一个点。这个回调队列是一个可修改的函数列表，包含应该在重绘之前调用的函数。每次调用requestAnimationFrame()都会在队列上推入一个回调函数，队列的长度没有限制
# 基本的画布功能

# 2D绘图上下文

# WebGL