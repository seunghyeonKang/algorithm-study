# [[개념]두 정수 값 교환하기](https://www.codetree.ai/trails/complete/curated-cards/intro-to-exchange-two-integer-values)

| 항목 | 내용 |
|---|---|
| 분류 | Trail |
| 커리큘럼 | [Trail 2 / 함수 / Call by value / Call by reference](https://www.codetree.ai/trail-info/novice-mid/) |
| 난이도 | 쉬움 |
| 경험치 | 10 XP |

# 문제

두 정수 $n$과 $m$이 주어지면, 두 변수에 담긴 값을 서로 교환하여 출력하는 프로그램을 작성해보세요.

단, 값을 교환하는 일은 반드시 함수로 처리해야 합니다. 주어진 두 정수를 인자로 받는 함수를 만들고, 함수 호출이 끝난 시점에 두 변수가 서로 교환된 값을 담고 있도록 합니다. 출력은 함수 호출 이후에 진행합니다.

교환한 값을 호출한 곳까지 전달하는 방식은 언어에 따라 다릅니다. 인자를 참조나 포인터로 넘길 수 있는 언어라면 그 방식으로 원본 변수를 직접 바꾸고, 그럴 수 없는 언어라면 교환한 두 값을 반환받아 원래 변수에 다시 담아도 됩니다.

## 입력

첫 번째 줄에 정수 $n$과 $m$이 공백을 사이에 두고 주어집니다.

## 제한 조건

* $1 \le n, m \le 100$

## 시스템 제한

* Time Limit: 1000 ms
* Memory Limit: 64 MiB

## 출력

첫 번째 줄에 교환한 두 값을 공백을 사이에 두고 출력합니다.

# 📌 Code Review 📌

## 01. 기존 풀이
```javascript
const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const [n, m] = input[0].split(" ").map(Number);
// Please write your code here.

const changeNum = (a, b) => {
    [a, b] = [b, a];

    return [a, b];
}

console.log(...changeNum(n, m));
```

## 02. AI 피드백 & 사전지식
- 문제 요구사항 부합 여부: 현재 작성한 코드도 정답을 출력하지만, 원본 변수에 값을 다시 재할당해 주는 구조로 작성하면 문제의 의도에 더 완벽하게 부합할 수 있다.

## 03. 개선 풀이: 기존 코드 리팩토링
```javascript
const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
let [n, m] = input[0].split(" ").map(Number); // const 대신 let 사용

const changeNum = (a, b) => {
    return [b, a];
};

// 반환받아 원래 변수에 다시 담기
[n, m] = changeNum(n, m);

console.log(n, m);
```
