"use strict";
// Write Class Code Here
class Gamee {
    constructor(title, price) {
        this.title = title;
        this.price = price;
    }
    getDiscount(val) {
        console.log(`The Discount Is ${val}`);
    }
}
// Do Not Edit Here
let game1 = new Gamee("Ys", 100);
let game2 = new Gamee(2064, 100); // There's A Game Called "2064"
console.log(game1.title); // "Ys"
console.log(game1.price); // 100
game1.getDiscount("50"); // "The Discount Is 50"
console.log(game2.title); // 2064
console.log(game2.price); // 100
game2.getDiscount(80); // "The Discount Is 80"
