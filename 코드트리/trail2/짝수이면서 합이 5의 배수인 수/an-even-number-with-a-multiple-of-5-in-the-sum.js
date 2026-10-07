const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);
// Please Write your code here.

const getAnswer = (a) => {
    let sum = String(a).split("").map(Number).reduce((acc, cur) => acc + cur, 0);
    if (a % 2 === 0 && sum % 5 === 0) return "Yes";
    else return "No";
}

console.log(getAnswer(n));