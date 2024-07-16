// Write Function Code Here
function showTypes<T = string, S = string , E = string>(valOne: T | string = "Nothing", valTwo: S | string = "Nothing", valThree: E | string = "Nothing"): string{
    return `${valOne} - ${valTwo} - ${valThree}`;
}

// Do Not Edit Here
console.log(showTypes()); // Nothing - Nothing - Nothing
console.log(showTypes<string>("String")); // String - Nothing - Nothing
console.log(showTypes<string, number>("String", 100)); // String - 100 - Nothing
console.log(showTypes<string, number, boolean>("String", 100, true)); // String - 100 - true 