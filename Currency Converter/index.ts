import chalk from "chalk";
import from_currency from "./from_currency.js";
import to_currency from "./to_currency.js";
import Amount from "./amount.js";

export const values:any = {
    "Pakistani Rupee": 288.65,
    "United States Dollar": 1,
    "Indian Rupee": 83.22,
    "Saudi Riyal": 3.75,
    "UAE Dirham": 3.67,
    "Kuwaiti Dinar": 0.31,
    "Afghan Afghani": 78.20
}

let from:string = await from_currency()
let amount = await Amount()
let to:string = await to_currency(from)
let result = amount * values[to]/values[from]
console.log(chalk.bgGreen("\n "+chalk.bold.underline(amount)+" "+from+" is equal to "+chalk.bold.underline((result).toFixed(2))+" "+to+" "))
