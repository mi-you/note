- JSON 是 JavaScript 的严格子集
- JSON 不属于 JavaScript，它们只是拥有相同的语法而已
# 语法
> JSON 语法支持表示 3 种类型的值
> - **简单值**：字符串、数值、布尔值和 null 可以在 JSON 中出现，就像在 JavaScript 中一样。特殊值 `undefined` 不可以
> - **对象**：第一种复杂数据类型，对象表示有序键/值对。每个值可以是简单值，也可以是复杂类型。
> - **数组**：第二种复杂数据类型，数组表示可以通过数值索引访问的值的有序列表。数组的值可以是任意类型，包括简单值、对象，甚至其他数组。  
> JSON 没有变量、函数或对象实例的概念。JSON 的所有记号都只为表示结构化数据，虽然它借用了JavaScript 的语法，但是千万不要把它跟 JavaScript 语言混淆。

# 解析和序列化
> JSON对象有两个方法：
> - `stringify()`:JS -> JSON
> - `parse()`:JSON -> JS

> `stringify()`:该方法参数除了要序列化的对象，还可以接收两个参数
> - 过滤器，可以是数组或函数
>   - 数组：返回的结果只会包含该数组中列出的对象属性
>   - 函数：提供的函数接收两个参数：属性名（key）和属性值（value）。这个 key 始终是字符串，只是在值不属于某个键/值对时会是空字符串
>   ```javascript
>   // 最后一定要提供默认返回值，以便返回其他属性传入的值。第一次调用这个函数实上会传入空字符串 key，值是 book 对象
>   let jsonText = JSON.stringify(book, (key, value) => { 
>      switch(key) { 
>        case "authors": 
>          return value.join(",") 
>        case "year": 
>          return 5000; 
>        case "edition": 
>          return undefined; 
>        default: 
>          return value; 
>      } 
>    });
>   ```
> - 用于缩进结果 JSON 字符串的选项:
>   - **数值**:表示每一级缩进的空格数
>   - **字符串**:使用这个字符串来缩进(如果字符串长度超过 10，则会在第 10 个字符处截断)

> `toJSON`:对象需要在 `JSON.stringify()`之上自定义 JSON 序列化
> ```javascript
>   console.log(JSON.stringify({
>    name:'mi',
>    value:{
>      age:1,
>      sex:'x'
>    },
>    toJSON:function(){
>      return 'ttt'
>  }},null,'########')) //"ttt"
> ```

> `JSON.parse()`方法也可以接收一个额外的参数，这个函数(还原函数)会针对每个键/值对都调用一次。还原函数经常被用于把日期字符串转换为 Date 对象，还原函数返回 undefined，则结果中就会删除相应的键，返回了其他任何值，则该值就会成为相应键的值插入到结果中。