
const observer = new MutationObserver((mutationsList, observer) => {
  for(let mutation of mutationsList) {
    if (mutation.type === 'childList') {
        console.log('A child node has been added or removed.');
    }
    else if (mutation.type === 'attributes') {
        console.log('The ' + mutation.attributeName + ' attribute was modified.');
    }
  }
})

// observe的第二个参数配置
// https://developer.mozilla.org/zh-CN/docs/Web/API/MutationObserverInit
// childList:设为 true 以监视目标节点（如果 subtree 为 true，则包含子孙节点）添加或删除新的子节点。默认值为 false。
// subtree:设为 true 以将监视范围扩展至目标节点整个节点树中的所有节点。MutationObserverInit 的其他值也会作用于此子树下的所有节点，而不仅仅只作用于目标节点。默认值为 false。
// attributes:设为 true 以观察受监视元素的属性值变更。默认值为 false。
// attributeOldValue:当监视节点的属性改动时，将此属性设为 true 将记录任何有改动的属性的上一个值。无默认值。
// attributeFilter:要监视的特定属性名称的数组。如果未包含此属性，则对所有属性的更改都会触发变动通知。无默认值。
// characterData:设为 true 以监视指定目标节点或子节点树中节点所包含的字符数据的变化。无默认值。
// characterDataOldValue:设为 true 以在文本在受监视节点上发生更改时记录节点文本的先前值。无默认值。

// 当调用 observe() 方法时，childList，attributes 或者 characterData 三个属性之中，至少有一个必须为 true，否则会抛出 TypeError 异常。
observer.observe(document.body,{
  childList:true,
  attributes:true,
  characterData:true
})

// 阻止 MutationObserver 实例继续接收的通知，
// 直到再次调用其observe()方法，该观察者对象包含的回调函数都不会再被调用。
observer.disconnect()

// 从MutationObserver的通知队列中删除所有待处理的通知，
// 并将它们返回到MutationRecord对象的新Array中。
const mutations =  observer.takeRecords()