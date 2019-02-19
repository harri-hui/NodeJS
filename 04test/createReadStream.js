var fs = require('fs');

var writeStream = fs.createReadStream('input.txt');

var str = "";
var count = 0;
writeStream.on('data',(data)=>{
    str+=data;
    count++;
});

writeStream.on('err',(err)=>{
    console.log('程序错误');
    console.log(err);
});

writeStream.on('end',(end)=>{
    console.log("读取完成");
    console.log(str);
    console.log(count);
});