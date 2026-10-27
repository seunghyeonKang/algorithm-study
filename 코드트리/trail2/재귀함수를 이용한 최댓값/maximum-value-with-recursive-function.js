const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);
const arr = input[1].split(" ").map(Number);

// Please Write your code here.

const getMax = (max, i) => {
    if (i === n) return max;
    
    if (arr[i] > max) return getMax(arr[i], i + 1);
    else return getMax(max, i + 1);
}

console.log(getMax(0, 0));