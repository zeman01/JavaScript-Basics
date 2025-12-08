// Immediately Invoked Function Expressions (IIFE)

(function connectDB() {
  // named IIFE
  console.log(`DB CONNECTED`);
})();

((name) => {
  console.log(`DB CONNECTED TWO ${name}`);
})("jaman");
