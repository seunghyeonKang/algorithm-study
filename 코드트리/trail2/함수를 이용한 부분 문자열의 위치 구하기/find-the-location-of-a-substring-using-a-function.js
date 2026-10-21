const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const text = input[0];
const pattern = input[1];

// Please Write your code here.

const isCorrect = (i) => {
    return text.slice(i, i + pattern.length) === pattern;
}

let answer = -1;
for (let i = 0; i <= text.length - pattern.length; i++) {
    if (isCorrect(i)) {
        answer = i;
        break;
    }
}

console.log(answer);