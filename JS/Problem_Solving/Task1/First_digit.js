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