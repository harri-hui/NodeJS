//fs.stat('upload',(err,stat)=>{
//    if(err){
//        fs.mkdir('upload',(err1)=>{
//            if(err1){
//                console.log(err1);
//            }
//            console.log("创建文件成功");
//        });
//    }else{
//        console.log(stat);
//    }
//});

var arr = [];
console.log(process.cwd())
var fs = require('fs');
fs.readdir('html',(err,files)=>{
    if(err){
        console.log(err);
    }else{
        console.log(files);
        for(var i=0; i < files.length; i++){
            (function aa(i){
                if(i == files.length-1){
                    console.log(arr);
                    return false;
                }
                fs.stat("html/"+files[i],(err1,stats)=>{
                    if(stats.isDirectory()){
                        arr.push(files[i]);
                    }
                    aa(i+1);
                });
            })(0);
        }
    }
});
