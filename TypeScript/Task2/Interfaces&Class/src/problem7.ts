interface Play {
    id: number;
    title: string;
    level: number | string;
    logIn(): void;
    logOut(msg: string): void;
}

  // Create Your Class Here
class Playerr implements Play{
    constructor(public id: number, public title: string, public level: number | string){}
    logIn(): void {
        console.log(`Logged In`);
    }
    logOut(msg: string): void {
        console.log(`Logged Out, ${msg}`);
    }
}

let Playerr1 = new Playerr(100, "Elzero", 95);

console.log(Playerr1.id); // 100
console.log(Playerr1.title); // "Elzero"
console.log(Playerr1.level); // 95
Playerr1.logIn(); // Logged In
Playerr1.logOut("Good Bye"); // Logged Out, Good Bye