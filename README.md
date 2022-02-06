# info_process
这是一个信息处理库,您可以使用它,处理您的信息
## object
您可以使用`q(x)`的方法来选中指定的元素
当元素仅有`1`个时，返回元素的`DOM`节点；当元素有多个时，返回元素的`NodeList`列表，列表中的每一项都是元素的`DOM`节点  
例如 `q("#p")` 会选中`id`为`p`的节点  
     `q(".p")` 会选中`class`为`p`的节点  
     `q("a")`  会选中所有的超链接（元素类型：`a`)  
你可以使用`.forEach`方法来遍历所有的元素，例如以下代码  
```javascript
q("a").forEach(function(ele){
    ele.href = "https://www.google.com";
});
```
会将页面中所有的超链接(`a`)的指向链接`href`指向`https://www.google.com`  
下列代码将会修改第一个`span`类型的`html`为`Hello Pig`  
```javasript
q("span")[0].innerHTML = "Hello Pig";
```
