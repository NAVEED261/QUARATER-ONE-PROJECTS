import inquirer from "inquirer";
const userInput = await inquirer.prompt([
    {
        type: "input",
        name: "userID",
        message: "Enter user ID"
    },
    {
        type: "number",
        name: "userPin",
        message: "Enter your pin"
    },
    {
        type: "list",
        name: "accountType",
        choices: ["current", "saving"],
        message: "select your account Type"
    },
    {
        type: "list",
        name: "transactionType",
        choices: ["Fast Cash", "Cash Withdrow", "Balance Inquiry"],
        message: "Select your transaction"
    },
    {
        type: "number",
        name: "amount",
        message: "enter amount",
        when(userInput) {
            return userInput.transactionType == "cash Withdrow";
        }
    },
    {
        type: "list",
        name: "amount",
        choices: [1000, 5000, 10000, 20000],
        message: "select amount you want to withdraw",
        when(userInput) {
            return userInput.transactionType === "Fast Cash";
        }
    }
]);
const userID = userInput.userID;
const userPin = userInput.userPin;
const enteramount = userInput.amount;
if (userID && userPin && userInput.transactionType === "balance inquiry") {
    const userbalance = Math.floor(Math.random() * 100000);
    console.log(`your current balance is Rs ${userbalance}\n`);
}
else if (userID & userPin) {
    const userbalance2 = Math.floor(Math.random() * 100000);
    if (userbalance2 > enteramount) {
        console.log(`your account has been debited with Rs 
        ${enteramount} and your remaining balance is ${userbalance2 - enteramount}`);
    }
    else {
        console.log(`\n Unsufficient Balance`);
    }
}
