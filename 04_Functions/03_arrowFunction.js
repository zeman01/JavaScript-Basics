const user = {
  username: "Jaman",
  price: 999,

  welcomeMessage: function () {
    console.log(`${this.username} , welcome to website`);
    console.log(this);
  },
};

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);

// function random(){
//     let username = "Jaman"
//     console.log(this.username);
// }

// random()

// const random = function () {
//     let username = "Jaman"
//     console.log(this.username);
// }

const random = () => {
  let username = "Jaman";
  console.log(this);
};

// random()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) =>  num1 + num2

// const addTwo = (num1, num2) => ( num1 + num2 )

const addTwo = (num1, num2) => ({ username: "Jaman" });

console.log(addTwo(3, 4));

// const myArray = [2, 5, 3, 7, 8]          

// myArray.forEach()
