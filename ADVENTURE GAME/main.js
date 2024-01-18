"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var readlineSync = __importStar(require("readline-sync"));
var Player = /** @class */ (function () {
    function Player() {
        this.health = 100;
    }
    return Player;
}());
var Game = /** @class */ (function () {
    function Game() {
        this.player = new Player();
    }
    Game.prototype.startGame = function () {
        console.log("Welcome to the Text-Based Adventure Game!");
        console.log("You find yourself in a mysterious forest.");
        this.makeDecision();
    };
    Game.prototype.makeDecision = function () {
        console.log("\nWhat will you do?");
        console.log("1. Explore deeper into the forest");
        console.log("2. Rest for a while");
        console.log("3. Quit the game");
        var choice = this.getPlayerChoice();
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
    };
    Game.prototype.getPlayerChoice = function () {
        return readlineSync.questionInt("Enter the number of your choice: ");
    };
    Game.prototype.exploreDeeper = function () {
        console.log("You explore deeper into the forest and encounter a creature.");
        this.player.health -= 20;
        console.log("The creature attacks you. Your health: ".concat(this.player.health));
    };
    Game.prototype.restForAWhile = function () {
        console.log("You rest for a while and feel refreshed.");
        this.player.health += 10;
        console.log("You restore some health. Your health: ".concat(this.player.health));
    };
    Game.prototype.quitGame = function () {
        console.log("Thanks for playing! Goodbye.");
        process.exit(0);
    };
    Game.prototype.checkPlayerStatus = function () {
        if (this.player.health > 0) {
            this.makeDecision();
        }
        else {
            console.log("Game over. You ran out of health.");
            process.exit(0);
        }
    };
    return Game;
}());
// Start the game
var adventureGame = new Game();
adventureGame.startGame();
