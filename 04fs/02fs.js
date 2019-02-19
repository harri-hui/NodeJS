/**
 * Created by shinelon on 2019/1/27.
 */
//判断服务器上面有没有upload目录，没有创建这个目录
// var fs = require("fs");
// fs.stat("upload",function(err){
//     if(err){
//         console.log(err);
//         fs.mkdir("upload",(err)=>{
//             if(err){
//                 console.log(err);
//             }
//             console.log("创建成功");
//         })
//     }else{
//         console.log("存在这个目录");
//     }
// })

//找出html目录下面的所有的目录，然后打印出来
var fs = require("fs");
var path = require('path');
console.log(process.cwd())
fs.readdir('html',(err,files)=>{
    if(err){
        console.log("不存在html目录");
        console.log(err);
        return false;
    }else{
        for(let i=0; i<files.length; i++){
            fs.stat('html/'+files[i],(err,state)=>{
                if(err){
                    console.log("不存在对应的文件");
                    console.log(err);
                }else{
                    if(state.isDirectory()){
                        console.log(files[i]);
                    }
                }
            })
        }
    }
});

