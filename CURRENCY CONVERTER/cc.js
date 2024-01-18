import inquirer from "inquirer";
let convertion = {
    "PKR": {
        "USD": 0.0078,
        "GBP": 0.0098,
        "PKR": 1,
    },
    "GBP": {
        "USD": 1.30,
        "PKR": 280.50,
        "GBP": 1.30
    },
    "USD": {
        "PKR": 230.89,
        "GBP": 0.99,
        "USD": 1.00,
    }
};
const answer = await inquirer.prompt([
    {
        type: "list",
        name: "from",
        choices: ["PKR", "USD", "GBP"],
        message: "select your currency:"
    },
    {
        type: "list",
        name: "to",
        choices: ["PKR", "USD", "GBP"],
        message: "select your convertion currency:"
    },
    {
        type: "number",
        name: "amount",
        message: "enter the amount:"
    }
]);
const { from, to, amount } = answer;
if (from && to && amount) {
    let result = convertion[from][to] * amount;
    console.log(`your convertion from ${from} to ${to} is ${result}`);
}
else {
    console.log("invalid input");
}
