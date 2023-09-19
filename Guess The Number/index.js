import inquirer from "inquirer";
import chalk from "chalk";
let Rendom_Num = (Math.floor(Math.random() * 100)) + 1;
let score = 100;
let i = 0;
while (score > 0) {
    let a = async () => {
        let ab = await inquirer.prompt([{
                name: "num",
                type: "number",
                message: chalk.white.bgBlueBright("Enter Your Guess: ")
            }]);
        score = 100 - i;
        return ab.num;
    };
    let Entered_guess = await a();
    if (Entered_guess > 0 && Entered_guess < 101) {
        i += 10;
        if (Entered_guess == Rendom_Num) {
            console.log(chalk.green.bold(`Your Guess Is Correct, Score: ${score}/100`));
            break;
        }
        else if (Entered_guess > Rendom_Num) {
            console.log(chalk.blue("Your Guess Is Greater then The Number"));
        }
        else if (Entered_guess < Rendom_Num) {
            console.log(chalk.yellow("Your Guess Is Smaller then The Number"));
        }
    }
    else {
        console.log(chalk.red.bold("Invalid Number (Please Enter a Number Butween 1 to 100)"));
    }
}
if (score == 0) {
    console.log(chalk.red.bold(`You Lost: The Number Was ${Rendom_Num}, Score: ${score}/100`));
}
