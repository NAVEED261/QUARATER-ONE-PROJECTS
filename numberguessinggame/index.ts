import inquirer from "inquirer";
async function startFunc(){
    const systemnum = Math.floor(Math.random() *100)
    const usernum = await inquirer.prompt([
        {
            type:"number",
            name:"userGuess",
            message:"enter your numberB/w 1 to 10", 
        }

    ])
    const {userGuess} = usernum;
    console.log("userGuess;",userGuess,"\nsystemGuess");
    if(userGuess === systemnum){
        console.log("your Guess is correct \nyou won")
    }
    else{
        console.log("better luck next time")
    }
}
async function startagain(){
    do{
        await startFunc();
        var again = await inquirer.prompt({
            type: "input",
            name: "restart",
            message:"do you want to continue? press y or N",
    })
    }while (again.restart == "y" || again.restart == "Y" || again.restart == "yes" ||again.restart == "yes");
}
startagain();