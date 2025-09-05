// account (acc_name, initial amount)
// deposit(amt), withdraw amount
// balance , acc_name

let Account = {
  accountHolderName: "Mern Stack",
  Amount: 10000,
  // ? function for Deposit
  Deposit: function (depositAmount) {
    if (depositAmount <= 0) {
      console.log("INSUFFICENT AMOUNT FOR DEPOSIT !!!");
    } else {
      Account.Amount += depositAmount;
      console.log(
        "Dear,",
        Account.accountHolderName,
        "\n",
        "Your New Balance is ",
        "Rs.",
        Account.Amount
      );
    }
  },

  // ? function for withdrawal

  Withdraw: function (withdrawalAmount) {
    if (withdrawalAmount > Account.Amount) {
      console.log("INSUFFICENT BALANCE !!!");
    } else {
      Account.Amount -= withdrawalAmount;
      console.log(
        "Dear,",
        Account.accountHolderName,
        "\n",
        "Your New Balance is ",
        "Rs.",
        Account.Amount
      );
    }
  },
};

Account.Deposit(0); //INSUFFICENT AMOUNT FOR DEPOSIT !!!
Account.Deposit(1000); // shows new balance message

Account.Withdraw(12000); //INSUFFICENT BALANCE !!!
Account.Withdraw(1000);
// Console.log(Withdraw(11110));
// Console.log(Withdraw(1000));
