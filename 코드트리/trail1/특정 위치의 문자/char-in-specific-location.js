let fs = require("fs");
let input = fs.readFileSync(0).toString().trim();

const arr = [ "L", "E", "B", "R", "O", "S" ];
let answer = "None";

for (let i = 0; i < 6; i++) {
    if(arr[i] === input) answer = i;
}

console.log(answer);