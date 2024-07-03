let phone = "+(995)-123 (4567)";
let regex = /\+\(\d{3}\)-\d{3}\s\(\d{4}\)/g;

console.log(phone.match(regex));
console.log(regex.test(phone));