const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const grid = input.slice(1).map(line => line.split(' ').map(Number));

// Please Write your code here.
// 5
// 0 0 0 1 1
// 1 0 1 1 1
// 0 1 0 1 0
// 0 1 0 1 0
// 0 0 0 1 1

let maxSum = 0;

for (let i = 0; i < n - 2; i++) {
    for (let j = 0; j < n - 2; j++) {
        let nextSum = 0;

        for (let a = i; a < i + 3; a++) {
            for (let b = j; b < j + 3; b++) {
                nextSum += grid[a][b];
            }
        }

        if (maxSum < nextSum) maxSum = nextSum;
    }
}

console.log(maxSum);