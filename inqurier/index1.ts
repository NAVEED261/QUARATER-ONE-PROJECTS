import inquirer from "inquirer";
import Choice from "inquirer/lib/objects/choice.js";
let data = await inquirer.prompt([{
    type:'number',
    name:'num1',
    message:'enter your first number'
},
{
    type:'number',
    name:'num2',
   message:'enter your last number'
},
{
    type:'list',
    name:'operator',
    message:'enter your operator',
    Choice:['add','sub','multiply','divide']


}])
if(data.operator==='add'){
    console.log(data.num1 + data.num2)
}
else if(data.operator === 'sub'){
    console.log(data.num1 - data.num2)
}
else if(data.operator==='multiply'){
    console.log(data.num1 * data.num2)
}
else if(data.operator==='divide'){
    console.log(data.num1 / data.num2)
}