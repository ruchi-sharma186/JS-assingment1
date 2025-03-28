console.log("Q1.add of two numbers");

let a = 2;
let b = 5;
result = a + b;
console.log(result);

console.log("Q2. Find if the conditions are obeyed or not?");

let A =5; // A<10
 let B = 10; // B>10
 // A > B
 // Check if both conditions 
if (A < 10 && B <= 10 && A < B) {
    console.log(true);
  } else {
    console.log(false);
  }

  console.log("Q3.Check the conditions");
  // Sample input
let X = 12;  
let Y = 20;  

// Check conditions
if (X % 10 === 0 && Y % 10 === 0) {
  console.log(true); // Both A and B are divisible by 10
} else if (X % 10 !== 0 && Y % 10 !== 0) {
  console.log(false); // Neither A nor B is divisible by 10
} else {
  console.log(true); // Only one of A or B is divisible by 10
}

console.log("Q4.Find the first digit of a 4 digit number ");
let N= 4567; 
let ans = N / 1000;
console.log(Math.floor(ans));
 
console.log("Q5.Find the last digit of a 4 digit number ");
// Sample input
let n = 4567;  // Example four-digit number

// Extract the last digit using modulus operator
let lastDigit = n % 10;

// Print the last digit
console.log(lastDigit);

console.log("Q6.Find the remainder ");
// Sample input
let x = 2;  // Divisor
let y = 9;  // Dividend

// Calculate the remainder
let remainder = y % x;
console.log(remainder);

console.log("Q7.Multiply two Numbers");
 num1 = 2;
 num2 = 5;
  result = num1 * num2;
  console.log(result);

  console.log("Q8. Marks Calculator ");
  // Sample input
let A1 = 50;  // Marks in the first subject
let B1 = 20;  // Marks in the second subject
let C1 = 100; // Marks in the third subject

// Calculate total marks
let totalMarks = A1 + B1 + C1;

// Calculate average marks and round to two decimal places
let averageMarks = (totalMarks / 3).toFixed(2);

console.log(totalMarks + " " + averageMarks);



