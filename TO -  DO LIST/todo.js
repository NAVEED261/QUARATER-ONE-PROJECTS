import inquirer from "inquirer";
let todostring = [];
let loop = true;
while (loop) {
    const todoInput = await inquirer.prompt([
        {
            type: "Input",
            name: "todoItem",
            message: "enter item name which you want todo in your TO DO list"
        },
        {
            type: "confirm",
            name: "addMore",
            message: "Do you want to add more item in you To Do list",
            default: "false"
        }
    ]);
    const todoItem = todoInput.todoItem;
    const addMore = todoInput.addMore;
    if (todoItem) {
        todostring.push(todoItem);
    }
    loop = addMore;
}
if (todostring.length > 0) {
    console.log(`here is your todo list`);
    for (let i = 0; i < todostring.length; i++) {
        console.log(`$(i + 1) ${todostring[i]}`);
    }
}
else {
    console.log(`your to do list is empty!`);
}
