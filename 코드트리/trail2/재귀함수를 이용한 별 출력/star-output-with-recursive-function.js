const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
let n = Number(input[0]);
// Please Write your code here.

const func = (i, N) => {
    console.log("*".repeat(i));
    if (i < N) func(i + 1, N);
}

func(1, n);