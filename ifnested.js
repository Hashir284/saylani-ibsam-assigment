let number = Number(prompt("Enter a number:"));

if (number > 0) {
    // Nested if to check even or odd
    if (number % 2 === 0) {
        alert("Number is positive and even");
    } else {
        alert("Number is positive and odd");
    }
} else if (number < 0) {
    alert("Number is negative");
} else {
    alert("Number is zero");
}