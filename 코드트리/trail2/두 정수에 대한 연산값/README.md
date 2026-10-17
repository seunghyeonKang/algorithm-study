# [[챌린지]두 정수에 대한 연산값](https://www.codetree.ai/trails/complete/curated-cards/challenge-operational-values-for-two-integers)

| 항목 | 내용 |
|---|---|
| 분류 | Trail |
| 커리큘럼 | [Trail 2 / 함수 / Call by value / Call by reference](https://www.codetree.ai/trail-info/novice-mid/) |
| 난이도 | 쉬움 |
| 경험치 | 10 XP |

# 문제
10XP | 평균 6분 | 79% 정답률 | 총 제출 3,195회

두 개의 정수 $a, b$가 주어지면 두 수 중 큰 수에는 25를 더하고 작은 수에는 2를 곱하여 저장한 후 출력하는 프로그램을 작성해보세요.
단, $a, b$를 인자로 하는 함수를 작성하여 값을 수정하고 출력은 함수 호출 이후에 진행하도록 합니다.

## 입력
첫 번째 줄에 정수 $a, b$가 공백을 사이에 두고 주어집니다.

## 제한 조건
* $1 \le a, b \le 200$
* $a \neq b$

## 출력
첫 번째 줄에 두 정수에 해당하는 값을 공백을 사이에 두고 출력합니다.

## 시스템 제한
* Time Limit: 1000 ms
* Memory Limit: 64 MiB

# 📌 Code Review 📌

## 01. 기존 풀이
```javascript
const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
let [a, b] = input[0].split(" ").map(Number);
// Please Write your code here.

const getAnswer = (m, n) => {
    if (m >= n) {
        m += 25;
        n *= 2
    } else {
        n += 25;
        m *= 2
    }
    return [m, n];
}

[a, b] = getAnswer(a, b);

console.log(a, b);
```

## 02. AI 피드백 & 사전지식
- 문제 조건에서 $a \neq b$ (서로 다른 수)라고 보장했기 때문에 `m >= n` 조건문에서 등호(`=`)가 포함되어 있어도 실제로는 `>`와 `<`로 정확히 갈리게 된다.
- 정확한 조건 분기, 함수 설계와 값 반환, 입출력 처리 등 적절하게 작성했다.
