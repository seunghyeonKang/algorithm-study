# [[개념]짝수만 2로 나누기](https://www.codetree.ai/trails/complete/curated-cards/intro-divide-even-numbers-by-2)

| 항목 | 내용 |
|---|---|
| 분류 | Trail |
| 커리큘럼 | [Trail 2 / 함수 / Call by value / Call by reference](https://www.codetree.ai/trail-info/novice-mid/) |
| 난이도 | 쉬움 |
| 경험치 | 10 XP |

# 문
$N$개의 정수로 이루어진 배열이 주어집니다. 배열의 각 원소를 확인하여 짝수인 원소는 2로 나눈 값으로 바꾸고 홀수인 원소는 그대로 둔 뒤, 배열의 모든 원소를 출력하는 프로그램을 작성해보세요.

## 입력

첫 번째 줄에 정수 $N$이 주어집니다.

두 번째 줄에 $N$개의 정수 $a_1, a_2, \dots, a_N$이 공백을 사이에 두고 주어집니다.

## 제한 조건

* $1 \le N \le 50$
* $1 \le a_i \le 100$ ($1 \le i \le N$)

## 시스템 제한

* Time Limit: 1000 ms
* Memory Limit: 64 MiB

## 출력

변환된 배열의 각 원소를 공백으로 구분하여 출력합니다.

# 📌 Code Review 📌

## 01. 기존 풀이
```javascript
const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
let n = Number(input[0]);
let arr = input[1].split(" ").map(Number);

// Please Write your code here.

const answer = arr.map((num) => {
    if (num % 2 === 0) return num / 2;
    else return num;
})

console.log(...answer);
```

## 02. AI 피드백 & 사전지식
- 삼항 연산자를 활용하면 `map` 내부를 더 짧게 줄일 수 있다.

## 03. 다른 풀이: 삼항연산자 활용
```javascript
const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
let n = Number(input[0]);
let arr = input[1].split(" ").map(Number);

const answer = arr.map((num) => (num % 2 === 0 ? num / 2 : num));

console.log(...answer);
```
