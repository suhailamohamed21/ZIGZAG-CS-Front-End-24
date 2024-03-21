function freqCount(string, char) {
    // Convert string into an array of characters then filter out occurrences of the specified character
    const occurrences = string.split('').filter(ch => ch === char);
    return occurrences.length; // Return the count of occurrences
}

console.log(freqCount("welcome", 'e')); // returns 2
console.log(freqCount(" ", 'z')); // returns 0
