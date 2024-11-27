//  fibonnaci
function fibonacci(n) {
    if (n === 0) {
        return 0;
    } else if (n === 1) {
        return 1;
    } else {
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
}

// Test the function
const n = parseInt(prompt("Enter a number to get the Fibonacci sequence value:"));
alert(`The ${n}th Fibonacci number is: ${fibonacci(n)}`);

//palindrome checker
function isPalindrome(s) {
    s = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase(); // Remove non-alphanumeric characters and convert to lowercase
    if (s.length <= 1) {
        return true;
    } else if (s[0] === s[s.length - 1]) {
        return isPalindrome(s.substring(1, s.length - 1));
    } else {
        return false;
    }
}

// Test the function
const inputStr = prompt("Enter a string to check if it's a palindrome:");
if (isPalindrome(inputStr)) {
    alert(`"${inputStr}" is a palindrome.`);
} else {
    alert(`"${inputStr}" is not a palindrome.`);
}

//power function
function power(base, exp) {
    if (exp === 0) {
        return 1;
    } else {
        return base * power(base, exp - 1);
    }
}

// Test the function
const base = parseInt(prompt("Enter the base number:"));
const exp = parseInt(prompt("Enter the exponent:"));
alert(`${base} raised to the power of ${exp} is: ${power(base, exp)}`);
