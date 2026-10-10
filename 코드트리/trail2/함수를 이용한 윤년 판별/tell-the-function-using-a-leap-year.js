const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const y = Number(input[0]);
// Please Write your code here.

const isNomalYear = (year) => { // 윤년: false, 평년: true
    const isException = year % 100 === 0 && year % 400 !== 0; // true인 경우 평년
    if (year % 4 === 0 && !isException) return false;
    return true;
}

console.log(!isNomalYear(y));