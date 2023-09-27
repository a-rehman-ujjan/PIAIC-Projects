import inquirer from "inquirer";
import chalk from "chalk";

export default async function Amount(){
    let amount = await inquirer.prompt([{
        name: "Amount",
        type: "input",
        message: "Enter The Amount:",
        validate: (amount)=>{
            let intamount:any = parseFloat(amount);
            if (isNaN(intamount)){
                return chalk.bgRed.bold("Backspace & Enter A Valid Amount")
            }
            return true
        }
    }])
    return amount.Amount
}