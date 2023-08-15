import inquirer from "inquirer";
export const numbers = async () =>{
    let a = await inquirer.prompt([
        {
            name: "num1",
            type: "number",
            message: "Enter the First Number: "
    },
        {
            name: "num2",
            type: "number",
            message: "Enter the Second Number: "
    }])
    return a;
}