# [[개념]정수의 최솟값](https://www.codetree.ai/trails/complete/curated-cards/intro-minimum-value-of-an-integer)

| 항목 | 내용 |
|---|---|
| 분류 | Trail |
| 커리큘럼 | [Trail 2 / 함수 / 값을 반환하는 함수](https://www.codetree.ai/trail-info/novice-mid/) |
| 난이도 | 쉬움 |
| 경험치 | 10 XP |

## 문제 설명
세 정수 $a, b, c$가 주어지면 그 수를 전달받아 최솟값을 구해 출력하는 프로그램을 작성하세요. 
이때 주어진 세 정수 $a, b, c$를 전달받아 최솟값을 구하는 함수를 작성하고, 주어진 $a, b, c$를 함수로 전달하여 출력합니다.

## 입력
첫 번째 줄에 정수 $a, b, c$가 공백을 사이에 두고 주어집니다.

## 출력
첫 번째 줄에 주어진 정수 중 최솟값을 출력합니다.

## 제한 조건
* $-100 \le a, b, c \le 100$

## 시스템 제한
* **Time Limit:** 1000 ms
* **Memory Limit:** 64 MiB

# 📌 Code Review 📌

## 01. 기존 풀이
```javascript
const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

let [a, b, c] = input[0].split(" ").map(Number);

// Please Write your code here.
const getMinNumber = (x, y, z) => {
    return Math.min(x, y, z);
}

console.log(getMinNumber(a, b, c));
```

## 02. AI 피드백 & 사전지식
- 구조 분해 할당 단순화: 입력이 단 한 줄로 들어오는 문제이므로, `split('\n')`을 거치지 않고 바로 처리할 수도 있다.
  - `/ ... /`: 정규표현식의 시작과 끝을 나타내는 기호이다.
  - `\s`: 공백(Space) 문자를 의미하는 특수 클래스이다. 스페이스(`' '`), 탭(`\t`), 줄바꿈(`\n`), 개행(`\r`) 등을 모두 포함한다.
  - `+`: 앞의 패턴이 1개 이상 연속으로 등장함을 의미하는 수량자(Quantifier)이다.

## 03. 다른 풀이: 조건 분기 로직 구현 (학습용)
```javascript
let [a, b, c] = fs.readFileSync(0).toString().trim().split(/\s+/).map(Number);

const getMinNumber = (x, y, z) => {
    let min = x;
    if (y < min) min = y;
    if (z < min) min = z;
    return min;
}

console.log(getMinNumber(a, b, c));
```
