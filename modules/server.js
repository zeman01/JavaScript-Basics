// const { add } = require("./math");
// add(12, 34);
// subtract.subtract(34, 12);
// const mutiply = require("./math").default;
// mutiply(2,5);

// *here multiply is default export so we can name it anything we want
// *but add and subtract are named exports so we have to use the same name

import mutiply, { add, subtract } from "./math.js";
add(12, 34);
subtract(34, 12);
mutiply(2,5);

// print values from return of functions
console.log("Addition: ", add(5, 10));
console.log("Subtraction: ", subtract(10, 5));
console.log("Multiplication: ", mutiply(5, 10));
