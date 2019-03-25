const express = require('express')
const app = express()

// app.use(function (req, res, next) {
//     console.log('1')
//     next()
// })

// app.use(function (req, res, next) {
//     console.log('2')
//     res.status(200).end()
// })

app.use(function (req, res, next) {
    console.log(1)
    next(new Error('hahah'))
})

app.use(function (req, res, next) {
    console.log(2)
    res.status(200).end()
})

app.use(function (err, req, res, next) {
    console.log(err.stack)
    res.status(500).send('Something broke')
})

app.listen(3000)