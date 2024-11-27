//leap year checker

function isLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        return true;
    } else {
        return false;
    }
}

// Test the function
const year = parseInt(prompt("Enter a year:"));
if (isLeapYear(year)) {
    alert(`${year} is a leap year.`);
} else {
    alert(`${year} is not a leap year.`);
}

//ticket pricing

function ticketPrice(age) {
    if (age <= 12) {
        return 10;
    } else if (age >= 13 && age <= 17) {
        return 15;
    } else {
        return 20;
    }
}

// Test the function
const age = parseInt(prompt("Enter your age:"));
const price = ticketPrice(age);
alert(`The price of your ticket is: $${price}`);

//weather clothing adviser
function clothingAdvice(temp, raining) {
    if (temp < 50) {
        return "Wear a warm jacket.";
    } else if (temp >= 50 && temp < 70) {
        if (raining) {
            return "Wear a light jacket and take an umbrella.";
        } else {
            return "Wear a light jacket.";
        }
    } else {
        if (raining) {
            return "Wear a t-shirt and take an umbrella.";
        } else {
            return "Wear a t-shirt.";
        }
    }
}

// Test the function
const temp = parseInt(prompt("Enter the current temperature:"));
const raining = prompt("Is it raining? (yes/no):").toLowerCase() === "yes";
alert(clothingAdvice(temp, raining));

