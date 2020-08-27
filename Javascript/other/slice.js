let string = 'hello Undos hello undos'
let regex = -(string.length - string.indexOf(' u'))
let ff = string.slice(string.indexOf(' Undos'), regex)

    console.log(ff)




