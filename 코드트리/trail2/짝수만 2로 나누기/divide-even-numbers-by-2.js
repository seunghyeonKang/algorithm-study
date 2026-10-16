const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
let n = Number(input[0]);
let arr = input[1].split(" ").map(Number);

// Please Write your code here.

const answer = arr.map((num) => {
    if (num % 2 === 0) return num / 2;
    else return num;
})

console.log(...answer);