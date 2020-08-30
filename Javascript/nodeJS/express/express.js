const express = require('express')
const colors = require('colors')
const morgan = require('morgan')
const server = express()

server.use(express.json())
server.use(morgan('dev'))

server.set('appName', 'Ale')
server.set('port', 3000)

// function logger(req, res, next){
//     console.log(`Route received: ${req.protocol}://${req.get('host')}${req.originalUrl}`)
//     next()
// }

// server.all('/user', (req, res, next) => {
//     console.log('passed through here')
//     next()
// })

server.get('/', (req, res) => {
    const data = [{name: "jose"}, {name: "julian"}, {name: "cheo"}]
    res.render('index.ejs', {people: data})
})

server.get('/user', (req, res) => {
    res.send('<h1>HELLO</h1>')
    res.end()
})
server.post('/user/:id', (req, res) => {
    console.log(req.body)
    console.log(req.params)
    res.send('<h1>POST REQUEST RECEIVED</h1>')
})
server.delete('/user/:id/', (req, res) => {
    res.send(`User ${req.params.id} deleted`)
})
server.put('/user/:id', (req, res) => {
    res.send(`User ${req.params.id} updated`)
    console.log(req.body)
})

server.use(express.static('public'))

server.listen(server.get('port'), function () {
    console.log('Server on port 3000'.red)
})