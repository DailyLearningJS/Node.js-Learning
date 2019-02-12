const WebSocket = require('ws')
const Koa = require('koa')
const app = new Koa()
app.use( ctx => {
    ctx.response.body = 'hello world'
})

app.listen(3001)


const wss = new WebSocket.Server({
    port: 3000
})

wss.on('connection', function(ws) {
    console.log('[SERVER] is connection')
    ws.on('message', function(message){
        console.log(`[SERVER] Receive ${message}`)
        ws.send(`[SERVER] Echo: ${message}`, (err) => {
            if (err) {
                console.log(`[SERVER] error is : ${err}`)
            }
        })
    })
} )

let ws = new WebSocket('ws://localhost:3000/test');

// 打开WebSocket连接后立刻发送一条消息:
ws.on('open', function () {
    console.log(`[CLIENT] open()`);
    ws.send('Hello!');
});

// 响应收到的消息:
ws.on('message', function (message) {
    console.log(`[CLIENT] Received: ${message}`)
})