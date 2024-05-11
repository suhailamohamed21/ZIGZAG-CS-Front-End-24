//input variables
let btn = document.getElementById("submit-btn");
let day = document.getElementById("day");
let dayErrorMessage = document.getElementById("error-day");
let month = document.getElementById("month");
let monthErrorMessage = document.getElementById("error-month");
let year = document.getElementById("year");
let yearErrorMessage = document.getElementById("error-year");
let labels = document.getElementsByTagName("label");

function validDay(){
    if (day.value === "") {
        dayErrorMessage.textContent = "This field is required";
        day.style.borderColor = "hsl(0, 100%, 67%)";
        labels[0].style.color = "hsl(0, 100%, 67%)";
        return false;

    }
    else {
        //day must be between 1 and 31
        if (day.value > 31 || day.value < 1) {
            dayErrorMessage.textContent = "Must be a valid day";
            day.style.borderColor = "hsl(0, 100%, 67%)";
            labels[0].style.color = "hsl(0, 100%, 67%)";
            return false;

        }
        else{
            dayErrorMessage.textContent = "";
            day.style.borderColor = "hsl(0, 0%, 86%)";
            labels[0].style.color = "hsl(0, 1%, 44%)" ;
        }

    }
    if (isNaN(day.value)) {
        dayErrorMessage.textContent = "Must be a valid day";
        day.style.borderColor = "hsl(0, 100%, 67%)";
        labels[0].style.color = "hsl(0, 100%, 67%)";
        return false;

    }else{
        dayErrorMessage.textContent = "";
        day.style.borderColor = "hsl(0, 0%, 86%)";
        labels[0].style.color = "hsl(0, 1%, 44%)" ;
    }
}

function validMonth(){
    if (month.value === "") {
        monthErrorMessage.textContent = "This field is required";
        month.style.borderColor = "hsl(0, 100%, 67%)";
        labels[1].style.color = "hsl(0, 100%, 67%)";
        return false;
    }
    else {
        //month must be between 1 and 12
        if (month.value > 12 || month.value < 1) {
            monthErrorMessage.textContent = "Must be a valid month";
            month.style.borderColor = "hsl(0, 100%, 67%)";
            labels[1].style.color = "hsl(0, 100%, 67%)";
            return false;
        }else {
            dayErrorMessage.textContent = "";
            day.style.borderColor = "hsl(0, 0%, 86%)";
            labels[1].style.color = "hsl(0, 1%, 44%)" ;
        }
    }
    if (isNaN(month.value)) {
        monthErrorMessage.textContent = "Must be a valid month";
        month.style.borderColor = "hsl(0, 100%, 67%)";
        labels[1].style.color = "hsl(0, 100%, 67%)";
        return false;
    }else{
        monthErrorMessage.textContent = "";
        month.style.borderColor = "hsl(0, 0%, 86%)";
        labels[1].style.color = "hsl(0, 1%, 44%)" ;
    }

    if (month.value === "2") {
        if (day.value > 29) {
            dayErrorMessage.textContent = "Must be a valid date ";
            day.style.borderColor = "hsl(0, 100%, 67%)";
            labels[0].style.color = "hsl(0, 100%, 67%)";
            return false;
        }else{
            monthErrorMessage.textContent = "";
            month.style.borderColor = "hsl(0, 0%, 86%)";
            labels[1].style.color = "hsl(0, 1%, 44%)" ;
        }
    }
    if (month.value === "4" || month.value === "6" || month.value === "9" || month.value === "11") {
        if (day.value > 30) {
            dayErrorMessage.textContent = "Must be a valid date ";
            day.style.borderColor = "hsl(0, 100%, 67%)";
            labels[0].style.color = "hsl(0, 100%, 67%)";
            return false;
        }else{
            monthErrorMessage.textContent = "";
            month.style.borderColor = "hsl(0, 0%, 86%)";
            labels[1].style.color = "hsl(0, 1%, 44%)" ;
        }
    }
}

function validYear(){
    if (year.value === "") {
        yearErrorMessage.textContent = "This field is required";
        year.style.borderColor = "hsl(0, 100%, 67%)";
        labels[2].style.color = "hsl(0, 100%, 67%)";
        return false;
    }
    else {
        //year must be in the past
        let date = new Date();
        if (year.value > date.getFullYear()) {
            yearErrorMessage.textContent = "Must be in the past";
            year.style.borderColor = "hsl(0, 100%, 67%)";
            labels[2].style.color = "hsl(0, 100%, 67%)";
            return false;
        }else{
            yearErrorMessage.textContent = "";
            year.style.borderColor = "hsl(0, 0%, 86%)";
            labels[2].style.color = "hsl(0, 1%, 44%)" ;
        }
    }
    
    if (isNaN(year.value)) {
        yearErrorMessage.textContent = "Must be a valid year";
        year.style.borderColor = "hsl(0, 100%, 67%)";
        labels[2].style.color = "hsl(0, 100%, 67%)";
        return false;
    }else{
        yearErrorMessage.textContent = "";
        year.style.borderColor = "hsl(0, 0%, 86%)";
        labels[2].style.color = "hsl(0, 1%, 44%)" ;
    }
}


function calcAge() {   
    validDay();
    // to concatenate 0 if the day is less than 10
    if(day.value > 1 && day.value < 10)
        day.value = day.value.padStart(2, '0');
    validMonth();
    // to concatenate 0 if the month is less than 10
    if(month.value > 1 && month.value < 10)
        month.value = month.value.padStart(2, '0');
    validYear();

    // calc age
    let date = new Date();
    let yearsSpan = document.getElementById("year-output");
    let monthsSpan = document.getElementById("month-output");
    let daysSpan = document.getElementById("day-output");

    let years = date.getFullYear() - year.value;
    let months = date.getMonth() - month.value;
    let days = date.getDate() - day.value;

    if (months < 0) {
        years = years - 1;
        months = months + 12;
    }

    if (days < 0) {
        days += getNoOfDays(year.value, month.value - 1);
    }


    function getNoOfDays(y, m) {
        return new Date(y, m, 0).getDate();
    }

    // display result
    yearsSpan.textContent = years;
    monthsSpan.textContent = months;
    daysSpan.textContent = days;
}