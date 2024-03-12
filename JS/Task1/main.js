//Mathematical Expression
function solveExpression(expression) {
    // Split the expression into components
    const [A, S, B, Q, C] = expression.split(' ');

    const numA = parseInt(A);
    const numB = parseInt(B);
    const numC = parseInt(C);

    if (S === '+') {
        if (parseInt(A) + parseInt(B) === parseInt(C)) {
            return "Yes";
        } else {
            return parseInt(A) + parseInt(B);
        }
    } else if (S === '-') {
        if (parseInt(A) - parseInt(B) === parseInt(C)) {
            return "Yes";
        } else {
            return parseInt(A) - parseInt(B);
        }
    } else if (S === '*') {
        if (parseInt(A) * parseInt(B) === parseInt(C)) {
            return "Yes";
        } else {
            return parseInt(A) * parseInt(B);
        }
    }
    else if (S === '/') {
        if (parseInt(A) / parseInt(B) === parseInt(C)) {
            return "Yes";
        } else {
            return parseInt(A) / parseInt(B);
        }
    }
}

const expression = "5 * 3 = 9"; 
console.log(solveExpression(expression));


//Age in Days
function calculateAge(N) {
    const years = Math.floor(N / 365); // Calculate years
    const remainingDaysAfterYears = N % 365; // Calculate remaining days after years
    const months = Math.floor(remainingDaysAfterYears / 30); // Calculate months
    const days = remainingDaysAfterYears % 30; // Calculate remaining days after months

    let result = '';
    if (years > 0) {
        result += years + " years, ";
    }
    if (months > 0) {
        result += months + " months, ";
    }
    if (days > 0) {
        result += days + " days";
    }
    return result;
}

const age = calculateAge(900);
console.log("Age = " + age);


//First digit
function firstDigit(num) {
    const str = num.toString();
    const firstDigit = parseInt(str[0]);

    if (firstDigit % 2 === 0) {
        return "EVEN";
    } else {
        return "ODD";
    }
}

const digit = firstDigit(4569);
console.log("First digit = " + digit);


//Min-Max
function findMinMax(A, B, C) {
    
    var min = 0;
    var max = 0;

    if(A > B && A > C)
        max = A;
    else if (B > A && B > C) {
        max = B;
    } else {
        max = C;
    }

    if(A < B && A < C)
        min = A;
    else if (B < A && B < C) {
        min = B;
    } else {
        min = C;
    }
    
    return "Min = " + min + " , " + "Max = "  + max;
}

const result = findMinMax(1, 2, 3);
console.log(result);


//Summation from 1 to N
function summationOfNumbers(N) {
    if(N > 1)
        return (N + summationOfNumbers(N - 1));
    else
        return 1;
}

console.log("Sum = " + summationOfNumbers(3));


//Even Numbers
function evenNumbers(N){
    if(N < 2){
        console.log(-1);
        return;
    }
    else{
        for(let i = 2; i <= N; i++){
            if(i % 2 == 0)
                console.log(i);
        }
    }
}

console.log("Even numbers in 5 :");
evenNumbers(5);


// Lucky Numbers
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