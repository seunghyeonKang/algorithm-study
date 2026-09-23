let fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");

const [n, q] = input[0].split(" ").map(Number);
const numList = input[1].split(" ").map(Number);

const logAnswer = (arr) => {
    if (arr[0] === 1) {
        console.log(numList[arr[1] - 1]);
    } else if (arr[0] === 2) {
        const idx = numList.indexOf(arr[1]);
        console.log(idx !== -1 ? idx + 1 : 0);
    } else {
        let numAnswer = numList[arr[1] - 1];
        for (let j = arr[1]; j < arr[2]; j++) {
            numAnswer += ` ${numList[j]}`;
        }
        console.log(numAnswer);
    }
}

for (let i = 2; i < q + 2; i++) {
    logAnswer(input[i].split(" ").map(Number));
}