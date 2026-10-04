const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split(" ");
let n = Number(input[0]);
let m = Number(input[1]);
// Please Write your code here.

while (m !== 0) {
    [n, m] = [m, n % m];
}

console.log(n);