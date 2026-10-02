# [[개념]함수를 이용해 직사각형 만들기](https://www.codetree.ai/trails/complete/curated-cards/intro-create-a-rectangle-using-a-function)

| 항목 | 내용 |
|---|---|
| 분류 | Trail |
| 커리큘럼 | [Trail 2 / 함수 / 값을 반환하지 않는 함수](https://www.codetree.ai/trail-info/novice-mid/) |
| 난이도 | 쉬움 |
| 경험치 | 10 XP |

## 문제 설명
$n, m$이 주어졌을 때, 전부 1로 이루어져 있는 $n \times m$ 크기의 직사각형을 출력하는 프로그램을 작성해보세요.  
**단, 직사각형의 행, 열의 크기를 인자로 받아 직사각형을 출력하는 함수를 만들어 문제를 해결해주세요.**

## 입력
첫 번째 줄에 정수 $n$과 $m$이 공백을 사이에 두고 주어집니다.

## 제한 조건
- $1 \le n \le 100$
- $1 \le m \le 100$

## 출력
1로 이루어진 $n \times m$ 크기의 직사각형을 출력합니다.

## 시스템 제한
- Time Limit: 1000 ms
- Memory Limit: 64 MiB

# 📌 Code Review 📌

## 01. 기존 풀이
```javascript
const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
let [n, m] = input[0].split(" ").map(Number);

console.log(("1".repeat(m) + "\n").repeat(n).trim());
```

## 02. AI 피드백 & 사전지식
- '함수' 구현 요구사항 미반영: 문제 잘 읽자...

## 03. 개선 풀이

```javascript
const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
let [n, m] = input[0].split(" ").map(Number);

// 문자열을 미리 조립하여 한 번에 출력하는 함수 형태
function printRectangleOptimized(row, col) {
  const result = Array(row).fill("1".repeat(col)).join("\n");
  console.log(result);
}

// 함수 호출
printRectangleOptimized(n, m);
