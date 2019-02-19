/**
 * Created by shinelon on 2019/1/3.
 */
var http = require('http');

http.createServer(function(req,res){
    res.writeHead(200,{"Content-Type":"text/html"});
    res.write("<head><meta charset='utf-8'/></head>");
    res.write("nodejs真是傻逼");
    res.end();
}).listen(3000);

console.log('Server running at http://127.0.0.1:3000');