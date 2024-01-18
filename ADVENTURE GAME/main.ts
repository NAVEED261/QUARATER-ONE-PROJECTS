import * as readlineSync from 'readline-sync';


class Player {
  health: number = 100;
}

class Game {
  player: Player = new Player();

  startGame() {
    console.log("Welcome to the Text-Based Adventure Game!");
    console.log("You find yourself in a mysterious forest.");
    this.makeDecision();
  }

  makeDecision() {
    console.log("\nWhat will you do?");
    console.log("1. Explore deeper into the forest");
    console.log("2. Rest for a while");
    console.log("3. Quit the game");

    const choice = this.getPlayerChoice();

    switch (choice) {
      case 1:
        this.exploreDeeper();
        break;
      case 2:
        this.restForAWhile();
        break;
      case 3:
        this.quitGame();
        break;
      default:
        console.log("Invalid choice. Please enter a valid option.");
    }

    this.checkPlayerStatus();
  }

  getPlayerChoice(): number {
    return readlineSync.questionInt("Enter the number of your choice: ");
  }

  exploreDeeper() {
    console.log("You explore deeper into the forest and encounter a creature.");
    this.player.health -= 20;
    console.log(`The creature attacks you. Your health: ${this.player.health}`);
  }

  restForAWhile() {
    console.log("You rest for a while and feel refreshed.");
    this.player.health += 10;
    console.log(`You restore some health. Your health: ${this.player.health}`);
  }

  quitGame() {
    console.log("Thanks for playing! Goodbye.");
    process.exit(0);
  }

  checkPlayerStatus() {
    if (this.player.health > 0) {
      this.makeDecision();
    } else {
      console.log("Game over. You ran out of health.");
      process.exit(0);
    }
  }
}

// Start the game
const adventureGame = new Game();
adventureGame.startGame();
