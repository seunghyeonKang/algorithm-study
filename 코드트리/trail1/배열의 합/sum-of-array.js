let fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");

for (let i = 0; i < 4; i++) {
    const lineList = input[i].trim().split(" ").map(Number);
    let temp = 0;

    for (let j = 0; j < 4; j++) {
        temp += lineList[j];
    }

    console.log(temp);
}