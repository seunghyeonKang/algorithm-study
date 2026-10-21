# [[개념]함수를 이용한 부분 문자열의 위치 구하기](https://www.codetree.ai/trails/complete/curated-cards/intro-find-the-location-of-a-substring-using-a-function)

| 항목 | 내용 |
|---|---|
| 분류 | Trail |
| 커리큘럼 | [Trail 2 / 함수 / 변수의 영역](https://www.codetree.ai/trail-info/novice-mid/) |
| 난이도 | 쉬움 |
| 경험치 | 20 XP |

# 문제

주어진 입력 문자열에서 목적 문자열이 처음 등장하는 시작 인덱스를 구하는 코드를 작성해보세요. 인덱스는 0부터 시작한다고 가정합니다.

단, 일치 여부를 판단하는 일은 함수로 분리해 주세요. 입력 문자열의 시작 위치 하나를 인자로 받아 그 위치에서 목적 문자열이 시작하는지를 참 또는 거짓으로 반환하는 함수를 만들고, 앞쪽 위치부터 차례로 그 함수를 호출해 답을 찾습니다. 두 문자열은 전역 변수에 두면 함수 인자로 따로 넘기지 않아도 됩니다.

## 입력

첫 번째 줄에는 길이 $N$인 입력 문자열이 주어지고,

두 번째 줄에는 길이 $M$인 목적 문자열이 주어집니다.

## 제한 조건

* $1 \le M \le N \le 1000$
* 두 문자열은 모두 알파벳 대소문자와 숫자로 이루어져 있습니다.

## 시스템 제한

* Time Limit: 1000 ms
* Memory Limit: 64 MiB

## 출력

첫 번째 줄에 목적 문자열이 입력 문자열에서 처음 등장하는 시작 인덱스를 출력합니다. 목적 문자열이 입력 문자열에 나타나지 않으면 -1을 출력합니다.

# 📌 Code Review 📌

## 01. 기존 풀이
```javascript
const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const text = input[0];
const pattern = input[1];

// Please Write your code here.

const isCorrect = (i) => {
    return text.slice(i, i + pattern.length) === pattern;
}

let answer = -1;
for (let i = 0; i <= text.length - pattern.length; i++) {
    if (isCorrect(i)) {
        answer = i;
        break;
    }
}

console.log(answer);
```

## 02. AI 피드백 & 사전지식
- 요구사항에 맞게 정확히 구현했다.
- 시간 및 공간 복잡도: $N$과 $M$의 최대 크기가 1000이므로, 완전 탐색(Brute Force) 방식을 사용해도 연산 횟수가 최대 약 $10^6$회 이하로 제한 시간(1000ms) 내에 안전하게 통과한다.
