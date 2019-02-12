var express = require('express')
var app = express()

app.get('/', function(req, res) {
    console.log('主页get请求')
    res.send('hello get')
})

app.post('/', function(req, res) {
    console.log('主页post 请求')
    res.send('hello post')
})

app.get('/del_user', function(req, res) {
    console.log('/del_user 响应 delete 请求')
    res.send('删除页面')
})

app.get('/list_user', function(req, res) {
    console.log('list_user get请求')
    res.send('用户列表界面')
})

app.get('/ab*cd', function(req, res){
    console.log("/ab*cd get请求")
    res.send('正则匹配')
})

var server = app.listen(3000, function(){
    console.log('server is running at port 3000')
})