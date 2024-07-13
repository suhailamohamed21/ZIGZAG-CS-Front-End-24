// Create Enums + Function Here
const Easy = 100;
const Medium = Easy - 20;
const Hard = Medium - (Easy / 2);
const Insane = insane(10);

function insane(num : number){
    return Hard - num;
}

enum Game {
    Easy = 100,
    Medium = Easy - 20,
    Hard = Medium - (Easy / 2),
    Insane = insane(10)
}

// Output
console.log(Game.Easy); // 100
console.log(Game.Medium); // 80
console.log(Game.Hard); // 30
console.log(Game.Insane); // 20