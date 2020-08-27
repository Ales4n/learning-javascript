let dog1 = {
    alive = true,
    color = "brown",
    age = 4
}
let dog2 = {
    alive = false,
    color = "black",
    age = 12
}


function Computer(brand, color, price, status){
    this.brand = brand
    this.color = color
    this.price = price
    this.new = status

}
let pc1 = new Computer("Asus", "black", 700 , true)
let pc2 = new Computer("HP", "Blue", 400, false)
let arr = [pc1, pc2]

let houses = [
    {
        price = "200.000$",
        location = "Madrid",
        status = "New"
    },
    {
        price = "500.001",
        location = "Barcelona",
        status = "New"
    }
]