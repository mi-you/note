class Counter{
  constructor(limit){
    this.limit = limit;
  }
  [Symbol.iterator](){
    let i = 1,
      limit = this.limit;
    return {
      next(){
        if(i <= limit){
          return {done:false,value:i++}
        }else{
          return {done:true,value:undefined}
        }
      },
      return(){
        console.log("Exiting early")
        return {done:true}
      }
    }
  }
}

const a = {
  list:['a','b','c','f'],
  name:'aa',
  [Symbol.iterator](){
    let i = 0;
    const _that = this;
    return {
      next(){
        if(i < _that.list.length){
          return{ done:false,value:_that.list[i++]}
        }else{
          return{done:true,value:undefined}
        }
      },
      return(){
        console.log('exit early')
        return {done:true}
      }
    }
  }
}
for (const v of a) {
  console.log(v)
  break;
}