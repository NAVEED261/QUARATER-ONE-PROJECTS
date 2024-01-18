import inquirer from "inquirer";
let answer =await inquirer.prompt([{
    type:'number',
    name:'num1',
    message:'enter your first number'},
    {
        type:'number',
        name:'num2',
        message:'enter your  last number'
        

    },
    {
        type:'list',
        name:'operator',
        message:'enter your operator',
        choices:['add','sub','multiply','divide']

    }])
    if(answer.operator=== 'add'){
        console.log(answer.num1 + answer.num2);
    }
    else if(answer.operator=== 'sub'){
        console.log(answer.num1 - answer.num2);
    }
    else if(answer.operator=== 'multiply'){
        console.log(answer.num1 * answer.num2);
    }
    else if(answer.operator=== 'divide'){
        console.log(answer.num1 / answer.num2);
    }


