import { sub } from "./operations/sub.js";
import { add } from "./operations/add.js";
import { div } from "./operations/div.js";
import { prod } from "./operations/prod.js";
import { numbers } from "./numbers.js";
import { operator } from "./operator.js";
import inquirer from "inquirer";

let again = "";
do{
    let n = await numbers()
let op = await operator()
let a = n.num1
let b = n.num2
let o = op.operator

// console.log(a, b, o)
let ans: number = 0;
if(o == "+"){
    ans = add(a, b);
}else if(o == "-"){
    ans = sub(a, b);
}else if(o == "*"){
    ans = prod(a, b);
}else if(o == "/"){
    ans = div(a, b);
}
console.log(ans)
const repeat = async ()=>{ 
    let c = inquirer.prompt([{
        name: "repeat",
        type: "list",
        choices: ["yes", "no"]
    }])
    return c
}
let re = await repeat()
again = re.repeat

}while(again !== "no")
