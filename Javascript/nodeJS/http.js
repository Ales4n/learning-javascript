const http = require('http')
const colors = require('colors')

const handleServer = function (req, res) {
    res.writeHead(200, {'Content-type': 'text/plain'})
    res.write('Hello World')
    res.end()
}
const server = http.createServer(handleServer)

server.listen(3000, function(){         
    console.log('Server on port 3000'.green)
})