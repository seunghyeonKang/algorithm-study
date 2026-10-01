const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);
// Please Write your code here.

const print = Array.from({length: n}, () => '12345^&*()_').join("\n")
console.log(print);