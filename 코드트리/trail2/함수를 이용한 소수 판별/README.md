# [[개념]함수를 이용한 소수 판별](https://www.codetree.ai/trails/complete/curated-cards/intro-decimal-decisions-using-functions)

| 항목 | 내용 |
|---|---|
| 분류 | Trail |
| 커리큘럼 | [Trail 2 / 함수 / 값을 반환하는 함수](https://www.codetree.ai/trail-info/novice-mid/) |
| 난이도 | 쉬움 |
| 경험치 | 10 XP |

## 문제 설명
정수 $A$와 $B$가 주어지면, $A$ 이상 $B$ 이하 소수들의 합을 구해주는 프로그램을 작성해보세요. 
**단, 함수를 이용하여 문제를 해결해주세요.**

## 입력
첫 번째 줄에 정수 $A$와 $B$가 공백을 사이에 두고 주어집니다.

## 출력
첫 번째 줄에 $A$에서 $B$ 사이 소수들의 합을 출력합니다.

## 제한 조건
* $2 \le A \le B \le 100$

## 시스템 제한
* Time Limit: 1000 ms
* Memory Limit: 64 MiB

# 📌 Code Review 📌

## 01. 기존 풀이
```javascript
const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [A, B] = input[0].split(" ").map(Number);

// Please Write your code here.

const getSum = (a, b) => {
    let sum = 0;
    for (let i = a; i <= b; i++) {
        // 2 또는 3의 경우
        if (i === 2 || i === 3) sum += i;

        // 4 이상인 경우
        let isCollect = true;
        for (let j = 2; j < i / 2; j++) {
            if (i % j === 0) {
                isCollect = false;
                break;
            }
        }
        if (isCollect) sum += i;
    }

    return sum;
}

console.log(getSum(A, B));
```

## 02. AI 피드백 & 사전지식
- 2와 3이 중복으로 더해지는 버그가 있다.
- 단일 책임 원칙: 소수 판별 함수를 분리하자.
- 소수 판별 최적화: $\sqrt{N}$까지 탐색하자.

## 03. 개선 풀이: 리팩토링 코드
```javascript
const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [A, B] = input[0].split(" ").map(Number);

// 1. 단일 수가 소수인지 판별하는 함수
const isPrime = (n) => {
    if (n < 2) return false;
    // Math.sqrt(n)까지만 확인
    for (let i = 2; i * i <= n; i++) {
        if (n % i === 0) return false;
    }
    return true;
};

// 2. A부터 B까지의 소수 합을 구하는 함수
const getSum = (a, b) => {
    let sum = 0;
    for (let i = a; i <= b; i++) {
        if (isPrime(i)) {
            sum += i;
        }
    }
    return sum;
};

console.log(getSum(A, B));
```
