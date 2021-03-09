fetch('a',{
  method:'GET',
  body:JSON.stringify({name:'mi'}),
  headers:new Headers({
    'Content-Type':'application/json'
  })
})

fetch('b',{
  method:'POST',
  body:'a=1&b=2&c=3',
  headers:new Headers({
    'Content-type':'application/x-www-form-urlencoded; charset=UTF-8'
  })
})