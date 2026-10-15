# [[챌린지]함수를 이용한 합과 소수 판별](https://www.codetree.ai/trails/complete/curated-cards/challenge-use-functions-to-determine-sums-and-decimals)

| 항목 | 내용 |
|---|---|
| 분류 | Trail |
| 커리큘럼 | [Trail 2 / 함수 / 값을 반환하는 함수](https://www.codetree.ai/trail-info/novice-mid/) |
| 난이도 | 보통 |
| 경험치 | 30 XP |

# 문제

정수 $A$와 $B$가 주어지면, $A$ 이상 $B$ 이하의 수 중 소수이면서 모든 자릿수의 합이 짝수인 수의 개수를 구하는 프로그램을 작성해보세요.

이 문제는 각 조건의 판별을 함수로 분리해 작성하는 것을 목표로 합니다. 채점은 출력값만으로 이루어집니다.

## 입력
첫 번째 줄에 정수 $A$와 $B$가 공백을 사이에 두고 주어집니다.

## 제한 조건
- $1 \le A \le B \le 100$

## 시스템 제한
- Time Limit: 1000 ms
- Memory Limit: 64 MiB

## 출력
첫 번째 줄에 조건을 만족하는 수의 개수를 정수 하나로 출력합니다.

# 📌 Code Review 📌

## 01. 기존 풀이
```javascript
const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [A, B] = input[0].split(" ").map(Number);

// Please Write your code here.

const isThatNum = (n) => {
    if (n === 2) return true;

    for (let i = 2; i <= n / 2; i++) {
        if (n % i === 0) return false;
    }
    return true;
}
const isSumDouble = (n) => {
    const sum = String(n).split("").map(Number).reduce((acc, cur) => acc + cur);
    if (sum % 2 === 0) return true;
    else return false;
}

let count = 0;
for (let i = A; i <= B; i++) {
    if (isThatNum(i) && isSumDouble(i)) count++;
}

console.log(count);
```

## 02. AI 피드백 & 사전지식
- `isPrime`, `hasEvenDigitSum`과 같이 함수 및 변수 이름을 직관화시키자.
- 불필요한 `if-else` 간소화: `isSumDouble` 함수에서 `if (sum % 2 === 0) return true; else return false;` 코드는 `return sum % 2 === 0;`으로 한 줄 줄일 수 있다.
- 소수 판별 함수(`isThatNum`)의 예외 처리 보완:
  - 1은 소수가 아니므로, 함수 시작 부분에 `if (n < 2) return false;`를 추가해 주는 것이 안전하다.
  - 소수 판별 시 반복문 조건은 `i <= Math.sqrt(n)`까지만 돌려도 충분하다.

## 03. 개선 풀이: 리팩토링 코드
```javascript
const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [A, B] = input[0].split(" ").map(Number);

// 소수 판별 함수
const isPrime = (n) => {
    if (n < 2) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) return false;
    }
    return true;
};

// 자릿수의 합이 짝수인지 판별하는 함수
const hasEvenDigitSum = (n) => {
    const sum = String(n).split("").map(Number).reduce((acc, cur) => acc + cur, 0);
    return sum % 2 === 0;
};

let count = 0;
for (let i = A; i <= B; i++) {
    if (isPrime(i) && hasEvenDigitSum(i)) {
        count++;
    }
}

console.log(count);
```
