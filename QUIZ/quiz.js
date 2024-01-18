import chalk from "chalk";
import inquirer from "inquirer";
class Quiz {
    questions;
    constructor(questions) {
        this.questions = questions;
    }
    async start() {
        console.log(chalk.blue.bold('Welcome to the Quiz!'));
        for (const question of this.questions) {
            await this.askQuestion(question);
        }
        console.log(chalk.green.bold('Quiz completed!'));
    }
    async askQuestion(question) {
        const userAnswer = await inquirer.prompt([
            {
                type: 'list',
                name: 'answer',
                message: chalk.yellow.bold(question.question),
                choices: question.options.map((option) => ({
                    name: option,
                    value: option,
                })),
            },
        ]);
        if (userAnswer.answer.toLowerCase() === question.correctAnswer.toLowerCase()) {
            console.log(chalk.green.bold('Correct!\n'));
        }
        else {
            console.log(chalk.red.bold('Incorrect!\n'));
        }
    }
}
const quizData = [
    {
        question: 'What is the capital of France?',
        options: ['Berlin', 'Paris', 'Madrid', 'Rome'],
        correctAnswer: 'Paris',
    },
    {
        question: 'Which planet is known as the Red Planet?',
        options: ['Venus', 'Mars', 'Jupiter', 'Saturn'],
        correctAnswer: 'Mars',
    },
    {
        question: 'What is the largest mammal?',
        options: ['Elephant', 'Whale Shark', 'Blue Whale', 'Giraffe'],
        correctAnswer: 'Blue Whale',
    },
    {
        question: 'How many continents are there?',
        options: ['5', '6', '7', '8'],
        correctAnswer: '7',
    },
    {
        question: 'Who developed the theory of relativity?',
        options: ['Isaac Newton', 'Galileo Galilei', 'Albert Einstein', 'Nikola Tesla'],
        correctAnswer: 'Albert Einstein',
    },
];
const quiz = new Quiz(quizData);
quiz.start();
