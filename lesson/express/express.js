var bodyParser = require('body-parser')
var cookieParser = require('cookie-parser')
var multer = require('multer')


var express = require('express')
var app = express()

app.get('/', function(req, res) {
    console.log(req)
    res.send('Hello World')
})

var server = app.listen(8081, function(){
    var host = server.address().address
    var port = server.address().port
    // console.log("使用实例方位地址 http://%s:%s", host, port)
})