//? In JavaScript, a function is a block of reusable code that is designed to perform a specific task. Functions help organize your code, prevent repetition, and make your program more modular and efficient. You can define a function once and call it multiple times with different inputs, known as arguments, to produce different results.

//!Function components

//* The function keyword

//* The function name, which is used to call the function.

// *Parameters, which are variables listed in parentheses that act as placeholders for the input values (arguments) a function receives.

//* The function body, containing the code to be executed, enclosed in curly braces {}.

//* The return keyword, which specifies a value to be returned from the function. If no return statement is used, the function returns undefined by default.

//! Function declaration

// function functionName(parameter1, parameter2) {
// code to be executed
// return value;
// }

function greet(name) {
  return `Hello,  ${name}!`;
}

// Call the function
console.log(greet("Alice")); // Output: Hello, Alice!

// Function Expression

// const variableName = function(parameter1, parameter2) {
//    code to be executed
//  return value;
// }

let add = function (a, b) {
  return a + b;
};

console.log(add(20, 30)); // Output is 50

// Arrow Function

// const variableName = (parameter1, parameter2) => {
// code to be executed
//return value;
// }

// For a single-expression body, the braces and `return` can be omitted.
// const conciseFunction = (a, b) => a + b

let multiply = (e, f) => e * f;
console.log(multiply(10, 10))
  //Output : 100

  // Immediately Invoked Function Expression

  // runs as soon as it is defined
  // It is wrapped in parentheses to treat
  // it as an expression and then immediately called

  // (function() {
  // code to be executed immediately
  // })()

function () {
    console.log("This function runs immediately!");
  }
// Outputs: This function runs immediately!
