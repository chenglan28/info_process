function statistics(inner){
    var res = [];
    inner = inner.split("");
    for(var i = 0;i<inner.length;i++){
        var temp = true;
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
    return res;
}