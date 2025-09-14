function add(a, b) {
    return a + b;
}
function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

// Function for division
function divide(a, b) {
    if (b === 0) {
        return "Error: Cannot divide by zero";
    }
    return a / b;
}

// Example usage
let num1 = 34;
let num2 = 21;

console.log("Addition:", add(num1, num2));         
console.log("Subtraction:", subtract(num1, num2)); 
console.log("Multiplication:", multiply(num1, num2)); 
console.log("Division:", divide(num1, num2));      


