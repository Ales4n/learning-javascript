let n = ["2","4","56"]


n.forEach(function(value,index,n){
    console.log(`${value} is in the index ${index}`)
})

console.log()

function arrayTraversal(value){
    console.log(`${value}`)
    
}

n.forEach(arrayTraversal)

console.log()

let arrTraversal = (value,index) =>{
    console.log(`${value} is in the index ${index}`)
}
n.forEach(arraysTraversal)