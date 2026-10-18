const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
let [m, d] = input[0].split(" ").map(Number);

// Please Write your code here.

const monthList = [ 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31 ];
const isValidDate = (a, b) => {
    if (a <= 12 && b <= monthList[a - 1]) return "Yes";
    else return "No";
}

console.log(isValidDate(m, d));