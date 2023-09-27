import inquirer from "inquirer";
import chalk from "chalk";
import { values } from "./index.js";
export default async function from_currency() {
    let currency_names = Object.keys(values);
    let a = await inquirer.prompt([{
            name: "currency",
            type: "list",
            message: chalk.yellow.bgBlueBright.bold("Convert From? Select A currency"),
            // choices: ["Pakistani Rupee","United States Dollar","Indian Rupee","Saudi Riyal","UAE Dirham", "Kuwaiti Dinar", "Afghan Afghani"]
            choices: currency_names
        }]);
    return a.currency;
}
