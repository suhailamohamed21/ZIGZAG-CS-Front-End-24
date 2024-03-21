function points(goals) {
    let totalPoints = 0;

    for (const points of goals) {
        const [x, y] = points.split(':').map(Number);
        
        if (x > y) {
            totalPoints += 3; 
        } else if (x === y) {
            totalPoints += 1; 
        }
    }

    return totalPoints;
}

console.log(points(["3:1", "2:2", "0:1", "2:0"])); //returns 7
