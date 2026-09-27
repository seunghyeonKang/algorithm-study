let fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");

const alpObj = {
    a: "A", b: "B", c: "C", d: "D", e: "E", f: "F", g: "G", h: "H", i: "I", j: "J", k: "K", l: "L", m: "M", n: "N", o: "O", p: "P", q: "Q", r: "R", s: "S", t: "T", u: "U", v: "V", w: "W", x: "X", y: "Y", z: "Z"
}
const answer = [];

for (let i = 0; i < 5; i++) {
    const line = input[i].trim().split(" ");
    const arr = [];

    for (let j = 0; j < 3; j++) {
        arr.push(alpObj[line[j]]);
    }

    answer.push(arr.join(" "));
}

console.log(answer.join("\n"));