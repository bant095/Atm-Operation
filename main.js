// My Account Details
let accountDetails = {
  accountName: "Ayodeji Abolaji",
  pin: 1234,
  accountBalance: 10000,
};

// Alert Message
alert(`Welcome to FRED ATM Service,
  Kindly click 'OK' to continue.`);

// My account name and pin prompt
let accountName = prompt("Enter your name:");
let accountPin = +prompt("Enter your PIN:");

// To Verify the name and PIN entered
if (
  accountName !== accountDetails.accountName ||
  accountPin !== accountDetails.pin
) {
  alert("Invalid Name or PIN.");
} else {
  // Prompt for operation
  let accountOperation = prompt(
    `Choose an operation:
      1. Savings
      2. Current`
  );

  // Account Operations
  if (accountOperation === "1" || accountOperation === "2") {
    let subOperation = prompt(`Select an Operation:
      1. Withdrawal
      2. Account Balance
      3. Transfer
      4. Quick Teller
      5. Quit`);

    // Sub-Operations
    if (subOperation === "1") {
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
    } else if (subOperation === "2") {
      // Account Balance operation
      alert(`Your current balance: $${accountDetails.accountBalance}`);
    } else {
      alert("Invalid sub-operation.");
    }
  } else if (subOperation === "3") {
    // Bank Transfer
    let accountTransfer;
  } else if (subOperation === "3") {
    // Bank Transfer
    let accountTransfer;
  } else {
    alert("You did not choose the right operation.");
  }
}
