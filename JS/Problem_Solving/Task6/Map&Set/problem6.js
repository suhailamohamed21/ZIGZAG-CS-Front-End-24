let chars1 = ["A", "B", "C", "D", "E", 10, 15, 6];
// Needed Output  ['A', 'B', 'C', 'A', 'B', 'C', 'D', 'E']
console.log(chars1.copyWithin(3, 0));

let chars2 = ["A", "B", "C", 20, "D", "E", 10, 15, 6];
// Needed Output  ['A', 'B', 'C', 'D', 'A', 'B', 'C', 'D', 'E']
chars2.sort();
console.log(chars2);
console.log(chars2.copyWithin(0, 4, 8)); 

let chars3 = ["Z", "Y", "A", "D", "E", 10, 1];
// Needed Output  ["Z", "Y", "Z", "Y", "A", "D", "E"]
console.log(chars3.copyWithin(2)); 