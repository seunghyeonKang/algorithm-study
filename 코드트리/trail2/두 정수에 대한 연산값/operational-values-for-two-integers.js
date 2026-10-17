const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
let [a, b] = input[0].split(" ").map(Number);
// Please Write your code here.

const getAnswer = (m, n) => {
    if (m >= n) {
        m += 25;
        n *= 2
    } else {
        n += 25;
        m *= 2
    }
    return [m, n];
}

[a, b] = getAnswer(a, b);

console.log(a, b);