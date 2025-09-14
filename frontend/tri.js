// Function to calculate the area of a triangle
function calculateTriangleArea(base, height) {
  const area = 0.5 * base * height;
  return area;
}

// Example usage:
const base = 10;
const height = 5;

const area = calculateTriangleArea(base, height);
console.log("The area of the triangle is:", area);


function fact(n) {
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
}
 
