let fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");

const numList = [];

numList.push(input[0].trim().split(" ").map(Number));
numList.push(input[1].trim().split(" ").map(Number));

// [ [ 10, 20, 30, 40 ], [ 50, 60, 70, 80 ] ]

let line = [];
const answer = [];

for (let i = 0; i < 2; i++) {
    line.push((numList[i].reduce((acc, cur) => acc + cur) / 4).toFixed(1));
}
answer.push(line.join(" "));

line = [];
for (let i = 0; i < 4; i++) {
    line.push(((numList[0][i] + numList[1][i]) / 2).toFixed(1));
}
answer.push(line.join(" "));

answer.push((line.map(Number).reduce((acc, cur) => acc + cur) / 4).toFixed(1));

console.log(answer.join("\n"));