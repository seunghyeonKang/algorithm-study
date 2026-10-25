const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);
// Please Write your code here.

const getFibo = (a, b, i) => {
    if (i <= 2) return 1;
    else if (i === 3) return a + b;
    else return getFibo(b, a + b, i - 1);
}

console.log(getFibo(1, 1, n));