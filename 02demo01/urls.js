/**
 * Created by shinelon on 2019/1/17.
 */
var http = require("http");
let url = require("url");

var app = http.createServer(function(req,res){

    console.log(url.parse(req.url,true));
    res.writeHead(200,{"content-type":"text/html;chart=utf-8"});

    res.write("<head><meta charset='utf-8'></head>");
    res.write("nodeJS真的是很傻逼");

    res.write("请你不要随便扣扣");

    res.end();
});

app.listen(3000,"127.0.0.1");

