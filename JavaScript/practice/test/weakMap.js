const MyTest = (() => {
  const wm = new WeakMap();
  return class {
    constructor(id){
      this.privateId = Symbol('id');
      this.setId(id);
    }
    getId(){
      return this.getPrivate(this.privateId)
    }
    setId(id){
      this.setPrivate(this.privateId,id)
    }
    setPrivate(key,value){
      const privateMembers =  wm.get(this) || {};
      privateMembers[key] = value;
      wm.set(this,privateMembers);
    }
    getPrivate(key){
      return wm.get(this)[key]
    }
  }
})()

const instanceA = new MyTest('aaa');
console.log(instanceA.getId())
instanceA.setId('bbb')
console.log(instanceA.getId())