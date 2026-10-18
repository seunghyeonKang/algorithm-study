# [[챌린지]2021년 날짜의 유무](https://www.codetree.ai/trails/complete/curated-cards/challenge-with-or-without-2021)

| 항목 | 내용 |
|---|---|
| 분류 | Trail |
| 커리큘럼 | [Trail 2 / 함수 / 값을 반환하는 함수](https://www.codetree.ai/trail-info/novice-mid/) |
| 난이도 | 보통 |
| 경험치 | 30 XP |

# 문제

두 개의 정수 $M$과 $D$가 주어지면, 2021년의 날짜 중 $M$월 $D$일이 존재하면 "Yes", 존재하지 않는다면 "No"를 출력하는 프로그램을 작성해보세요. 단, $M, D$를 인자로 받아 존재 여부를 반환하는 함수를 작성해 해결해보세요. 단, 2021년 2월은 28일까지 있습니다.

## 입력

첫 번째 줄에 정수 $M$과 $D$가 공백을 사이에 두고 주어집니다.

## 제한 조건

* $1 \le M \le 20$
* $1 \le D \le 50$

## 시스템 제한

* Time Limit: 1000 ms
* Memory Limit: 64 MiB

## 출력

첫 번째 줄에 "Yes"와 "No" 중 해당하는 값을 출력합니다.

# 📌 Code Review 📌

## 01. 기존 풀이
```javascript
const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
let [m, d] = input[0].split(" ").map(Number);

// Please Write your code here.

const monthList = [ 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31 ];
const isValidDate = (a, b) => {
    if (a <= 12 && b <= monthList[a - 1]) return "Yes";
    else return "No";
}

console.log(isValidDate(m, d));
```

## 02. AI 피드백 & 사전지식
- 함수의 반환값 (Boolean 활용): 함수 이름이 `isValidDate`이므로, 함수 자체는 유효성 여부를 나타내는 불리언(`true` / `false`)을 반환하고, 출력 단계에서 `"Yes"`와 `"No"`를 결정하는 것이 함수 재사용성과 가독성 측면에서 더 좋다.

## 03. 개선 풀이: 리팩토링 코드
```javascript
const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
let [m, d] = input[0].split(" ").map(Number);

const monthList = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

// 날짜 유효성을 boolean 값으로 반환
const isValidDate = (a, b) => {
    return a <= 12 && b >= 1 && b <= monthList[a - 1];
};

console.log(isValidDate(m, d) ? "Yes" : "No");
```
