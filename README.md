# info_process
这是一个信息处理库,您可以使用它,处理您的信息
## object
您可以使用`query(string object)`的方法来选中指定的元素
当元素仅有`1`个时，返回元素的`DOM`节点；当元素有多个时，返回元素的`NodeList`列表，列表中的每一项都是元素的`DOM`节点  
例如 `query("#p")` 会选中`id`为`p`的节点  
     `query(".p")` 会选中`class`为`p`的节点  
     `query("a")`  会选中所有的超链接（元素类型：`a`)  
你可以使用`.forEach`方法来遍历所有的元素，例如以下代码  
```javascript
query("a").forEach(function(ele){
    ele.href = "https://www.google.com";
});
```
会将页面中所有的超链接(`a`)的指向链接`href`指向`https://www.google.com`  
下列代码将会修改第一个`span`类型的`html`为`Hello Pig`  
```javasript
query("span")[0].innerHTML = "Hello Pig";
```

## 文字统计
您可以使用statistics(string inner)统计文字,
例如:`statistics("Hello World")`它将返回一个数组
`[{text: 'H', count: 1},
{text: 'e', count: 1},
{text: 'l', count: 3},
{text: 'o', count: 2},
{text: ' ', count: 1},
{text: 'W', count: 1},
{text: 'r', count: 1},
{text: 'd', count: 1}]`
text为文本信息,count为文本信息在字符串中出现的次数
