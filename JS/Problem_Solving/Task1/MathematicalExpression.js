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