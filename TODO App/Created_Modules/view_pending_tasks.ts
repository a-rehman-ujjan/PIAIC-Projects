import inquirer from "inquirer";
import chalk from "chalk";
let vpt = async (a:any) => {
    let x;
    let y;
    if(a.length != 0){
    for (let ti = 0; ti < a.length; ti++){
    console.log(chalk.bold.bgBlueBright.white(`\nTask ${ti + 1}: `)+chalk.bold.bgBlueBright.white(a[ti].title)+"\n"+(chalk.green(a[ti].description)+"\n"))
    }
    let qvpt = await inquirer.prompt([{
        name: "vpts",
        type: "list",
        choices: ["➕ Add New Task", "🚫 Delete A Task", "📤 back"],
        message: "Please Select: "
    }])
    switch(qvpt.vpts){
        case "➕ Add New Task":
            x = "➕ Add New Task"
            y = 0;
            break;
        case "🚫 Delete A Task":
            x = "🚫 Delete Task"
            y = 0
            break;
        case "📤 back":
            y = 1;
            break;
    }
}else{
    console.log(chalk.bgRed.bold("\nNo Pending Tasks To show\n"))
    let qvpt = await inquirer.prompt([{
        name: "vpts",
        type: "list",
        choices: ["➕ Add A Task", "📤 back"],
        message: "Please Select: "
    }])
    switch(qvpt.vpts){
        case "➕ Add A Task":
            x = "➕ Add New Task"
            y = 0;
            break;
        case "📤 back":
            y = 1;
            break;
    }
}
let z = {x, y}
return z;
}
export default vpt