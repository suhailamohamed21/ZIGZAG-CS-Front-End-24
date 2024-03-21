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