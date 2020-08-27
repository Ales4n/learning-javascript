let num = [15,30,87]
let sum = 0
let div1
let div2 

for(let i = 0; i < num.length; i++){
    sum += num[i];

    div1 = Math.floor(sum / 60)
    div2 = sum % 60
}

console.log(div1 + ":" + div2)