const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const [n, k] = input[0].split(' ').map(Number);
const segments = input.slice(1, k + 1).map(line => line.split(' ').map(Number));

// Please write your code here.

// [ [ 5, 5 ], [ 2, 4 ], [ 4, 6 ], [ 3, 5 ] ]

const blockList = Array.from({ length: n }, () => 0);
for (let i = 0; i < k; i++) {
    for (let j = segments[i][0] - 1; j < segments[i][1]; j++) {
        blockList[j]++;
    }
}

console.log(Math.max(...blockList));