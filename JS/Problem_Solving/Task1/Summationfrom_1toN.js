function summationOfNumbers(N) {
    if(N > 1)
        return (N + summationOfNumbers(N - 1));
    else
        return 1;
}

console.log("Sum = " + summationOfNumbers(3));