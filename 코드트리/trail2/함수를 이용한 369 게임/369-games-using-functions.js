const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const [A, B] = input[0].split(" ").map(Number);

// Please Write your code here.

const getNumberCount = (a, b) => {
    let count = 0;

    for (let i = a; i <= b; i++) {
        const isIncludes = String(i).split("").some((n) => n === "3" || n === "6" || n === "9");
        if (i % 3 ===0 || isIncludes) count++;
    }

    return count;
}

console.log(getNumberCount(A, B));