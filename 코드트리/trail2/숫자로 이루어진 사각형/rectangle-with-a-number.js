const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const N = Number(input[0]);
// Please write your code here.

let answer = "";
let tempNum = 1;

for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
        answer += tempNum +  " ";
        if (tempNum >= 9) tempNum = 1;
        else tempNum++;
    }
    answer = answer.trim();
    answer += "\n";
}

console.log(answer.trim());