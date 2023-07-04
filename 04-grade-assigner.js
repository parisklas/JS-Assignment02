// Usage: Use else if statements

// Collect the a number between 1 and 100 from the user.

let grade = Number(prompt("Enter your grade between 0 and 100"));

if (grade >= 90) {
    document.write("You received an A");
} else if (grade >= 80) {
    document.write("You received a B");
} else if (grade >= 70) {
    document.write("You received a C");
} else if (grade >= 60) {
    document.write("You received a D");
} else {
    document.write("You received an F");
}