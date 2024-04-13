import inquirer from 'inquirer';
const randomNumber = Math.floor(Math.random() * 10 + 1);
console.log("Welcome to number Guesing Game");
const answers = await inquirer.prompt([
    {
        type: "number",
        name: "userGuess",
        message: "Please guess a number between 1 to 10: "
    }
]);
const { userGuess } = answers;
console.log(userGuess, "userGuess", randomNumber, 'SYs');
if (userGuess === randomNumber) {
    console.log("Yeaaaa Your answer is correct \n You Win!");
}
else {
    console.log("Please try again Better luck next time!");
}
