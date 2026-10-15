const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [A, B] = input[0].split(" ").map(Number);

// Please Write your code here.

const isThatNum = (n) => {
    if (n === 2) return true;

    for (let i = 2; i <= n / 2; i++) {
        if (n % i === 0) return false;
    }
    return true;
}
const isSumDouble = (n) => {
    const sum = String(n).split("").map(Number).reduce((acc, cur) => acc + cur);
    if (sum % 2 === 0) return true;
    else return false;
}

let count = 0;
for (let i = A; i <= B; i++) {
    if (isThatNum(i) && isSumDouble(i)) count++;
}

console.log(count);