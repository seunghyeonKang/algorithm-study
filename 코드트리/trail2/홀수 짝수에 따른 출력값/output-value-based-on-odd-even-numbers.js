const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);

// Please Write your code here.

const getSum = (acc, i) => {
    if (i === n) return acc + i;
    return getSum(acc + i, i + 2);
}

console.log(getSum(0, (n + 1) % 2 + 1));