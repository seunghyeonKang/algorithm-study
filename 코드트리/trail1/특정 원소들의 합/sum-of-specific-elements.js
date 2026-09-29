let fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");

const numArr = [];
for (let i = 0; i < 4; i++) {
    numArr.push(input[i].trim().split(" ").map(Number));
}

let sum = 0;
for (let i = 0; i < 4; i++) {
    for (let j = 0; j < i + 1; j++) {
        sum += numArr[i][j];
    }
}

console.log(sum);