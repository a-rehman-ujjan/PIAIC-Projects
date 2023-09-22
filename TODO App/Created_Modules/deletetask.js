import chalk from "chalk";
import inquirer from "inquirer";
let select_del = async (tasks) => {
    let arr = [];
    for (let a = 0; a < tasks.length; a++) {
        arr.push(tasks[a].title);
    }
    arr.push("❌ Cancel");
    let a = await inquirer.prompt([{
            name: "choice",
            type: "list",
            choices: arr,
            message: chalk.bold.red("\nSelect Task: 👇\n")
        }]);
    if (a.choice != "❌ Cancel") {
        let n = arr.indexOf(a.choice);
        return n;
    }
    else {
        return "cancel";
    }
};
export default select_del;
