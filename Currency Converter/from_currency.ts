import inquirer from "inquirer"
import chalk from "chalk";
import { values } from "./index.js";

export default async function from_currency(){
    let currency_names:Array<string> = Object.keys(values)
    let a = await inquirer.prompt([{
        name: "currency",
        type: "list",
        message: chalk.yellow.bgBlueBright.bold("Convert From? Select A currency"),
        choices: currency_names
    }])
    return a.currency
}