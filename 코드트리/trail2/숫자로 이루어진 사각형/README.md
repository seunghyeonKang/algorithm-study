# [[챌린지]숫자로 이루어진 사각형](https://www.codetree.ai/trails/complete/curated-cards/challenge-rectangle-with-a-number)

| 항목 | 내용 |
|---|---|
| 분류 | Trail |
| 커리큘럼 | [Trail 2 / 함수 / 값을 반환하지 않는 함수](https://www.codetree.ai/trail-info/novice-mid/) |
| 난이도 | 쉬움 |
| 경험치 | 10 XP |

## 문제 설명
정수 $N$의 값이 주어지면 일의자리 숫자로 이루어진 $N \times N$ 모양 정사각형을 출력하는 프로그램을 작성해보세요. 이때 정수 $N$을 전달받아 일의 자리 숫자로 이루어진 정사각형을 출력하는 함수를 작성하고, 주어진 $N$을 함수로 전달하여 출력합니다.

## 입력
첫 번째 줄에 정수 $N$이 주어진다.

## 출력
첫 번째 줄부터 $N \times N$ 모양의 정사각형을 출력한다. 각 칸에는 1부터 시작하여 왼쪽에서 오른쪽, 위에서 아래 방향으로 1씩 증가하는 수를 채우며, 한 줄의 정수들은 공백으로 구분하여 출력한다. 단, 9 다음에는 다시 1이 나와야 한다.

## 제한 조건
- $1 \le N \le 100$

## 시스템 제한
- Time Limit: 1000 ms
- Memory Limit: 128 MiB

# 📌 Code Review 📌

## 01. 기존 풀이
```javascript
const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const N = Number(input[0]);

let answer = "";
let tempNum = 1;

for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
        answer += tempNum +  " ";
        if (tempNum >= 9) tempNum = 1;
        else tempNum++;
    }
    answer = answer.trim();
    answer += "\n";
}

console.log(answer.trim());
```

## 02. AI 피드백 & 사전지식
- 함수 작성 요구사항 확인: 문제를 제대로 읽자!!
- 순환 로직 모듈러 연산자(%) 활용: `if (tempNum >= 9) tempNum = 1; else tempNum++;` 대신 `(cnt % 9) + 1`과 같은 모듈러 연산식을 활용하면 코드가 훨씬 간결해진다.
- `answer = answer.trim()`으로 인한 각 줄 끝 공백 처리 이슈: `trim()` 대신 배열의 `join(" ")`을 활용하거나 줄바꿈 전에만 처리해 주는 것이 안전하다.

## 03. 개선 풀이: 모듈러 연산을 활용한 리팩토링 코드
```javascript
const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const N = Number(input[0]);

function printSquare(n) {
    let result = [];
    let num = 0; // 0부터 시작해서 (num % 9) + 1 로 1~9 순환

    for (let i = 0; i < n; i++) {
        let row = [];
        for (let j = 0; j < n; j++) {
            row.push((num % 9) + 1);
            num++;
        }
        result.push(row.join(" "));
    }

    console.log(result.join("\n"));
}

printSquare(N);
```
