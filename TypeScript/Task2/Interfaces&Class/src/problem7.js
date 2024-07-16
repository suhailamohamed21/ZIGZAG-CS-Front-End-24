"use strict";
// Create Your Class Here
class Playerr {
    constructor(id, title, level) {
        this.id = id;
        this.title = title;
        this.level = level;
    }
    logIn() {
        console.log(`Logged In`);
    }
    logOut(msg) {
        console.log(`Logged Out, ${msg}`);
    }
}
let Playerr1 = new Playerr(100, "Elzero", 95);
console.log(Playerr1.id); // 100
console.log(Playerr1.title); // "Elzero"
console.log(Playerr1.level); // 95
Playerr1.logIn(); // Logged In
Playerr1.logOut("Good Bye"); // Logged Out, Good Bye
