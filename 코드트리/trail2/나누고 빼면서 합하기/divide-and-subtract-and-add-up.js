const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
const [n, m] = input[0].split(" ").map(Number);
const A = input[1].split(" ").map(Number);
// Please Write your code here.

const getSum = (num, arr) => {
    let sum = arr[0];

    while (num !== 1) {
        sum += arr[num - 1];
        if (num % 2 === 0) num /= 2;
        else num -= 1;
    }

    return sum;
}

console.log(getSum(m, A));