const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split(" ");
const [a, b] = input.map(Number);
// Please Write your code here. 

const getAnswer = (x, y) => {
    return x ** y;
}
console.log(getAnswer(a, b));