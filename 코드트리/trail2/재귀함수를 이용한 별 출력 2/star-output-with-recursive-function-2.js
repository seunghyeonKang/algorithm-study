const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
let n = Number(input[0]);
// Please Write your code here.

const printText = (num, countdown) => {
    const i = countdown > num ? countdown - num : num - countdown + 1;

    console.log("* ".repeat(i).trim());

    if (countdown > 1) printText(num, countdown - 1);
}

printText(n, n * 2);