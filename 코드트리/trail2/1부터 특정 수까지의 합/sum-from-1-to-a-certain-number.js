const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);
// Please Write your code here.

const func = (a) => {
    return (a + 1) * a / 20;
}

console.log(Math.floor(func(n)));