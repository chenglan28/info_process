# info_process
这是一个信息处理库,您可以使用它,处理您的信息
## object
您可以使用ID(object)代替document.getElementById(object),
示例`ID("demo").innerHTML = "Hello World"`和
`document.getElementById("demo").innerHTML = "Hello World`作用一样,
都是把id="demo"的HTML元素的内容设置为"Hello World"

您可以使用CLASS(object)代替document.getElementsByClassName(object),
示例`ID("demo")[0].innerHTML = "Hello World"`和
`document.getElementsByClassName("demo")[0].innerHTML = "Hello World`作用一样,
都是把class="demo"的第1个HTML元素的内容设置为"Hello World"

您可以使用NAME(object)代替document.getElementsByName(object),
示例`ID("demo")[0].innerHTML = "Hello World"`和
`document.getElementsByName("demo")[0].innerHTML = "Hello World`作用一样,
都是把name="demo"的第1个HTML元素的内容设置为"Hello World"

您可以使用TAG(object)代替document.getElementsByTagName(object),
示例`TAG("p")[0].innerHTML = "Hello World"`和
`document.getElementsByTagName("p")[0].innerHTML = "Hello World`作用一样,
都是把第1个p元素的内容设置为"Hello World"