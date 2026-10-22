# [[챌린지]재귀함수를 이용한 별 출력](https://www.codetree.ai/trails/complete/curated-cards/challenge-star-output-with-recursive-function)

| 항목 | 내용 |
|---|---|
| 분류 | Trail |
| 커리큘럼 | [Trail 2 / 재귀함수 / 값을 반환하지 않는 재귀함수](https://www.codetree.ai/trail-info/novice-mid/) |
| 난이도 | 쉬움 |
| 경험치 | 10 XP |

# 문제

1번째 줄부터 N번째 줄까지, i번째 줄에 별 문자 `*`를 정확히 i개씩 출력하는 프로그램을 작성해보세요. 단, 재귀함수를 이용해 출력해주세요.

## 입력
첫 번째 줄에 정수 N이 주어집니다.

## 제한 조건
- 1 <= N <= 100

## 출력
총 N개의 줄을 출력합니다. i번째 줄에는 별 문자 `*`가 정확히 i개 있어야 합니다.

## 시스템 제한
- Time Limit: 1000 ms
- Memory Limit: 128 MiB

# 📌 Code Review 📌

## 01. 기존 풀이
```javascript
const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
let n = Number(input[0]);
// Please Write your code here.

const func = (i, N) => {
    console.log("*".repeat(i));
    if (i < N) func(i + 1, N);
}

func(1, n);
```

## 02. AI 피드백 & 사전지식
- 재귀 구조와 종료 조건을 명확하게 구현했다.
- 문제의 제한 조건인 $1 \le N \le 100$ 범위와 시간 제한(1000 ms) 내에서 성능 문제 없이 원활하게 동작한다.
