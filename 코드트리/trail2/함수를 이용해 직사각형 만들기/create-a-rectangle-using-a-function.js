const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
let [n, m] = input[0].split(" ").map(Number);

console.log(("1".repeat(m) + "\n").repeat(n).trim());