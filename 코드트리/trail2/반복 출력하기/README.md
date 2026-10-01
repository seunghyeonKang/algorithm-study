# [[개념]반복 출력하기](https://www.codetree.ai/trails/complete/curated-cards/intro-repeated-output)

| 항목 | 내용 |
|---|---|
| 분류 | Trail |
| 커리큘럼 | [Trail 2 / 함수 / 값을 반환하지 않는 함수](https://www.codetree.ai/trail-info/novice-mid/) |
| 난이도 | 쉬움 |
| 경험치 | 10 XP |

## 문제 설명
정수 $N$이 주어지면, $N$개의 줄에 걸쳐 `12345^&*()_`를 출력하는 프로그램을 작성해보세요. 
단, 몇 줄을 출력할지에 대한 인자값을 하나 받는 함수를 작성하여 문제를 해결해보세요.

## 입력
첫 번째 줄에 정수 $N$이 주어집니다.

## 출력
첫 번째 줄부터 각 줄마다 문자열을 총 $N$번 출력합니다.

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

const print = Array.from({length: n}, () => '12345^&*()_').join("\n")
console.log(print);
```

## 02. AI 피드백 & 사전지식
- 함수 작성 조건 미준수: 문제 설명에 "단, 몇 줄을 출력할지에 대한 인자값을 하나 받는 함수를 작성하여 문제를 해결해보세요."라는 조건이 있다. 이를 준수하자.
- `repeat`: 지정한 횟수만큼 문자열을 반복하여 붙인 새로운 문자열을 반환하는 메서드

## 03. 개선 풀이: `repeat` 메서드 활용
```javascript
const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);

// 몇 줄을 출력할지 인자값(lines)을 받는 함수
function printPattern(lines) {
  const lineStr = '12345^&*()_';
  // 문자열 뒤에 줄바꿈(\n)을 붙여 lines번 반복한 뒤, 마지막 줄바꿈 제거
  console.log((lineStr + '\n').repeat(lines).trim());
}

printPattern(n);
```
