import inquirer  from "inquirer";

let reply: {
    sentence : string;
} = await inquirer.prompt([
    {
        name:"sentence",
        type: "input",
        message: "enter your sentenct to count the word:"

    }

])
const words = reply.sentence.trim().split(" ")
console.log(`your sentence word count is ${words.length}`)