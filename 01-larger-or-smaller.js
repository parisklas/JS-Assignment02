// Usage: Use simple conditional statements
// Create an application that accepts two integers within two separate prompts.
// Then, display only the larger of the two within the browser window.
// Don’t forget to handle the fact that the two could be equal.

alert('Get ready to enter two whole numbers.');
let numA = window.prompt('Enter your first number.');
let numB = window.prompt('Enter your second number.');

if (numA > numB) {
    alert(numA);
} else if (numB > numA) {
    alert(numB);
} else {
    alert('Your numbers are equal.');
};