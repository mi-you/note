// 特定元素请求进入全屏
export function enterFullScreen(DOMElement){
  let DOM = getElementByParam(DOMElement)
  if(!DOM){ return }
  if(DOM.length !== undefined){ DOM = DOM[0] }
  
  // 进入全屏成功和失败的事件
  fullScreenChange(DOM)
  fullScreenError(DOM)

  // 发起全屏请求
  makeFullScreen(DOM)
    .then(res => {
      console.log("Enter Full screen",res)
    })
    .catch(err => {
      console.log('err',err)
    })
}
/*
* 监听元素进入全屏和离开全屏
*/
function fullScreenChange(DOM = {}){
  if (DOM.requestFullscreen) {
    DOM.addEventListener("fullscreenchange",function (){
      if (document.fullscreenElement) {
        console.log("进入全屏");
      } else {
        console.log("退出全屏");
      }
    },false);
  }else if (DOM.msRequestFullscreen) {
    DOM.addEventListener("MSFullscreenChange",function (){
      if (document.msFullscreenElement) {
        console.log("ms进入全屏");
      } else {
        console.log("ms退出全屏");
      }
    },false);
  }
  // no info on other browsers
}

/*
* 当浏览器无法切换​​到全屏模式时，将触发该事件
*/
function fullScreenError(DOM = {}){
  if (DOM.requestFullscreen) {
    DOM.addEventListener("fullscreenerror",function (e){
        console.log("全屏失败",e);
    },false);
  }else if (DOM.msRequestFullscreen) {
    DOM.addEventListener("MSFullscreenError",function (e){
      console.log("ms全屏失败",e);
    },false);
  }else if (DOM.mozRequestFullScreen) {
    DOM.addEventListener("mozfullscreenerror",function (e){
      console.log("moz全屏失败",e);
    },false);
  }
  // no info on other browsers
}

/*
* 发起全屏请求
*/ 
function makeFullScreen(DOM = {}) {
 if(DOM.requestFullscreen){
  return DOM.requestFullscreen();
 }else if(DOM.msRequestFullscreen){
  return DOM.msRequestFullscreen();
 }else if(DOM.mozRequestFullScreen){
  return DOM.mozRequestFullScreen();
 }else if(DOM.webkitRequestFullscreen){
  return DOM.webkitRequestFullscreen();
 }else{
  return Promise.reject()
 } 
}

/*
* 退出全屏
*/
function exitFullScreen() {
  if (document.exitFullscreen){
    document.exitFullscreen();
  }else if(document.msExitFullscreen){
    document.msExitFullscreen();
  }else if(document.mozCancelFullScreen){
    document.mozCancelFullScreen();
  }else if(document.webkitCancelFullScreen){
    document.webkitCancelFullScreen();
  }else{
    console.log("exitFullscreen API is not supported");
  }
}

/*
* 获取全屏元素
*/
function getFullScreenElement() {
  if(document.fullscreenElement){
    return document.fullscreenElement;
  }else if(document.msFullscreenElement){
    return document.msFullscreenElement;
  }else if(document.mozFullScreenElement){
    return document.mozFullScreenElement;
  }else if(document.webkitFullscreenElement){
    return document.webkitFullscreenElement;
  }else{
    return null
  }
}
/*
* 该fullscreenEnabled属性返回文档是否能够全屏模式。
* 主要用途是检查iframe的contentDocument是否设置了allowfullscreen属性。
* 当iframe的contentDocument具有allowfullscreen属性时，fullscreenEnabled返回true，否则返回false。
* fullscreenEnabled不应该被用来检测一般全屏功能。
*/
function isFullScreenEnabled(){
  if(document.fullscreenEnabled){
    return document.fullscreenEnabled;
  }
  else if(document.msFullscreenEnabled){ 
    return document.msFullscreenEnabled;
  } 
  else if (document.mozFullScreenEnabled){
    return document.mozFullScreenEnabled;
  }
}



/* 
* 根据传入值返回获取DOMElement
* element:选择器或DOMElement
* 返回DOM元素
*/
export function getElementByParam(element){
  // 判断element是否是选择器(字符串)
  if(typeof element === "string"){
    return document.querySelectorAll(element)
  }
  let isDOM;
  // 判断element是否是DOM
  isDOM = ( typeof HTMLElement === 'object' ) 
    ? element instanceof HTMLElement 
    :element && typeof element === 'object' && 
    (element.nodeType === 1 && typeof element.nodeName === 'string' || element[0] && element[0].nodeType === 1 && typeof element[0].nodeName === 'string');
  if(isDOM){
    return element
  }
  // element 既不是DOMELement也不是选择器
  return null
}












/*
@references：
https://docs.microsoft.com/en-us/previous-versions/windows/internet-explorer/ie-developer/dev-guides/dn265028(v=vs.85)?redirectedfrom=MSDN
 

*/ 