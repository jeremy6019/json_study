//node.js를 이용하여 파일로 존재하는 json데이터를 사용해본다 
//파일시스템을 제어할 수 있는 내장모듈 
var fs = require("fs");

fs.readFile("data.js","utf8", function(err,data){
    //data변수에 읽혀진 데이터가 담아져 있다 
    var obj = JSON.parse(data);
    console.log(obj.members[1].name);
})

