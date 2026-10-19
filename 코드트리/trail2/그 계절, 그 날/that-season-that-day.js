const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
const [year, month, day] = input[0].split(" ").map(Number);
// Please Write your code here.

const seasonList = ["Winter", "Winter", "Spring", "Spring", "Spring", "Summer", "Summer", "Summer", "Fall", "Fall", "Fall", "Winter"];
const monthList = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]; // 월별 일수

// 날짜 존재 유무 검증
const isValidDate = (y, m, d) => {
    const isSpecialYear = (y % 4 === 0 && y % 100 !== 0) || (y % 400 === 0); // 윤년은 true

    if (isSpecialYear) {
        if (m === 2 && d <= 29) return true;
        else if (d <= monthList[m - 1]) return true;
    } else {
        if (d <= monthList[m - 1]) return true;
    }

    return false;
}

// 적절한 계절 반환
const getSeason = (y, m, d) => {
    if (isValidDate(y, m, d)) return seasonList[m - 1];
    else return -1;
}

console.log(getSeason(year, month, day));