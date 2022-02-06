  function query(object){
    var ele = document.querySelectorAll(n);
    //取出所有匹配元素
    if (ele.length === 1){
      //只有1个元素
      //不使用NodeList节点返回
      var ret = ele[0];
      ret.forEach = function(callback){
        //自定义callback函数
        callback(ret);
      };
      ret.length = 1;
    } else ret = ele;
    return ret;
        
  };
