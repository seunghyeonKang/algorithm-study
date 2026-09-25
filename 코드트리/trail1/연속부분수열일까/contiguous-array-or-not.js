let fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");

const [a, b] = input[0].trim().split(" ").map(Number);
const arrA = input[1].trim().split(" ").map(Number);
const arrB = input[2].trim().split(" ").map(Number);

let pointer = 0;
let answer = "No";

for (let i = 0; i < a; i++) {
    if (arrA[i] === arrB[pointer]) {
        pointer++;
        if (pointer === b) {
            answer = "Yes";
            break;
        }
    } else {
        pointer = 0;
    }
}

console.log(answer);