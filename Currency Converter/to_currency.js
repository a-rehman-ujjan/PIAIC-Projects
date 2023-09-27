import chalk from "chalk";
import inquirer from "inquirer";
import { values } from "./index.js";
export default async function to_currency(from_currency) {
    let choices = Object.keys(values);
    let n = choices.indexOf(from_currency);
    choices.splice(n, 1);
    let a = await inquirer.prompt([{
            name: "currency",
            type: "list",
            message: chalk.bgBlueBright("Convert To? Select The Currency 👇"),
            choices: choices
        }]);
    return a.currency;
}
