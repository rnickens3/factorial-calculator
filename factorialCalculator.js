/*
Completed December 12th, 2025
This function takes a number from the user and calculates the factorial of that number.
*/

const num = 5;

function factorialCalculator(num) {
  let result = 1;
  for (let i = 1; i <= num; i++) { //This will iterate through 1 through num and assign that number to the output
    result = result * i;
  }

  return result
}

const factorial = factorialCalculator(num);
let resultMsg = `Factorial of ${num} is ${factorial}`;

console.log(resultMsg); // this should output "Factorial of 5 is 120"
