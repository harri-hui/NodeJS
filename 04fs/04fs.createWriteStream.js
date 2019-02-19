var fs = require("fs");

var data = "我是从数据库中获取到的一段文字";

var writeStream = fs.createWriteStream('input.txt');

writeStream.write(data,'utf-8');

writeStream.on('finish',()=>{
    console.log("写入完成");
});

writeStream.on('error',(err)=>{
    console.log(err.stack);
});

console.log("程序执行完毕");