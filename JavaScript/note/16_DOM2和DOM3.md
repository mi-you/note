
# 范围
```html
  <!DOCTYPE html> 
  <html> 
    <body> 
      <p id="p1"><b>Hello</b> world!</p> 
    </body> 
  </html>
```
- `createRange()`:使用`document`上的这个方法可以创建一个DOM范围对象
  - `startContainer`，范围起点所在的节点（选区中第一个子节点的父节点）。
  - `startOffset`，范围起点在 `startContainer` 中的偏移量。如果 `startContainer` 是文本节点、注释节点或 CData 区块节点，则 `startOffset` 指范围起点之前跳过的字符数；否则，表示范围中第一个节点的索引。
  - `endContainer`，范围终点所在的节点（选区中最后一个子节点的父节点）。
  - `endOffset`，范围起点在 `startContainer` 中的偏移量（与 `startOffset` 中偏移量的含义相同）。 
  - `commonAncestorContainer`，文档中以`startContainer`和`endContainer`为后代的最深的节点。这些属性会在范围被放到文档中特定位置时获得相应的值。
- `selectNode()`、`selectNodeContents()`
```javascript
  let range1 = document.createRange(), 
  range2 = document.createRange(), 
  p1 = document.getElementById("p1"); 
  range1.selectNode(p1); 
  range2.selectNodeContents(p1);
```
> 在像上面这样选定节点或节点后代之后，还可以在范围上调用相应的方法，实现对范围中选区的更精细控制。
> - `setStartBefore(refNode)`，把范围的起点设置到 refNode 之前，从而让 refNode 成为选区的第一个子节点。startContainer 属性被设置为 refNode.parentNode，而startOffset
属性被设置为 refNode 在其父节点 childNodes 集合中的索引。
> - `setStartAfter(refNode)`，把范围的起点设置到 refNode 之后，从而将 refNode 排除在选区之外，让其下一个同胞节点成为选区的第一个子节点。startContainer 属性被设置为
refNode.parentNode，startOffset 属性被设置为 refNode 在其父节点 childNodes 集合
中的索引加 1。
> - `setEndBefore(refNode)`，把范围的终点设置到 refNode 之前，从而将 refNode 排除在选区之外、让其上一个同胞节点成为选区的最后一个子节点。endContainer 属性被设置为 refNode.parentNode，endOffset 属性被设置为 refNode 在其父节点 childNodes 集合中的索引。
> - `setEndAfter(refNode)`，把范围的终点设置到 refNode 之后，从而让 refNode 成为选区的最后一个子节点。endContainer 属性被设置为 refNode.parentNode，endOffset 属性被设置为 refNode 在其父节点 childNodes 集合中的索引加 1。
- `deleteContents()`：这个方法会从文档中删除范围包含的节点
- `extractContents()`：也会从文档中移除范围选区，返回范围对应的文档片段。
- `cloneContents()`：返回的文档片段包含范围中节点的副本，而非实际的节点
> 范围能够确定缺失的开始和结束标签，从而可以重构出有效的 DOM 结构，以便后续操作。此时关键是要知道，为保持结构完好而拆分节点的操作，只有在调用前述方法时才会发生。在 DOM
被修改之前，原始 HTML 会一直保持不变。
- `collapse()`：折叠范围可以使用 collapse()方法，这个方法接收一个参数：布尔值，表示折叠到范围哪一端。true 表示折叠到起点，false 表示折叠到终点。要确定范围是否已经被折叠，可以检测范围的 collapsed
属性
- `compareBoundaryPoints()`：方法确定范围之间是否存在公共的边界（起点或终点）。这个方法接收两个参数：一个常量值和要比较的范围，表示比较的方式。这个常量参数包括
  - Range.START_TO_START（0），比较两个范围的起点；
  - Range.START_TO_END（1），比较第一个范围的起点和第二个范围的终点；
  - Range.END_TO_END（2），比较两个范围的终点；
  - Range.END_TO_START（3），比较第一个范围的终点和第二个范围的起点。
> `compareBoundaryPoints()`方法在第一个范围的边界点位于第二个范围的边界点之前时返回-1，在两个范围的边界点相等时返回 0，在第一个范围的边界点位于第二个范围的边界点之后时返回 1。
- `cloneRange()`：方法可以复制范围。这个方法会创建调用它的范围的副本。新范围包含与原始范围一样的属性，修改其边界点不会影响原始范围
- `detach()`：在使用完范围之后，最好调用 detach()方法把范围从创建它的文档中剥离。调用 detach()之后，就可以放心解除对范围的引用，以便垃圾回收程序释放它所占用的内存
```javascript
  // 这两步是最合理的结束使用范围的方式。剥离之后的范围就不能再使用了
  range.detach(); // 从文档中剥离范围
  range = null; // 解除引用
```