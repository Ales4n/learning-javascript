const express = require('express')
const colors = require('colors')
const server = express()

server.get('/',  function (req,res){
    res.send('<h1>HELLO</h1>')
    res.end()
})
server.get('/about', (req,res)=>{
    res.send('<h1>About me</h1>')
})
server.get('/contact', (req,res)=>{
    res.send('<h1>Form contact sdasas</h1>')
})
server.listen(3000, function(){
    console.log('Server on port 3000'.red)
})