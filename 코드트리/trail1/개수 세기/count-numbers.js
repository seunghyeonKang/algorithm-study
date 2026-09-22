let fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");

const n = input[0].split(" ")[0];
const m = input[0].split(" ")[1];
const arr = input[1].split(" ");

let answer = 0;

for (let i = 0; i < n; i++) {
    if(arr[i] === m) answer++;
}

console.log(answer);