# [[개념]배열의 합](https://www.codetree.ai/trails/complete/curated-cards/intro-sum-of-array)

| 항목 | 내용 |
|---|---|
| 분류 | Trail |
| 커리큘럼 | [Trail 1 / 2차원 배열 / 2차원 배열 입력](https://www.codetree.ai/trail-info/novice-low/) |
| 난이도 | 쉬움 |
| 경험치 | 10 XP |

## 문제 설명
4개의 줄에 각 줄마다 4개의 정수가 주어집니다. 줄의 합을 구하는 프로그램을 배열을 사용하여 작성해보세요.

## 입력
각 줄마다 4개의 정수가 공백을 사이에 두고 주어집니다.

## 출력
4개의 줄에 각 줄의 합을 출력합니다.

## 제한 조건
- $0 \le \text{정수} \le 100$

## 시스템 제한
- Time Limit: 1000 ms
- Memory Limit: 64 MiB

# 📌 Code Review 📌

## 01. 기존 풀이
```javascript
let fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");

for (let i = 0; i < 4; i++) {
    const lineList = input[i].trim().split(" ").map(Number);
    let temp = 0;

    for (let j = 0; j < 4; j++) {
        temp += lineList[j];
    }

    console.log(temp);
}
```

## 02. AI 피드백 & 사전지식
- `Array.prototype.reduce` 활용: 배열의 각 요소에 대해 주어진 콜백 함수를 실행하여, 모든 요소를 단 하나의 결과값(누적값)으로 축약하는 `reduce` 메서드를 활용하면 배열 요소의 합을 훨씬 간결하게 구할 수 있다.
- `console.log` 호출 횟수 줄이기: `console.log`를 반복문 안에서 매번 호출하는 것보다, 결과를 배열에 모아둔 뒤 `join("\n")`으로 한 번에 출력하는 것이 입출력(I/O) 성능 면에서 훨씬 유리하다.

## 03. 개선 풀이: 배열 메서드(map, reduce)를 적극 활용
```javascript
const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

// 각 줄을 배열로 변환한 후 reduce로 합을 구하여 결과 배열(results)에 저장
const results = input.map((line) => {
  const numbers = line.trim().split(" ").map(Number);
  return numbers.reduce((acc, cur) => acc + cur, 0);
});

// 한 번에 출력
console.log(results.join("\n"));
```
