# [[챌린지]두 수의 거듭제곱](https://www.codetree.ai/trails/complete/curated-cards/challenge-two-numbers-of-squares)

| 항목 | 내용 |
|---|---|
| 분류 | Trail |
| 커리큘럼 | [Trail 2 / 함수 / 값을 반환하는 함수](https://www.codetree.ai/trail-info/novice-mid/) |
| 난이도 | 쉬움 |
| 경험치 | 10 XP |

두 정수 $a, b$의 값이 주어지면 $a^b$의 값을 출력하는 프로그램을 작성해보세요. 이때 $a, b$를 전달받아 $a^b$를 출력하는 함수를 작성하고, 주어진 $a, b$를 함수로 전달하여 출력합니다.

## 입력
첫 번째 줄에 정수 $a, b$가 공백을 사이에 두고 주어집니다.

## 제한 조건
* $1 \le a, b \le 9$

## 출력
첫 번째 줄에 $a^b$의 값을 출력합니다.

## 시스템 제한
* Time Limit: 1000 ms
* Memory Limit: 192 MiB

# 📌 Code Review 📌

## 01. 기존 풀이
```javascript
const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split(" ");
const [a, b] = input.map(Number);
// Please Write your code here. 

const getAnswer = (x, y) => {
    return x ** y;
}
console.log(getAnswer(a, b));
```

## 02. AI 피드백 & 사전지식
- 입력 공백이 불규칙할 수 있는 환경을 대비해 `.split(/\s+/)`를 사용하면 공백이나 줄바꿈을 더 유연하게 처리할 수 있다. (물론 이 문제의 입력 조건은 단순하므로 현재 코드인 `.split(" ")`으로도 충분히 통과한다.)
