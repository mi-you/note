/*
  事件委托
  parentDOM: 绑定委托事件的节点
  eventType: 事件类型
  selector: 选择器
  callback: 事件触发的回调
  
  如果元素被指定的选择器字符串选择，Element.matches()  方法返回true; 否则返回false。
*/
function delegate(parentDOM, eventType, selector, callback) {
    const pCallback = function (e) { 
        let el = e.target;
        while (el && el.matches(selector)) {
            if (el === parentDOM) {
                el = null;
                break;
            }
            el = el.parentNode;
        }
        el && callback(el)
    }
    parentDOM.addEventListener(eventType, pCallback, false)
    // 之所以返回这个函数是想之后可能通过这个函数移除父节点的监听事件
    return pCallback
}

export enum NodeIdentity {
    TreeNode = 'TreeNode',
    ToolbarItem = 'ToolbarItem'
}

/**
 *
 * @param pNode NodeElement 的类型
 * @param eventType 监听的事件类型
 * @param dataType 指定一个 NodeIdentity
 * @param callback 监听事件的回调函数
 * @returns
 */
export function domEventDelegation(
    pNode: HTMLElement,
    eventType: string,
    dataType: NodeIdentity,
    callback: (el: any) => void
) {
    const fn = jsxEventDelegation(dataType, callback)
    pNode.addEventListener(eventType, fn, false)
    return () => {
        pNode.removeEventListener(eventType, fn)
    }
}

/**
 *
 * @param dataType 指定一个 NodeIdentity
 * @param callback 监听事件的回调函数
 * @returns
 */
export function jsxEventDelegation(dataType: NodeIdentity, callback: (el: any) => void) {
    return (e: any) => {
        let el: any = e.target
        while (el && el !== e.currentTarget) {
            if (el.dataset.type === dataType) {
                return callback(el)
            }
            el = el.parentNode
        }
    }
}
