# [[테스트]그 계절, 그 날](https://www.codetree.ai/trails/complete/curated-cards/test-that-season-that-day)

| 항목 | 내용 |
|---|---|
| 분류 | Trail |
| 커리큘럼 | [Trail 2 / 함수 / 값을 반환하는 함수](https://www.codetree.ai/trail-info/novice-mid/) |
| 난이도 | 어려움 |
| 경험치 | 70 XP |

# 문제

연도, 월, 일이 차례로 3개의 정수 $Y, M, D$로 주어졌을 때, $Y$해에 $M$월 $D$일이 존재한다면 어떤 계절인지를 출력하고, 만약 존재하지 않는다면 `-1`을 출력하는 프로그램을 작성해보세요. 단, 함수를 이용하여 문제를 해결해주세요.

3~5월이 봄, 6~8월이 여름, 9~11월이 가을, 12~2월이 겨울이라 가정합니다.

단, 윤년(2월이 29일까지 있는 해)의 조건은 다음과 같습니다.

* 4의 배수라면 윤년입니다.
* 4의 배수이면서 100의 배수라면 윤년이 아닙니다.
* 4의 배수이면서 100의 배수지만 또한 400의 배수라면 윤년입니다.
* 나머지 경우에는 윤년이 아닙니다.

## 입력

첫 번째 줄에 연도, 월, 일에 해당하는 $Y, M, D$가 공백을 사이에 두고 주어집니다.

## 출력

$Y$년의 날짜 중 $M$월 $D$일이 존재한다면, 첫 번째 줄에 어떤 계절인지를 출력합니다.

단, 봄의 경우에는 `Spring` 을,
여름의 경우에는 `Summer` 를,
가을의 경우에는 `Fall` 을,
겨울의 경우에는 `Winter` 를 출력합니다.

만약 $Y$년에 $M$월 $D$일이 존재하지 않는다면, `-1` 을 출력합니다.

## 제한 조건

* $1 \le Y \le 3000$
* $1 \le M \le 12$
* $1 \le D \le 31$
* 모든 입력값은 정수입니다.

## 시스템 제한

* Time Limit: 1000 ms
* Memory Limit: 64 MiB

# 📌 Code Review 📌

## 01. 기존 풀이
```javascript
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
```

## 02. AI 피드백 & 사전지식
- `isValidDate` 함수 간소화: 윤년일 때 `monthList`의 2월 값(`28`)을 일시적으로 `29`로 취급하거나, 윤년 여부에 따라 `monthList`를 동적으로 구성하면 `if-else` 분기를 훨씬 단순하게 만들 수 있다.

## 03. 개선 풀이
```javascript
const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
const [year, month, day] = input[0].split(" ").map(Number);

const seasonList = ["Winter", "Winter", "Spring", "Spring", "Spring", "Summer", "Summer", "Summer", "Fall", "Fall", "Fall", "Winter"];

// 날짜 존재 유무 검증
const isValidDate = (y, m, d) => {
    // 월 또는 일이 범위를 벗어나면 false
    if (m < 1 || m > 12 || d < 1) return false;

    // 윤년 판별
    const isLeapYear = (y % 4 === 0 && y % 100 !== 0) || (y % 400 === 0);
    
    // 월별 일수 (윤년인 경우 2월을 29일로 설정)
    const monthList = [31, isLeapYear ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    return d <= monthList[m - 1];
};

// 적절한 계절 반환
const getSeason = (y, m, d) => {
    if (!isValidDate(y, m, d)) return -1;
    return seasonList[m - 1];
};

console.log(getSeason(year, month, day));
```
