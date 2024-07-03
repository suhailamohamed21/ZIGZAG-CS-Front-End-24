let n1 = [10, 30, 10, 20];
let n2 = [30, 20, 10];
// Needed Output   210

console.log(Math.max(...n1) * [...n1, ...n2].length); 