// My Account Details
/*let accountDetails = {
  accountName: "Ayodeji Abolaji",
  pin: 1234,
  accountBalance: 10000,
};*/

// Alert Message
alert(`Welcome to FRED Bank,
    Kindly click 'OK' to continue.`);

// My account name and pin prompt
let accountDetails = {
  pin: 1234, // Change this to your actual PIN
  accountBalance: 10000, // Change this to your actual balance
};

while (true) {
  let accountPin = +prompt("Enter your PIN:");

  // To Verify the name and PIN entered
  if (accountPin !== accountDetails.pin) {
    alert("Invalid Name or PIN.");
  } else {
    // Prompt for operation
    let accountOperation = prompt(
      `Choose an operation:
        1. Savings
        2. Current`
    );

    // Convert accountOperation to a number
    let operationNumber = parseInt(accountOperation);

    // Account Operations
    switch (operationNumber) {
      case 1:
      case 2:
        let subOperation = prompt(`Select an Operation:
        1. Withdrawal
        2. Account Balance
        3. Transfer
        4. Quick Teller
        5. Quit`);

        // Convert subOperation to a number
        let subOperationNumber = parseInt(subOperation);

        // Sub-Operations
        switch (subOperationNumber) {
          case 1:
            // Withdrawal operation
            let withdrawalAmount = +prompt("Enter your withdrawal amount:");
            if (
              withdrawalAmount > 0 &&
              withdrawalAmount <= accountDetails.accountBalance
            ) {
              accountDetails.accountBalance -= withdrawalAmount;
              alert(
                `Withdrawal successful! Remaining balance: $${accountDetails.accountBalance}`
              );
            } else {
              alert("Invalid withdrawal amount or insufficient balance.");
            }
            break;
          case 2:
            // Account Balance operation
            alert(`Your current balance: $${accountDetails.accountBalance}`);
            break;
          case 3:
            // Bank Transfer
            let transferAmount = +prompt("Enter the transfer amount:");
            if (
              transferAmount > 0 &&
              transferAmount <= accountDetails.accountBalance
            ) {
              let recipientAccount = prompt(
                "Enter recipient's account number:"
              );

              // Recipient Details object
              let recipientDetails = {
                accountName: "Alfred",
                accountNumber: "123456789",
              };

              if (recipientAccount === recipientDetails.accountNumber) {
                // My transfer
                accountDetails.accountBalance -= transferAmount;
                alert(
                  `Transfer successful! Updated balance: $${accountDetails.accountBalance}`
                );
              } else {
                alert("Recipient account not found.");
              }
            } else {
              alert("Invalid transfer amount or insufficient balance.");
            }
            break;
          case 4:
            // Quick Teller operation
            let quickTellerOption = prompt(`Select a Quick Teller option:
          1. Buy Recharge Card
          2. Pay for Cable Bills`);

            // Convert quickTellerOption to a number
            let quickTellerOptionNumber = parseInt(quickTellerOption);

            switch (quickTellerOptionNumber) {
              case 1:
                // Recharge Mobile Credit
                let mobileNumber = prompt("Enter the mobile number:");
                let rechargeAmount = +prompt("Enter the recharge amount:");
                if (
                  rechargeAmount > 0 &&
                  rechargeAmount <= accountDetails.accountBalance
                ) {
                  // recharge card
                  accountDetails.accountBalance -= rechargeAmount;
                  alert(
                    `Recharge successful! Remaining balance: $${accountDetails.accountBalance}`
                  );
                } else {
                  alert("Invalid recharge amount or insufficient balance.");
                }
                break;
              case 2:
                // Pay for Cable Services
                let cableProvider = prompt("Enter the cable provider:");
                let subscriptionAmount = +prompt(
                  "Enter the subscription amount:"
                );
                if (
                  subscriptionAmount > 0 &&
                  subscriptionAmount <= accountDetails.accountBalance
                ) {
                  // subscription
                  accountDetails.accountBalance -= subscriptionAmount;
                  alert(
                    `Payment for ${cableProvider} successful! Remaining balance: $${accountDetails.accountBalance}`
                  );
                } else {
                  alert("Invalid subscription amount or insufficient balance.");
                }
                break;
              default:
                alert("Invalid Quick Teller option.");
            }
            break;
          case 5:
            // Quit
            alert("Thank you for using FRED ATM Service. Have a great day!");
            return; // Exit the loop and program
          default:
            alert("Invalid sub-operation.");
        }
        break;
      default:
        alert("You did not choose the right operation.");
    }
  }
}
