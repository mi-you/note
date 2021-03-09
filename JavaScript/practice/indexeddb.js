// 建库建表
let request,db,version = 1;
request = indexedDB.open('myDB',version);
request.onerror = event => {

}
request.onsuccess = event => {
  db = event.target.result // request === event.target
  db.onversionchange = () => {
    console.log('某页在升级版本')
    db.close()
  }
}
request.onupgradeneeded = event => {
  const db = event.target.result
  if(!db.objectStoreNames.contains('user')){
    const os = db.createObjectStore('user',{keyPath:'id'}) //{autoIncrement:true}
    os.createIndex('name','name',{unique:true})
  }
  if(!db.objectStoreNames.contains('fruit')){
    db.createObjectStore('fruit',{keyPath:'name'})
  }
}

setTimeout(() => {if(db){
  const transaction = db.transaction(['user','fruit'],'readwrite'), //transaction('user','readwrite')
    userT = transaction.objectStore('user'),
    fruitT = transaction.objectStore('fruit');
  // userT 操作
  const request = userT.add({id:'111',name:'mi',age:11});
  request.onerror = event => {};
  request.onsuccess = event => {
    console.log('user:add success')
    userT.get('111').onsuccess = event => {
      console.log('get:',event.target.result)
    }
    userT.openCursor().onsuccess = event => {
      const cursor = event.target.result;
      console.log('cursor.key:',cursor.key)
      console.log('cursor.value:',cursor.value)
    }
    userT.index('name').get('mi').onsuccess = event => {
      console.log('name:',event.target.result)
    }
  }

  let data = [{id:'111',name:'mi',age:11},{id:'222',name:'you',age:22}],
    requests = [];
  for (const v of data) {
    const request = fruitT.add(v);
    request.onerror = event => {};
    request.onsuccess = event => {
      console.log('fruit:add success')
    }
    requests.push(request)
  }
  console.log(requests)
  


}},4000)
