const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

let [a, b, c] = input[0].split(" ").map(Number);

// Please Write your code here.
const getMinNumber = (x, y, z) => {
    return Math.min(x, y, z);
}

console.log(getMinNumber(a, b, c));