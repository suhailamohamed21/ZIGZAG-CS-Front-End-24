function StonePickaxesNum(arr) {
    let sticksCount = 0;
    let cobblestoneCount = 0;

    for (const material of arr) {
        if (material === 'Sticks') {
            sticksCount++;
        } else if (material === 'Cobblestone') {
            cobblestoneCount++;
        } else if (material === 'Wood') {
            sticksCount += 4;
        }
    }
    const maxPickaxes = Math.min(Math.floor(sticksCount / 2), Math.floor(cobblestoneCount / 3));
    return maxPickaxes;
}

console.log(StonePickaxesNum(["Sticks", "Sticks", "Cobblestone", "Cobblestone", "Cobblestone"])); // Output: 1
console.log(StonePickaxesNum(["Sticks", "Wood", "Cobblestone"])); // Output: 0
console.log(StonePickaxesNum(["Cobblestone", "Cobblestone", "Cobblestone", "Cobblestone", "Cobblestone", "Cobblestone", "Wood"])); // Output: 2
