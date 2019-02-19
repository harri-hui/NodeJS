/**
 * Created by shinelon on 2019/1/17.
 */
var sd = require('silly-datetime');

var http = require("http");

var app = http.createServer(function(req,res){
    res.writeHead(200,{"content-type":"text/html;charset='utf-8'"});
    var d = sd.format(new Date(),"YYYY-MM-DD HH:mm");

    res.write("时间"+d);
    res.end();
});

app.listen(3000);