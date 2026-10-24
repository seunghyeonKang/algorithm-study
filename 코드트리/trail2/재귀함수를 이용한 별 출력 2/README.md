# [[테스트]재귀함수를 이용한 별 출력 2](https://www.codetree.ai/trails/complete/curated-cards/test-star-output-with-recursive-function-2)

| 항목 | 내용 |
|---|---|
| 분류 | Trail |
| 커리큘럼 | [Trail 2 / 재귀함수 / 값을 반환하지 않는 재귀함수](https://www.codetree.ai/trail-info/novice-mid/) |
| 난이도 | 보통 |
| 경험치 | 30 XP |

# 문제

정수 n을 입력받아 재귀함수를 이용해 다음 모양대로 별을 출력하는 프로그램을 작성해보세요.

첫 번째 줄부터 차례로 별을 n개, n - 1개, ..., 1개 출력한 뒤, 이어서 다시 1개, 2개, ..., n개 출력합니다. 즉 별의 개수가 n개에서 1개까지 줄어들었다가 다시 n개까지 늘어나며, 모두 2n개의 줄을 출력하게 됩니다.

## 입력
첫 번째 줄에 정수 n이 주어집니다.

## 제한 조건
- 1 <= n <= 100

## 출력
2n개의 줄에 걸쳐 별을 출력합니다. 같은 줄에 있는 별들은 공백을 사이에 두고 출력합니다.

## 시스템 제한
- Time Limit: 1000 ms
- Memory Limit: 64 MiB

# 📌 Code Review 📌

## 01. 기존 풀이
```javascript
const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
let n = Number(input[0]);
// Please Write your code here.

const printText = (num, countdown) => {
    const i = countdown > num ? countdown - num : num - countdown + 1;

    console.log("* ".repeat(i).trim());

    if (countdown > 1) printText(num, countdown - 1);
}

printText(n, n * 2);
```

## 02. AI 피드백 & 사전지식
- 현재 코드도 충분히 정답 처리를 받기에 문제 없지만, 알고리즘 문제 풀이 환경에서는 `console.log`를 재귀 호출 안에서 매번 실행하는 것보다, 출력할 문자열들을 배열에 모아두었다가 마지막에 한 번에 출력하는 것이 입출력 성능 면에서 더 유리하다.

## 03. 다른 풀이
```javascript
const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
let n = Number(input[0]);

const results = [];

const printText = (num, countdown) => {
    const i = countdown > num ? countdown - num : num - countdown + 1;
    
    // 결과를 배열에 담습니다.
    results.push("* ".repeat(i).trim());

    if (countdown > 1) {
        printText(num, countdown - 1);
    }
}

printText(n, n * 2);

// 마지막에 한 번에 출력합니다.
console.log(results.join('\n'));
```
