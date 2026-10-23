const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const [n, m] = input[0].split(" ").map(Number);
const A = input[1].split(" ").map(Number);
const queries = input.slice(2).map(line => line.split(" ").map(Number));

// Please write your code here.

const getAnswers = (arr, q) => {
    let printData = "";

    for (let i = 0; i < q.length; i++) {
        let tempSum = 0;

        for (let j = q[i][0] - 1; j < q[i][1]; j++) {
            tempSum += arr[j];
        }

        printData += tempSum + "\n";
    }
    return printData.trim();
}

console.log(getAnswers(A, queries));