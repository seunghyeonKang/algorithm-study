const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

let [n, m] = input[0].split(' ').map(Number);

// 최대공약수 - 유클리드 호제법
function gcd(a, b) {
  while (b !== 0) {
    let r = a % b;
    a = b;
    b = r;
  }
  return a;
}

// 최소공배수
function lcm(a, b) {
  return (a * b) / gcd(a, b);
}

const result = lcm(n, m);
console.log(result);