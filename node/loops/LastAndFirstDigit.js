let n = 3829
let firstDigit = n
let lasDigit

lasDigit = n % 10;

while (firstDigit >=10){
firstDigit = firstDigit / 10
}
console.log(Math.floor(firstDigit)+lasDigit)

