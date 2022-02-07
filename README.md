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
您可以使用statistics(string || array || number inner)统计文字,
例如:`statistics("Hello World")`它将返回一个数组
`[{text: 'H', count: 1},
{inner: 'e', count: 1},
{inner: 'l', count: 3},
{inner: 'o', count: 2},
{inner: ' ', count: 1},
{inner: 'W', count: 1},
{inner: 'r', count: 1},
{inner: 'd', count: 1}]`
inner为信息,count为信息在字符串中出现的次数

## 隐藏/显示 元素
您可以用`query(object).hide()`隐藏该元素,
也可以用`query(object).display()`该元素
例如:`query("span")[0].hide()`
它的作用是隐藏第一个span元素
例如:`query("span")[0].display()`
它的作用是显示第一个span元素
