var fs = require('fs');

var data = "我是从数据库中读取到的一段数据，我现在需要保存起来"

var writeStream = fs.createWriteStream('output.txt');

for(var i=0; i<100; i++){
    writeStream.write(data+"\n","utf-8");
};

writeStream.end();

writeStream.on('finish',()=>{
    console.log('写入完成');
});

writeStream.on('error',()=>{
    console.log('写入失败')
});