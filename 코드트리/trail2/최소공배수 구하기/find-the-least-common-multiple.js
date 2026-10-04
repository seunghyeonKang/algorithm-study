const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

let [n, m] = input[0].split(' ').map(Number);

// 최대공약수 구하기
const getGCD = (a, b) => {
  while (b !== 0) {
    [a, b] = [b, a % b];
  }
  return a;
}

// 최소공배수 구하기
const getNum = (a, b) => {
  return a * b / getGCD(a, b);
}

console.log(getNum(n, m));