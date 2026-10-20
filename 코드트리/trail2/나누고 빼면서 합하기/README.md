# [[챌린지]나누고 빼면서 합하기](https://www.codetree.ai/trails/complete/curated-cards/challenge-divide-and-subtract-and-add-up)

| 항목 | 내용 |
|---|---|
| 분류 | Trail |
| 커리큘럼 | [Trail 2 / 함수 / 변수의 영역](https://www.codetree.ai/trail-info/novice-mid/) |
| 난이도 | 쉬움 |
| 경험치 | 20 XP |

# 문제

$N$개의 원소로 이루어진 수열 $A$가 주어지고, 정수 $M$이 주어집니다.

처음 주어진 $M$에서 시작하여 $M$이 1이 될 때까지, $M$이 홀수면 1을 빼고 짝수면 2로 나누는 것을 반복합니다. 이 과정에서 거쳐 간 모든 $M$에 대하여 $A$의 $M$번째 원소를 더한 값을 출력하는 프로그램을 작성해보세요.

처음 주어진 $M$과 마지막 값인 1에 대한 원소도 모두 더합니다. 따라서 처음부터 $M$이 1이면 더 이상 반복하지 않고 $A$의 첫 번째 원소만 더한 값이 답이 됩니다.

단, 함수를 이용하여 문제를 해결해주세요.

## 입력

첫 번째 줄에 정수 $N$과 $M$이 공백을 사이에 두고 주어집니다.

두 번째 줄에 $N$개의 원소로 이루어진 수열 $A$가 주어집니다. 모든 수열의 원소는 공백을 사이에 두고 있습니다.

## 제한 조건

* $1 \le M \le N \le 100$
* $1 \le A_i \le 100 \; (1 \le i \le N)$

## 시스템 제한

* Time Limit: 1000 ms
* Memory Limit: 64 MiB

## 출력

첫 번째 줄에 거쳐 간 모든 $M$에 대한 $A_M$의 합을 출력합니다.

# 📌 Code Review 📌

## 01. 기존 풀이
```javascript
const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
const [n, m] = input[0].split(" ").map(Number);
const A = input[1].split(" ").map(Number);
// Please Write your code here.

const getSum = (num, arr) => {
    let sum = arr[0];

    while (num !== 1) {
        sum += arr[num - 1];
        if (num % 2 === 0) num /= 2;
        else num -= 1;
    }

    return sum;
}

console.log(getSum(m, A));
```

## 02. AI 피드백 & 사전지식
- `sum`을 0에서 시작하고, 반복문 안에서 **현재 값 추가 $\rightarrow$ 1인지 확인(종료) $\rightarrow$ 짝수/홀수 분기** 순서로 명확하게 작성하면 코드가 훨씬 직관적이고 자연스러워진다.

## 03. 다른 풀이
```javascript
const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
const [n, m] = input[0].split(" ").map(Number);
const A = input[1].split(" ").map(Number);

const getSum = (num, arr) => {
    let sum = 0;

    while (true) {
        // 1. 현재 M번째 원소를 합에 더함
        sum += arr[num - 1];
        
        // 2. M이 1이 되었다면 반복 종료
        if (num === 1) break;
        
        // 3. 짝수와 홀수 조건에 따라 M 갱신
        if (num % 2 === 0) {
            num /= 2;
        } else {
            num -= 1;
        }
    }

    return sum;
};

console.log(getSum(m, A));
```
