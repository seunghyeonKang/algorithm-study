const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const [n, m] = input[0].split(" ").map(Number);
// Please write your code here.

const changeNum = (a, b) => {
    [a, b] = [b, a];

    return [a, b];
}

console.log(...changeNum(n, m));