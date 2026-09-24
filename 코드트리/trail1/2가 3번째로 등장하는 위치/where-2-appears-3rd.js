let fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");

const n = Number(input[0]);
const numList = input[1].trim().split(" ").map(Number);

let countTwo = 0;
let answer;

for (let i = 0; countTwo < 3; i++) {
    if(numList[i] === 2) countTwo++;
    if(countTwo === 3) console.log(i + 1);
}