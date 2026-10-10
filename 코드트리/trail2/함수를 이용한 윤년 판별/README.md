# [[개념]함수를 이용한 윤년 판별](https://www.codetree.ai/trails/complete/curated-cards/intro-tell-the-function-using-a-leap-year)

| 항목 | 내용 |
|---|---|
| 분류 | Trail |
| 커리큘럼 | [Trail 2 / 함수 / 값을 반환하는 함수](https://www.codetree.ai/trail-info/novice-mid/) |
| 난이도 | 쉬움 |
| 경험치 | 10 XP |

## 문제 설명

$y$가 주어졌을 때, $y$년이 윤년인지 판별하는 프로그램을 작성해보세요. 단, 윤년인지를 판별하는 함수를 직접 작성하여 문제를 해결해주세요.

윤년의 조건은 다음과 같습니다:

* 4로 나누어 떨어지는 해는 윤년, 그 밖의 해는 평년입니다.
* 단, 예외적으로 100으로 나누어 떨어지되 400으로 나누어 떨어지지 않는 해는 평년으로 합니다.

## 입력

* 첫 번째 줄에 정수 $y$가 주어집니다.

## 출력

* 입력받은 연도가 윤년이라면 `true`를, 아니라면 `false`를 출력합니다.

## 제한 조건

* $1 \le y \le 2021$

## 시스템 제한

* Time Limit: 1000 ms
* Memory Limit: 64 MiB

# 📌 Code Review 📌

## 01. 기존 풀이
```javascript
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
```

## 02. AI 피드백 & 사전지식
- 함수 이름 오타 및 직관성(불필요한 반전 연산): 오타(`Nomal` -> `Normal`) 고치자. 윤년 판별 문제이므로 평년 기준(`isNormalYear`)보다는 윤년 기준(`isLeapYear`)으로 함수를 설계하는 것이 직관적이다.

## 03. 개선 풀이: 가독성을 높인 코드
```javascript
const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const y = Number(input[0]);

// 윤년이면 true, 아니면 false를 반환하는 직관적인 함수
const isLeapYear = (year) => {
    // 4로 나누어 떨어지고 100으로 나누어 떨어지지 않거나, 400으로 나누어 떨어지는 해
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        return true;
    }
    return false;
};

console.log(isLeapYear(y));
```
