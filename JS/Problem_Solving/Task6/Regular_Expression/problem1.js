let ip = "2001:db8:3333:4444:5555:6666:7777:8888";
// let regex = /\d{4}:\w{3}:\d{4}:\d{4}:\d{4}:\d{4}:\d{4}:\d{4}/g
let regex = /(\d+|\D+)+/g;

console.log((ip.match(regex)));
console.log(regex.test(ip));