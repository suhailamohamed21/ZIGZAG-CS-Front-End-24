let myInfo = {
    username: "Osama",
    role: "Admin",
    country: "Egypt",
}; 

let infoMap = new Map(Object.entries(myInfo));

console.log(infoMap);
console.log(infoMap.size);
console.log(infoMap.has("role"));