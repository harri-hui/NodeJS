/**
 * Created by shinelon on 2019/1/14.
 */


var http = require("http");
var url = require("url");

http.createServer(function(req,res){

    //req.url 获取浏览器url输入的信息


    //console.log(req.url);
    //
    //var query = url.parse(req.url,true);
    //console.log(query);
    res.writeHead(200,{'Content-Type':"text/html;charset='utf-8'"});

    res.write("<head><meta charset='utf-8'/></head>");
    console.log(req.url);
    if(req.url != '/favicon.ico'){
        //console.log(req.url);

        var result = url.parse(req.url,true);
        console.log(result.query.aid);
        console.log(result.query.cid);
    }
    res.write("傻逼node js!");
    res.end();


}).listen(88);



