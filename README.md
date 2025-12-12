# Factorial Calculator
Calculates factorial of a provided number.

## Assignment
* Languages: JavaScript
* Create a factorial calculator that takes a number from the user and calculates the factorial of that number.
###User Stories
1. You should declare a variable num and assign it a number of your choice. The assigned number should be between 1 and 20 inclusive.
2. Create a function named factorialCalculator that takes a number as an argument and returns the factorial of that number.
3. Inside the function, declare a result variable and assign it the value of 1. Using a loop, loop through all numbers from 1 to the input number(inclusive) and for each number, multiply the result variable by the current number and assign the result to the result variable. You can choose to use either a for loop, while loop or do...while loop here.
4. You should call the factorialCalculator function with num as the argument and assign the result to the variable factorial.
5. You should store the final output in the format Factorial of [num] is [factorial] and assign it to the variable resultMsg.
6. You should output the value of resultMsg to the console.

## Features
*User can input a number and the console should log the factorial of that number.

## Concepts Learned
*Reviewed how to use a for loop and iterating numbers.

## Examples
```
JavaScript

const num = 5;

function factorialCalculator(num) {
  let result = 1;
  for (let i = 1; i <= num; i++) {
    result = result * i;
  }

  return result
}

const factorial = factorialCalculator(num);
let resultMsg = `Factorial of ${num} is ${factorial}`;

console.log(resultMsg); // This will return "Factorial of 5 is 120"

```

## How to Run
1. Clone the repository
2. Run the script using Node.js or import the function into any JS file
