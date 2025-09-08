// ! Promise
// * is a object {} which represents eventual completion or failure of any async task / operation

// const { reject } = require("async");

// const { reject } = require("async");

// ! State of promise
// ? pending
// ? Fulfilled -- if succeed
// ? Rejected   -- error message (failure)

// ! Syntax
// console.log("STart");

// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     // task completion
//     resolve("task completed");

//     // Task Failure
//     // reject("Something went WRONG");
//   }, 1000);
// });

// console.log(promise);
// // handling promise

// promise
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// console.log("end");

const getUser = (userId) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const user = {
        id: userId,
        name: " Jaman",
      };
      resolve(user);
      //   reject({ message: "User Fetching error" });
    }, 1000);
  });
};

const getOrder = (userId) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const orders = [
        { id: 1, userId: user.id, totalAmt: 100, productId: 10 },
        { id: 1, userId: user.id, totalAmt: 100, productId: 10 },
      ];
      resolve(orders);
      //   reject({ message: "User Fetching error" });
    });
  });
};

const getOrderDetail = (order) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const orders = [{ id: orders.id, totalAmt: 100, productId: 10 }];
      resolve(orders);
      //   reject({ message: "User Fetching error" });
    });
  });
};

// ! Promise Chaining
// getUser(100)
//   .then((user) => {
//     console.log(user);
//     return getOrder(user);
//   })
//   .then((orders) => {
//     console.log(orders);
//     return getOrderDetail(orders[0]);
//   })
//   .then((detail) => {
//     console.log("final result", detail);
//   })
//   .catch((error) => {
//     console.log("Catch error");
//     console.log(error);
//   })
//   .finally(() => {
//     console.log("finally completed");
//   });

//   ! async await /  try - catch

const getOrdersDetail = async () => {
  try {
    const user = await getUser(100);
    const orders = await getOrder(user);
    const detail = await getOrderDetail(orders[0]);
    console.log(user, orders, detail);
  } catch (error) {
    console.log("try catch");
    console.log(error);
  } finally {
    console.log("finally");
  }
};
