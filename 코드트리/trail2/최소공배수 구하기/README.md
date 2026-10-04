# [[테스트]최소공배수 구하기](https://www.codetree.ai/trails/complete/curated-cards/test-find-the-least-common-multiple)

| 항목 | 내용 |
|---|---|
| 분류 | Trail |
| 커리큘럼 | [Trail 2 / 함수 / 값을 반환하지 않는 함수](https://www.codetree.ai/trail-info/novice-mid/) |
| 난이도 | 쉬움 |
| 경험치 | 30 XP |

## 문제 설명
$n$과 $m$이 주어졌을 때, $n$과 $m$의 최소공배수를 출력하는 프로그램을 작성해보세요.

**단, 두 수를 인자로 받아 최소공배수를 구해 반환하는 함수를 만들어 문제를 해결해주세요.**

## 입력
첫 번째 줄에 정수 $n$과 $m$이 공백을 사이에 두고 주어집니다.

## 출력
첫 번째 줄에 $n$과 $m$의 최소공배수를 출력합니다.

## 제한 조건
- $1 \le n, m \le 100$

## 시스템 제한
- Time Limit: 1000 ms
- Memory Limit: 192 MiB

# 📌 Code Review 📌

## 01. 기존 풀이
```javascript
const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

let [n, m] = input[0].split(' ').map(Number);

// 최대공약수 구하기
const getGCD = (a, b) => {
  while (b !== 0) {
    [a, b] = [b, a % b];
  }
  return a;
}

// 최소공배수 구하기
const getNum = (a, b) => {
  return a * b / getGCD(a, b);
}

console.log(getNum(n, m));
```

## 02. AI 피드백 & 사전지식
- 함수 이름 직관화: `getNum`이라는 이름 대신 `getLCM` (Least Common Multiple)처럼 역할이 명확한 이름을 사용하자.
- 입력 처리 방식: 입력이 단 한 줄로 들어오므로 `split('\n')`을 거치지 않고 바로 `input[0]`처럼 처리하는 것도 가능하다.

## 03. 개선 풀이: 리팩토링 코드
```javascript
const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split(' ');

let n = Number(input[0]);
let m = Number(input[1]);

// 1. 최대공약수(GCD) 구하기
const getGCD = (a, b) => {
  while (b !== 0) {
    [a, b] = [b, a % b];
  }
  return a;
};

// 2. 최소공배수(LCM) 구해 반환하는 함수
const getLCM = (a, b) => {
  return (a * b) / getGCD(a, b);
};

console.log(getLCM(n, m));
```
