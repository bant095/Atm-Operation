//My Account Details
let accountDetails = {
  accountName: "Ayodeji Abolaji",
  pin: 1234,
  accountBalance: 10000,
};

// Alert Message
alert(`Welcome to FRED ATM Service,
Kindly click 'ok' to continue.`);

//My account name and pin prompt
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

  //Account Operations
  if (accountOperation === "1" || accountOperation === "2") {
    let accountOperation = prompt(`Select an Operation:
    1. Withdrawal
    2. Balance Inquiry
    3. Transfer
    4. Quick Teller
    5. Exist`);
  } else {
    alert("You the not choose the right operation");
  }

  // The Withdrawal operation
  if (accountOperation === "1") {
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
    if (withdrawalAmount === accountDetails.accountBalance) {
      let accountBalance = prompt(`Do you wish to perform another transaction:
        1. Yes
        2. No`);
        if (accountBalance === "1") {
            let accountBalance = +prompt(`Select an Operation: $${accountOperation}`):
          } else (accountBalance === "2") {
            alert('Thank you for using our ATM Service');
        }
    }

    
  }
}
