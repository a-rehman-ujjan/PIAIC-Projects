import { numbers } from "./numbers.js";
import { operator } from "./operator.js";
import { add } from "./operations/add.js";
import { div } from "./operations/div.js";
import { prod } from "./operations/prod.js";
import { sub } from "./operations/sub.js";
import inquirer from "inquirer";
let again = "";
do {
    let n = await numbers();
    let op = await operator();
    let a = n.num1;
    let b = n.num2;
    let o = op.operator;
    let answer = 0;
    if (o == "+") {
        answer = add(a, b);
    }
    else if (o == "-") {
        answer = sub(a, b);
    }
    else if (o == "*") {
        answer = prod(a, b);
    }
    else if (o == "/") {
        answer = div(a, b);
    }
    console.log(answer);
    const repeat = async () => {
        let c = await inquirer.prompt([{
                name: "repeat",
                type: "list",
                message: "would you like to Repeat",
                choices: ["yes", "no"]
            }]);
        return c;
    };
    let re = await repeat();
    again = re.repeat;
} while (again !== "no");
