const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [A, B] = input[0].split(" ").map(Number);

// Please Write your code here.

// 1. 단일 수가 소수인지 판별하는 함수
const isPrime = (n) => {
    if (n < 2) return false;
    // Math.sqrt(n)까지만 확인
    for (let i = 2; i * i <= n; i++) {
        if (n % i === 0) return false;
    }
    return true;
};

// 2. A부터 B까지의 소수 합을 구하는 함수
const getSum = (a, b) => {
    let sum = 0;
    for (let i = a; i <= b; i++) {
        if (isPrime(i)) {
            sum += i;
        }
    }
    return sum;
};

console.log(getSum(A, B));