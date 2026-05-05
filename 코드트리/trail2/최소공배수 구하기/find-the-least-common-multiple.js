const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

let [n, m] = input[0].split(' ').map(Number);

let answer = 0;

for (let a = 1; a < 9901; a++) {
    if (!((a % n) || (a % m))) {
        answer = a;
        break;
    }
}

console.log(answer);