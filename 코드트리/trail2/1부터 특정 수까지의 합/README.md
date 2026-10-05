# [[개념]1부터 특정 수까지의 합](https://www.codetree.ai/trails/complete/curated-cards/intro-sum-from-1-to-a-certain-number)

| 항목 | 내용 |
|---|---|
| 분류 | Trail |
| 커리큘럼 | [Trail 2 / 함수 / 값을 반환하는 함수](https://www.codetree.ai/trail-info/novice-mid/) |
| 난이도 | 쉬움 |
| 경험치 | 10 XP |

## 문제 설명
정수 $N$이 주어지면 1부터 전달받은 수까지의 합을 10으로 나눈 값을 반환하는 함수를 작성하고, 함수로 전달하여 출력하는 프로그램을 작성해보세요. 단, 나머지는 버리고 몫만 출력합니다.

## 입력
첫 번째 줄에 정수 $N$이 주어집니다.

## 출력
첫 번째 줄에 1부터 $N$까지의 합을 10으로 나눈 값을 출력합니다.

## 제한 조건
- $1 \le N \le 100$

## 시스템 제한
- Time Limit: 1000 ms
- Memory Limit: 64 MiB

# 📌 Code Review 📌

## 01. 기존 풀이
```javascript
const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);
// Please Write your code here.

const func = (a) => {
    return (a + 1) * a / 20;
}

console.log(Math.floor(func(n)));
```
## 02. AI 피드백 & 사전지식
- `toFixed(0)` 사용으로 인한 반올림 오류: `toFixed(0)`는 소수점 첫째 자리에서 반올림을 수행한다. 소수점을 버리고 몫(정수)만 얻기 위해서는 `Math.floor()`를 사용해야 한다.

## 03. 개선 풀이: `Math.floor()` 활용
```javascript
const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);

const func = (a) => {
    const sum = (a * (a + 1)) / 2;
    return Math.floor(sum / 10);
}

console.log(func(n));
```
