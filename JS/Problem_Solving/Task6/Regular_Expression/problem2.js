let specialNames = "Os10O OsO Os100O Osa100O Os1000 Os100m";
let regex = /os\d*o/ig

console.log(specialNames.match(regex));
// Output
// ['Os10O', 'OsO', 'Os100O']