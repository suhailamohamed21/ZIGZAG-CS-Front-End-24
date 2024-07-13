"use strict";
function printInConsole(...numORStringOrBoolean) {
    let result = "";
    for (let i = 0; i < numORStringOrBoolean.length; i++)
        result += `The Value Is ${numORStringOrBoolean[i]} And Type Is ${typeof (numORStringOrBoolean[i])}` + '\n';
    return result;
}
console.log(printInConsole(1, 2, 3, 4, 5));
console.log(printInConsole("A", "B", "C"));
console.log(printInConsole(true, false, false, true, true));
//# sourceMappingURL=problem8.js.map