let adam = {
    damage: 50,
    critic: 15
}
let lean = {
    health: 200,
    armor: 35,
    evasion: 10
}
let count = 0
let countD = 0
let arr = []
function randomNumber(min, max) {
    return Math.random() * (max - min) + min;
}
while (lean.health > 0) {
    if (randomNumber(0, 100) > lean.evasion) {
        let damage = adam.damage
        if (randomNumber(0, 100) <= adam.critic) {
            damage *= randomNumber(1.5, 3.0)
        }
        lean.health -= damage - lean.armor
        arr.push(Math.floor(damage - lean.armor))
    }
    else {
        arr.push(0)
        countD++
    }
    count++
}
let percent = (countD / count) * 100
console.log(`Its took ${count} hits to kill Lean, and Dodged ${Math.floor(percent)}% ${arr}`) 