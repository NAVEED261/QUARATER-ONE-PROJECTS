import inquirer from "inquirer";
async function startCountdown() {
    const answers = await inquirer.prompt([
        {
            type: "number",
            name: "duration",
            message: "Enter countdown duration in seconds:",
        },
    ]);
    const durationInSeconds = answers.duration;
    let remainingTime = durationInSeconds;
    const countdownInterval = setInterval(() => {
        if (remainingTime > 0) {
            console.clear();
            console.log(`Countdown: ${remainingTime} seconds remaining`);
            remainingTime--;
        }
        else {
            clearInterval(countdownInterval);
            console.log("Countdown complete!");
        }
    }, 1000);
}
startCountdown();
