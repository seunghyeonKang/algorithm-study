# [[개념]재귀함수를 이용한 피보나치 수](https://www.codetree.ai/trails/complete/curated-cards/intro-fibonacci-using-recursive-function)

| 항목 | 내용 |
|---|---|
| 분류 | Trail |
| 커리큘럼 | [Trail 2 / 재귀함수 / 값을 반환하는 재귀함수](https://www.codetree.ai/trail-info/novice-mid/) |
| 난이도 | 쉬움 |
| 경험치 | 10 XP |

# 문제

피보나치 수열이란 이전 두 항의 합이 그 다음 항이 되는 수열을 의미합니다.

예를 들어 첫 번째 원소를 1, 두 번째 원소도 1이라 하면 그 다음 항은 2, 3, 5, 8 .. 이 됩니다.

$N$번째 피보나치 수를 구하는 프로그램을 작성해보세요. 단, 재귀함수를 이용하여 문제를 해결해주세요.

## 입력
첫째 줄에는 $N$이 주어집니다.

## 제한 조건
- $1 \le N \le 20$

## 출력
$N$번째 피보나치 수를 출력합니다.

## 시스템 제한
- Time Limit: 1000 ms
- Memory Limit: 64 MiB

# 📌 Code Review 📌

## 01. 기존 풀이
```javascript
const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);
// Please Write your code here.

const getFibo = (a, b, i) => {
    if (i <= 2) return 1;
    else if (i === 3) return a + b;
    else return getFibo(b, a + b, i - 1);
}

console.log(getFibo(1, 1, n));
```

## 02. AI 피드백 & 사전지식
- 아래와 같이 첫 번재와 두 번째 항을 기준으로 더 단순하게 정리할 수 있다.

## 03. 개선 풀이
```javascript
const getFibo = (a, b, i) => {
    if (i === 1) return a;
    if (i === 2) return b;
    return getFibo(b, a + b, i - 1);
};
```
