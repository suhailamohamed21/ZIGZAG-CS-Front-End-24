"use strict";
// Write Function Code Here
function showTypes(valOne = "Nothing", valTwo = "Nothing", valThree = "Nothing") {
    return `${valOne} - ${valTwo} - ${valThree}`;
}
// Do Not Edit Here
console.log(showTypes()); // Nothing - Nothing - Nothing
console.log(showTypes("String")); // String - Nothing - Nothing
console.log(showTypes("String", 100)); // String - 100 - Nothing
console.log(showTypes("String", 100, true)); // String - 100 - true 
