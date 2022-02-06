function statistics(inner){
    if(typeof inner == "number")inner.toString();
    else(typeof inner == "string"){
        var res = [];
        inner = inner.split("");
        for(var i = 0;i<inner.length;i++){
            var temp = true;//用于创建新的对象
            for(var j = 0;j<res.length;j++){
                if(res[j].text == inner[i]){
                    res[j].count++;
                    temp = false;
                }
            }
            if(temp == true){
                res.push({
                    "text":inner[i],
                    "count":1
                });
            }
        }
    }
    return res;
}
