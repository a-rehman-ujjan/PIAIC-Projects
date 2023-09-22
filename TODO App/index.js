import chalk from "chalk";
import { sleep, sto } from "./Created_Modules/addtask.js";
import select from "./Created_Modules/mainmenu.js";
import addtask from "./Created_Modules/addtask.js";
import vpt from "./Created_Modules/view_pending_tasks.js";
import select_del from "./Created_Modules/deletetask.js";
let tasks = [];
let z = 1;
let res;
while (true) {
    if (z != 0) {
        res = await select(tasks);
    }
    if (res == "➕ Add New Task") {
        let a = await addtask();
        tasks.push(a);
        console.log(chalk.gray("Loading..."));
        let sub_menu = await sto();
        res = sub_menu.x;
        z = sub_menu.y;
    }
    else if (res == "🕛 View Pending Tasks") {
        let sub_menu = await vpt(tasks);
        res = sub_menu.x;
        z = sub_menu.y;
    }
    else if (res == "🚫 Delete Task") {
        let deltask = await select_del(tasks);
        if (deltask != "cancel") {
            console.log("Deleting...");
            await sleep(1000);
            tasks.splice(deltask, 1);
            console.log("Task Deleted Successfully");
            z = 1;
            await sleep(500);
        }
        else {
            z = 1;
        }
    }
    else if (res == "📤 Exit") {
        break;
    }
}
