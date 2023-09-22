import inquirer from "inquirer"

let select = async (array: Array<object>)=>{
    if(array.length != 0){
    let response = await inquirer.prompt([{
        name: "select",
        type: "list",
        message: "\nPlease Select:",
        choices: ["➕ Add New Task", "🕛 View Pending Tasks", "🚫 Delete Task", "📤 Exit"]
    }])
        return response.select  
    }else{
        let response = await inquirer.prompt([{
            name: "select",
            type: "list",
            message: "\nPlease Select:",
            choices: ["➕ Add New Task", "🕛 View Pending Tasks", "📤 Exit"]
        }])
        return response.select
    }
}
export default select;