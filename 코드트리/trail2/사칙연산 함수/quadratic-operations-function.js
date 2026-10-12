const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

let [a, o, c] = input[0].split(" ");
a = Number(a);
c = Number(c);
// Please Write your code here.

const calPlus = (x, y) => {
    return x + y;
}
const calMinus = (x, y) => {
    return x - y;
}
const calMultiplication = (x, y) => {
    return x * y;
}
const calDivision = (x, y) => {
    return parseInt(x / y);
}

const calObj = {
    '+' : calPlus,
    '-' : calMinus,
    '*' : calMultiplication,
    '/' : calDivision,
}


if (calObj[o]) console.log(input[0], "=", calObj[o](a, c));
else console.log("False");
