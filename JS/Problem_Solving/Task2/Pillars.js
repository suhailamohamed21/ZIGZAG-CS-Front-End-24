function pillarDistance(Pillarsnum, distanceBetween, pillarsWidth) {
    const finalDistance = (Pillarsnum - 1) * distanceBetween
                        + ((Pillarsnum - 2) * pillarsWidth); // Calculate the total distance between pillars
    
    return finalDistance * 100; // Convert meters to centimeters
}

const num = 3; 
const distanceBetween = 10; 
const pillarsWidth = 20; 

const distance = pillarDistance(num, distanceBetween, pillarsWidth);
console.log(distance); 
