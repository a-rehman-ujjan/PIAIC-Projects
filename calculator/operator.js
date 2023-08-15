import inquirer from "inquirer";
export const operator = async () => {
    let operator = await inquirer.prompt([{
            name: "operator",
            type: "list",
            message: "Select the operator",
            choices: ["+", "-", "*", "/"],
        }]);
    return operator;
};
