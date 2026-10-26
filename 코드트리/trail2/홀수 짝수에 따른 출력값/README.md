# [[챌린지]홀수 짝수에 따른 출력값](https://www.codetree.ai/trails/complete/curated-cards/challenge-output-value-based-on-odd-even-numbers)

| 항목 | 내용 |
|---|---|
| 분류 | Trail |
| 커리큘럼 | [Trail 2 / 재귀함수 / 값을 반환하는 재귀함수](https://www.codetree.ai/trail-info/novice-mid/) |
| 난이도 | 쉬움 |
| 경험치 | 10 XP |

# 문제

정수 $N$이 주어지고, $N$이 홀수인 경우에는 1부터 $N$까지의 홀수를, $N$이 짝수인 경우에는 2부터 $N$까지의 짝수의 합을 출력하는 프로그램을 재귀 함수를 이용하여 작성해보세요.

## 입력
첫 번째 줄에 정수 $N$이 주어집니다.

## 제한 조건
* $1 \le N \le 100$

## 출력
첫 번째 줄에는 출력하는 모든 수의 합을 출력합니다.

## 시스템 제한
* Time Limit: 1000 ms
* Memory Limit: 64 MiB

# 📌 Code Review 📌

## 01. 기존 풀이
```javascript
const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);

// Please Write your code here.

const getSum = (acc, i) => {
    if (i === n) return acc + i;
    return getSum(acc + i, i + 2);
}

console.log(getSum(0, (n + 1) % 2 + 1));
```

## 02. AI 피드백 & 사전지식
- 초기값을 구하는 식인 `(n + 1) % 2 + 1`은 수학적으로 정확하지만, 다른 사람이 코드를 읽었을 때 직관적으로 한눈에 들어오지 않을 수 있다. 삼항 연산자를 사용하면 의도를 훨씬 더 명확하게 표현할 수 있다.

## 03. 개선 풀이
```javascript
const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);

const getSum = (acc, i) => {
    // i가 n을 넘어가면 누적값 반환 (안전 장치)
    if (i > n) return acc;
    // n에 도달하면 해당 값까지 더해서 반환
    if (i === n) return acc + i;
    
    return getSum(acc + i, i + 2);
}

// 홀수면 1, 짝수면 2로 시작점을 명시적으로 표현
const start = n % 2 === 1 ? 1 : 2;

console.log(getSum(0, start));
```
