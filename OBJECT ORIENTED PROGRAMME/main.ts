import  inquirer from "inquirer";



class Interview {
  private studentName: string;
  private guestName: string;

  constructor() {
    this.studentName = "";
    this.guestName = "";
  }

  async start(): Promise<void> {
    await this.getStudentName();
    await this.getGuestName();

    console.log(`Interview started by ${this.studentName} with guest ${this.guestName}`);

    const interviewQuestions = [
      "Tell me about yourself.",
      "What are your strengths?",
      "What are your weaknesses?",
      "Why should we hire you?",
    ];

    const guestAnswers: string[] = [];

    for (let i = 0; i < interviewQuestions.length; i++) {
      const question = `Ask a question to ${this.guestName}: ${interviewQuestions[i]}`;
      const answer = await this.askQuestion(question);
      guestAnswers.push(answer);
    }

    this.displayInterviewResults(interviewQuestions, guestAnswers);
  }

  private async getStudentName(): Promise<void> {
    const answer = await inquirer.prompt([
      {
        type: "input",
        name: "studentName",
        message: "Enter your name (student):",
      },
    ]);

    this.studentName = answer.studentName;
  }

  private async getGuestName(): Promise<void> {
    const answer = await inquirer.prompt([
      {
        type: "input",
        name: "guestName",
        message: "Enter guest's name:",
      },
    ]);

    this.guestName = answer.guestName;
  }

  private async askQuestion(question: string): Promise<string> {
    const answer = await inquirer.prompt([
      {
        type: "input",
        name: "response",
        message: question,
      },
    ]);

    return answer.response;
  }

  private displayInterviewResults(questions: string[], answers: string[]): void {
    console.log("\nInterview Questions and Answers:");
    for (let i = 0; i < questions.length; i++) {
      console.log(`${i + 1}. ${questions[i]} - ${answers[i]}`);
    }
  }
}

const interview = new Interview();
interview.start();
