function isLucky(num) {
    const numberString = num.toString();
    for (let i = 0; i < numberString.length; i++) {
        if (numberString[i] !== '4' && numberString[i] !== '7') {
            return false;
        }
    }
    return true;
}

function printLuckyNumbers(x, y) {
    let luckyNumbers = [];
    for (let i = x; i <= y; i++) {
        if (isLucky(i)) {
            luckyNumbers.push(i);
        }
    }
    if (luckyNumbers.length === 0) {
        console.log(-1);
    } else {
        console.log(luckyNumbers.join(' '));
    }
}

console.log("Lucky numbers: ");  
printLuckyNumbers(2, 50);