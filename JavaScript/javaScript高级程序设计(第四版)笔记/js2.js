// 内部的生命函数在通过is时生效：<ul is='collapse-ul'></ul>
//               直接使用不触发：<collapse-ul><collapse-ui>
class UlBuffer extends HTMLDivElement{
  static get observedAttributes(){
    return ['title']
  }
  constructor(){
    let a = super();
    console.log(this === a,this)
    this.attachShadow({mode:'open'});
    this.shadowRoot.appendChild(template.content.cloneNode(true))
  }
  connectedCallback(){
    console.log('元素加入到了DOM',this)
  }
  disconnectedCallback(){
    console.log('元素移除DOM')
  }
  adoptedCallback(){
    // dom脱离原来page被添加到新的page触发，如doc -> iframe
    // iframe.document.body.appendChild(document.adoptNode(cul))
    console.log('元素被移动到__新文档对象__时调用')
  }
  attributeChangedCallback(name,oldValue,newValue){
    console.log(`被指定要监听的属性改变了${name}-${oldValue}-${newValue}`)
  }
}

customElements.define('collapse-ul',UlBuffer,{extends:'div'})