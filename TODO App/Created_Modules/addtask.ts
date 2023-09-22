import inquirer from "inquirer"
import chalk from "chalk"; 
export function sleep(ms:number) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
const addtask = async ()=>{ 
    let task = await inquirer.prompt([{
    name: "title",
    type: "input",
    message: "Enter Title of the Task: "
    },{
    name: "description",
    type: "input",
    message: "Enter What Describes your task the best?"
    }])
    return {
        title: task.title,
        description: task.description
    }
}
export let sto = async () => {
    await sleep(1000);
    console.log(chalk.gray.bold("Task Added Successfully\n"))
    await sleep(500);
    let q = await inquirer.prompt([{
        name: "options",
        type: 'list',
        choices: ["View Tasks", "Main Menu", "📤 Exit"],
        message: "\nPlease Select:"
    }])
    let x;
    let y;
    switch(q.options){
        case "View Tasks":
            x = "🕛 View Pending Tasks";
            y = 0;
            break;
        case "Main Menu":
            x = "📤 Exit"
            y = 1;
            break;
        case "📤 Exit":
            x = "📤 Exit"
            y = 0;
            break;
    }
    let z = {x, y}
    return z
}
export default addtask
