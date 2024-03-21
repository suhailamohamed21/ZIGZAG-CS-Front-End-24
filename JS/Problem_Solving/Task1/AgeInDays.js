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