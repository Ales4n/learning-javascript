const fs = require('fs')


fs.readFile('./Text.txt', function(err, data){
    if (err){
        console.log(err)
    }
    if (data){
        console.log(data.toString())
    }
})
