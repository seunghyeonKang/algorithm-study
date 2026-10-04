# [[챌린지]최대공약수 구하기](https://www.codetree.ai/trails/complete/curated-cards/challenge-find-the-greatest-common-divisor)

| 항목 | 내용 |
|---|---|
| 분류 | Trail |
| 커리큘럼 | [Trail 2 / 함수 / 값을 반환하지 않는 함수](https://www.codetree.ai/trail-info/novice-mid/) |
| 난이도 | 쉬움 |
| 경험치 | 10 XP |

## 문제 설명
$n, m$이 주어졌을 때, $n$과 $m$의 최대공약수를 출력하는 프로그램을 작성해보세요. 
**단, 두 정수를 인자로 받아 최대공약수를 구해 출력하는 함수를 만들어 문제를 해결해주세요.**

## 입력
첫 번째 줄에 정수 $n$과 $m$이 공백을 사이에 두고 주어집니다.

## 출력
첫 번째 줄에 $n$과 $m$의 최대공약수를 출력합니다.

## 제한 조건
- $1 \le n, m \le 100$

## 시스템 제한
- Time Limit: 1000 ms
- Memory Limit: 64 MiB

# 📌 Code Review 📌

## 01. 기존 풀이
```javascript
const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split(" ");
let n = Number(input[0]);
let m = Number(input[1]);
// Please Write your code here.

while (m !== 0) {
    [n, m] = [m, n % m];
}

console.log(n);
```

## 02. AI 피드백 & 사전지식
- 함수 작성 요구사항 미충족...

## 03. 다른 풀이: 문제 지문 충실
```javascript
const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split(" ");
let n = Number(input[0]);
let m = Number(input[1]);

// 두 정수를 인자로 받아 최대공약수를 구해 출력하는 함수
function printGCD(a, b) {
  while (b !== 0) {
    [a, b] = [b, a % b];
  }
  console.log(a);
}

printGCD(n, m);
```
