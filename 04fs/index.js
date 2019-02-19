/**
 * Created by shinelon on 2019/1/27.
 */
var fs = require("fs");

//fs.stat("hello.js",(error,state) => {
//    if(error){
//        console.log(error);
//    }else{
//        console.log(state);
//        console.log(`文件${state.isFile()}`);
//        console.log(`目录${state.isDirectory()}`);
//    }
//});


//fs.writeFile('logs/hello.log','不好~\n',(error)=>{
//    if(error){
//        console.log(error);
//    }else{
//        console.log("成功写入文件");
//    }
//});


//fs.appendFile('logs/t1.txt','这里是写入的内容\n',(err)=>{
//    if(err){
//        console.log(err);
//    }else{
//        console.log('成功写入文件');
//    }
//});

//fs.mkdir('logs',(error)=>{
//    if(error){
//        console.log(error);
//    }else{
//        console.log("成功创建目录：logs");
//    }
//});


//fs.readFile('logs/hello.log','utf-8',(err,data)=>{
//    if(err){
//        console.log(err);
//    }else{
//        //console.log(data);
//        console.log(data.toString());
//    }
//
//});

//fs.readdir('logss',(err,files)=>{
//    if(err){
//        console.log(err);
//    }else{
//        console.log(files);
//    }
//});

//fs.rename('hello.js','nuxt.js',(err)=>{
//    if(err){
//        console.log(err);
//    }else{
//        console.log("重命名成功");
//    }
//});

fs.unlink('logss.txt',(err)=>{
    if(err){
        console.log(err);
    }
});