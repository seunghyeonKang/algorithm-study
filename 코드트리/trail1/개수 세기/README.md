# [[개념]개수 세기](https://www.codetree.ai/trails/complete/curated-cards/intro-count-numbers)

| 항목 | 내용 |
|---|---|
| 분류 | Trail |
| 커리큘럼 | [Trail 1 / 1차원 배열 / 탐색](https://www.codetree.ai/trail-info/novice-low/) |
| 난이도 | 쉬움 |
| 경험치 | 10 XP |

## 문제 설명
정수 $N$이 주어지면 그 횟수만큼 수가 주어진다. 그 중 $M$이 몇 번 등장하는지 구해 출력하는 프로그램을 작성하시오.

## 입력
- 첫 번째 줄에 정수 $N$과 $M$이 공백을 사이에 두고 주어진다.
- 두 번째 줄에 $N$개만큼 정수가 주어진다.

## 제한 조건
- $1 \le N \le 100$
- $1 \le M \le 99$
- $1 \le \text{주어지는 정수} \le 99$

## 출력
- 첫 번째 줄에 $M$이 등장하는 횟수를 출력한다.

## 제한
- Time Limit: 1000 ms
- Memory Limit: 64 MiB


# 📌 Code Review 📌

## 01. 기존 풀이
```javascript
let fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");

const n = input[0].split(" ")[0];
const m = input[0].split(" ")[1];
const arr = input[1].split(" ");

let answer = 0;

for (let i = 0; i < n; i++) {
    if(arr[i] === m) answer++;
}

console.log(answer);
```

## 02. AI 피드백 & 사전지식
- 문자열(`String`)과 숫자(`Number`) 타입의 혼용: 명시적으로 `Number(n)` 또는 `parseInt(n)`을 통해 숫자로 변환해 주는 것이 안전하다.
- `split(" ")` 연속 호출 최소화: 구조 분해 할당으로 더 깔끔하게 작성하자.
- `filter`: 배열의 요소 중 조건을 만족하는(`true`인) 요소들만 따로 모아 새로운 배열로 만들어 반환하는 메서드이다.

## 03. 리팩토링 코드: `filter` 활용
```javascript
const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const [n, m] = input[0].split(" ");
const arr = input[1].split(" ");

// m과 일치하는 요소만 남긴 배열의 길이를 구함
const answer = arr.filter((val) => val === m).length;

console.log(answer);
```
