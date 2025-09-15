// // ! variables
// // ? var        let         const

// //*  Variable declaration

// //  var variable-name

// // * Variable assignment

// // variable-name = " value"

// // * both step can be done in a single line

// let amount = 10;

// //* Difference

// // var -> function scoped, can be re-declared and updated
// // let -> block scoped, can be updated but not re-declared
// // const -> block scoped, cannot be updated or re-declared

// // ! Data Types

// let x = 2;
// let y = 6;
// let z = x == 2;
// console.log(typeof x);

let num = [1, 2, 3];
let ave = num.reduce((res, curr) => {
  let i = 1;
  res += curr;
  i++;
  return res / i;
});
console.log(ave);
