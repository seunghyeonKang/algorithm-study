# [[챌린지]배열의 평균](https://www.codetree.ai/trails/complete/curated-cards/challenge-ave-of-array)

| 항목 | 내용 |
|---|---|
| 분류 | Trail |
| 커리큘럼 | [Trail 1 / 2차원 배열 / 2차원 배열 입력](https://www.codetree.ai/trail-info/novice-low/) |
| 난이도 | 보통 |
| 경험치 | 20 XP |

## 문제 설명
자연수로 이루어진 2행 4열의 배열이 주어지면 가로 평균, 세로 평균, 전체 평균을 소수 첫째 자리까지만 반올림하여 출력하는 프로그램을 작성해보세요.

## 입력
자연수로 이루어진 2행 4열의 배열이 공백을 사이에 두고 주어집니다.

## 제한 조건
- $1 \le \text{주어지는 수} \le 100$

## 출력
- **첫 번째 줄**: 가로 평균
- **두 번째 줄**: 세로 평균
- **마지막 줄**: 전체 평균
- 모든 수 사이에 공백을 두고, 소수 첫째 자리까지만 출력합니다.

## 시스템 제한
- Time Limit: 1000 ms
- Memory Limit: 128 MiB

# 📌 Code Review 📌

## 01. 기존 풀이
```javascript
let fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");

const numList = [];

numList.push(input[0].trim().split(" ").map(Number));
numList.push(input[1].trim().split(" ").map(Number));

// [ [ 10, 20, 30, 40 ], [ 50, 60, 70, 80 ] ]

let line = [];
const answer = [];

for (let i = 0; i < 2; i++) {
    line.push((numList[i].reduce((acc, cur) => acc + cur) / 4).toFixed(1));
}
answer.push(line.join(" "));

line = [];
for (let i = 0; i < 4; i++) {
    line.push(((numList[0][i] + numList[1][i]) / 2).toFixed(1));
}
answer.push(line.join(" "));

answer.push((line.map(Number).reduce((acc, cur) => acc + cur) / 4).toFixed(1));

console.log(answer.join("\n"));
```

## 02. AI 피드백 & 사전지식
- `toFixed(1)`: 숫자를 소수점 첫째 자리까지 반올림하여 문자열(String)로 변환해 주는 함수
- `concat()`: 여러 배열이나 값을 하나로 이어 붙여 새로운 배열을 만들어 주는 함수
- 전체 평균 계산 방식의 잠재적 오차: 세로 평균들의 평균을 구해도 전체 평균값 자체는 같지만, 이미 반올림이나 부동소수점 오차가 발생할 수 있는 중간값(세로 평균)을 다시 더해서 나누기보다는 전체 원소 8개의 총합을 8로 나누는 것이 훨씬 안전하고 명확하다.

## 03. 개선 풀이: `concat` 활용한 리팩토링 코드
```javascript
let fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");

const numList = [];
numList.push(input[0].trim().split(" ").map(Number));
numList.push(input[1].trim().split(" ").map(Number));

const answer = [];

// 1. 가로 평균 (각 행의 합 / 4)
const rowAvg = [];
for (let i = 0; i < 2; i++) {
  const sum = numList[i].reduce((acc, cur) => acc + cur, 0);
  rowAvg.push((sum / 4).toFixed(1));
}
answer.push(rowAvg.join(" "));

// 2. 세로 평균 (각 열의 합 / 2)
const colAvg = [];
for (let i = 0; i < 4; i++) {
  const sum = numList[0][i] + numList[1][i];
  colAvg.push((sum / 2).toFixed(1));
}
answer.push(colAvg.join(" "));

// 3. 전체 평균 (전체 8개 원소의 합 / 8)
const totalSum = numList[0].concat(numList[1]).reduce((acc, cur) => acc + cur, 0);
answer.push((totalSum / 8).toFixed(1));

console.log(answer.join("\n"));
```
