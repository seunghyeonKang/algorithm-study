# [[개념]짝수이면서 합이 5의 배수인 수](https://www.codetree.ai/trails/complete/curated-cards/intro-an-even-number-with-a-multiple-of-5-in-the-sum)

| 항목 | 내용 |
|---|---|
| 분류 | Trail |
| 커리큘럼 | [Trail 2 / 함수 / 값을 반환하는 함수](https://www.codetree.ai/trail-info/novice-mid/) |
| 난이도 | 쉬움 |
| 경험치 | 10 XP |

## 문제 설명
2자리 숫자 $n$이 주어졌을 때, $n$이 짝수이면서 각 자리 숫자의 합이 5의 배수이면 "Yes"를, 아니라면 "No"를 출력하는 프로그램을 작성해 보세요. 단, 함수를 이용하여 문제를 해결해 주세요.

## 입력
첫 번째 줄에 정수 $n$이 주어집니다.

## 출력
첫 번째 줄에 "Yes"와 "No" 중에 해당하는 값을 출력합니다.

## 제한 조건
* $9 < n < 100$

## 시스템 제한
* Time Limit: 1000 ms
* Memory Limit: 64 MiB

# 📌 Code Review 📌

## 01. 기존 풀이
```javascript
const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);
// Please Write your code here.

const getAnswer = (a) => {
    let sum = String(a).split("").map(Number).reduce((acc, cur) => acc + cur, 0);
    if (a % 2 === 0 && sum % 5 === 0) return "Yes";
    else return "No";
}

console.log(getAnswer(n));
```

## 02. AI 피드백 & 사전지식
- 산술 연산으로 자릿수 합 구하기: 이 문제는 제한 조건이 두 자리 자연수로 고정되어 있다. 따라서 굳이 문자열 변환 및 배열 생성을 거치지 않고 간단한 수학 연산으로 처리하면 메모리 및 속도 면에서 더 효율적이다.
- 조건문 삼항 연산자 단축: `if ... else` 문 대신 삼항 연산자를 활용하면 코드를 조금 더 간결하게 줄일 수 있다.

## 03. 개선 풀이: 리팩토링 코드
```javascript
const fs = require("fs");
const input = fs.readFileSync(0).toString().trim();
const n = Number(input);

const isEvenAndSumDivisibleByFive = (num) => {
    // 10의 자리 + 1의 자리
    const digitSum = Math.floor(num / 10) + (num % 10); 
    
    // 짝수 조건 && 5의 배수 조건
    return (num % 2 === 0 && digitSum % 5 === 0) ? "Yes" : "No";
};

console.log(isEvenAndSumDivisibleByFive(n));
```
