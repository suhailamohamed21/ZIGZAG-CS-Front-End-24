"use strict";
const Easy = 100;
const Medium = Easy - 20;
const Hard = Medium - (Easy / 2);
const Insane = insane(10);
function insane(num) {
    return Hard - num;
}
var Game;
(function (Game) {
    Game[Game["Easy"] = 100] = "Easy";
    Game[Game["Medium"] = 80] = "Medium";
    Game[Game["Hard"] = 30] = "Hard";
    Game[Game["Insane"] = insane(10)] = "Insane";
})(Game || (Game = {}));
console.log(Game.Easy);
console.log(Game.Medium);
console.log(Game.Hard);
console.log(Game.Insane);
//# sourceMappingURL=problem7.js.map