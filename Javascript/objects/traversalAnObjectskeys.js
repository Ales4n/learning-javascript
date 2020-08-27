let person = {name: "ale", id: 2123, age: 43}

console.log(Object.keys(person) instanceof Array)

Object.keys(person).forEach(value => {
   console.log(value) 
})