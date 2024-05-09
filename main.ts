#! /usr/bin/env node

import inquirer from "inquirer";

console.log("Wellcome to codewithsara - CLI Number guessing game");

const randomNumber = Math.floor(Math.random() * 3);

let answer = await inquirer.prompt([
    {
        name:"userGuessedNumber",
        message: "Enter your Guess number between 0 to 10: ",
        type: "number"
    },
]);
if(answer.userGuessedNumber === randomNumber){
    console.log("Congratulation! You Win.")
}
else{
    console.log("Sorry! You lose.")
}