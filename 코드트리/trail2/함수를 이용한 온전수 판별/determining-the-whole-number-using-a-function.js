const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

let [a, b] = input[0].split(" ").map(Number);

// Please Write your code here.

const isCompletedNum = (n) => {
    let answer = true;

    if (n % 2 === 0) answer = false;
    else if (n % 5 === 0 && n % 10 !== 0) answer = false;
    else if (n % 3 === 0 && n % 9 !== 0)  answer = false;

    return answer;
}

let count = 0;

for (let i = a; i <= b; i ++) {
    if (isCompletedNum(i)) count++;
}

console.log(count);