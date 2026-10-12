# [[챌린지]사칙연산 함수](https://www.codetree.ai/trails/complete/curated-cards/challenge-quadratic-operations-function)

| 항목 | 내용 |
|---|---|
| 분류 | Trail |
| 커리큘럼 | [Trail 2 / 함수 / 값을 반환하는 함수](https://www.codetree.ai/trail-info/novice-mid/) |
| 난이도 | 보통 |
| 경험치 | 30 XP |

# 문제
각 사칙연산에 해당하는 총 4개의 함수를 작성하고 정수의 연산식이 주어지면 적절한 함수를 호출하여 4칙연산의 연산결과를 출력하는 프로그램을 작성해보세요. 단, '/'의 결과는 정수 부분만 출력하고, 사칙연산자 이외의 문자가 주어지는 경우에는 `False`를 출력합니다.

## 입력

첫 번째 줄에 연산식을 나타내는 $a$, $o$, $c$가 각각 순서대로 공백을 사이에 두고 주어집니다. $a$, $c$는 정수값이며, $o$는 문자로 주어집니다. $o$가 '+', '-', '/', '*' 중에 하나로 주어지면 사칙 연산을 수행해야만 합니다.

## 제한 조건

* $1 \le a, c \le 100$
* $o$는 공백이 아닌 단일 문자로 주어집니다.

## 출력

첫 번째 줄에 `a o c = 연산결과` 형태로 출력합니다. 단, $o$가 사칙연산자(+, -, *, /)가 아니면 `False`를 출력합니다.

## 시스템 제한

* Time Limit: 1000 ms
* Memory Limit: 64 MiB

# 📌 Code Review 📌

## 01. 기존 풀이
```javascript
const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

let [a, o, c] = input[0].split(" ");
a = Number(a);
c = Number(c);
// Please Write your code here.

const calPlus = (x, y) => {
    return x + y;
}
const calMinus = (x, y) => {
    return x - y;
}
const calMultiplication = (x, y) => {
    return x * y;
}
const calDivision = (x, y) => {
    return parseInt(x / y);
}

const calObj = {
    '+' : calPlus,
    '-' : calMinus,
    '*' : calMultiplication,
    '/' : calDivision,
}


if (calObj[o]) console.log(input[0], "=", calObj[o](a, c));
else console.log("False");
```

## 02. AI 피드백 & 사전지식
- `parseInt`: 원래 문자열을 파싱하는 함수이므로, 숫자의 소수점을 버릴 때는 수학적 연산에 더 적합한 `Math.trunc(x / y)`(소수점 버림)나 `Math.floor(x / y)`를 사용하는 것이 관례상 더 명확하다.
