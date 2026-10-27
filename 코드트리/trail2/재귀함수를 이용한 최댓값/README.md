# [[챌린지]재귀함수를 이용한 최댓값](https://www.codetree.ai/trails/complete/curated-cards/challenge-maximum-value-with-recursive-function)

| 항목 | 내용 |
|---|---|
| 분류 | Trail |
| 커리큘럼 | [Trail 2 / 재귀함수 / 값을 반환하는 재귀함수](https://www.codetree.ai/trail-info/novice-mid/) |
| 난이도 | 보통 |
| 경험치 | 30 XP |

# 문제

$n$개의 원소 $A_1, A_2, \dots, A_n$ 중 최댓값을 구하는 프로그램을 작성해보세요. 단, 재귀함수를 이용하여 문제를 해결해주세요.

## 입력

첫 번째 줄에 정수 $n$이 주어집니다.

두 번째 줄에 $n$개의 정수 $A_1, A_2, \dots, A_n$이 공백을 사이에 두고 주어집니다.

## 제한 조건

- $1 \le n \le 100$
- $1 \le A_i \le 100$ ($1 \le i \le n$)

## 출력

첫 번째 줄에 주어진 원소 중 최댓값을 출력합니다.

## 시스템 제한

- Time Limit: 1000 ms
- Memory Limit: 64 MiB

# 📌 Code Review 📌

## 01. 기존 풀이
```javascript
const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);
const arr = input[1].split(" ").map(Number);

// Please Write your code here.

const getMax = (max, i) => {
    if (i === n) return max;
    
    if (arr[i] > max) return getMax(arr[i], i + 1);
    else return getMax(max, i + 1);
}

console.log(getMax(0, 0));
```

## 02. AI 피드백 & 사전지식
- `Math.max` 활용하기: `if-else` 분기문 대신 자바스크립트 내장 함수를 사용하여 코드를 더 간결하고 직관적으로 줄일 수 있다.

## 03. 개선 풀이
```javascript
const getMax = (max, i) => {
    if (i === n) return max;
    return getMax(Math.max(max, arr[i]), i + 1);
};
```
