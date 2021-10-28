(function(){
  requirejs.config({
    paths:{
      a:'./a',
      b:'./b'
    }
  })

  require(['a'],function(a){
    console.log(a)
  })
})()