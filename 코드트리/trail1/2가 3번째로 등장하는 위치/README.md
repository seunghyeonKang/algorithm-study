# [[테스트]2가 3번째로 등장하는 위치](https://www.codetree.ai/trails/complete/curated-cards/test-where-2-appears-3rd)

| 항목 | 내용 |
|---|---|
| 분류 | Trail |
| 커리큘럼 | [Trail 1 / 1차원 배열 / 탐색](https://www.codetree.ai/trail-info/novice-low/) |
| 난이도 | 쉬움 |
| 경험치 | 10 XP |

## 문제 설명
$N$개의 정수가 주어졌을 때, 숫자 `2`가 3번째로 등장하는 위치(1-based index)를 출력하는 프로그램을 작성하세요.

## 입력
- 첫 번째 줄: 정수의 개수 $N$이 주어집니다.
- 두 번째 줄: $N$개의 정수가 공백으로 구분되어 주어집니다.

## 출력
- 첫 번째 줄에 주어진 원소 중 숫자 `2`가 3번째로 등장하는 위치(몇 번째로 주어진 숫자였는지)를 출력합니다.

## 제한 조건
- $3 \le N \le 100$
- $1 \le \text{주어지는 수} \le 100$
- 숫자 `2`는 최소 3개 이상 주어집니다.

## 시스템 조건
- 시간 제한: 1000 ms
- 메모리 제한: 64 MiB

# 📌 Code Review 📌

## 01. 기존 풀이
```javascript
let fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");

const n = Number(input[0]);
const numList = input[1].trim().split(" ").map(Number);

let countTwo = 0;

for (let i = 0; countTwo < 3; i++) {
    if(numList[i] === 2) countTwo++;
    if(countTwo === 3) console.log(i + 1);
}
```

## 02. AI 피드백 & 사전지식
- 반복문 내부의 `if` 문 구조: `countTwo`가 3이 되는 순간 바로 출력을 수행하지만, 조건식(`countTwo < 3`) 검사는 다음 루프 진입 시점에 이루어진다. `break` 문을 활용하면 3번째 2를 찾은 즉시 출력을 하고 반복문을 확실하게 탈출한다.
- `findIndex`: 배열에서 제시한 조건을 만족하는 첫 번째 요소의 인덱스(위치)를 반환하며, 조건에 맞는 요소가 없으면 `-1`을 반환하는 JavaScript 배열 메서드이다.

## 03. 다른 풀이: 배열 메서드(`findIndex` 등) 활용
```javascript
const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const numList = input[1].trim().split(" ").map(Number);

let countTwo = 0;
// findIndex를 활용해 3번째 2가 위치한 index 탐색
const index = numList.findIndex((num) => num === 2 && ++countTwo === 3);

console.log(index + 1);
```
