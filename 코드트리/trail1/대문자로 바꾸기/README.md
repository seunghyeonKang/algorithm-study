# [[챌린지]대문자로 바꾸기](https://www.codetree.ai/trails/complete/curated-cards/challenge-change-to-capital)

| 항목 | 내용 |
|---|---|
| 분류 | Trail |
| 커리큘럼 | [Trail 1 / 2차원 배열 / 2차원 배열 입력](https://www.codetree.ai/trail-info/novice-low/) |
| 난이도 | 쉬움 |
| 경험치 | 10 XP |

## 문제 설명
소문자 알파벳으로 이루어진 5행 3열의 배열이 주어지면 대문자로 바꾸어서 출력하는 프로그램을 작성해보세요.

## 입력
소문자 알파벳으로 이루어진 5행 3열의 배열이 각 문자마다 공백을 사이에 두고 주어집니다.

## 제한 조건
- 배열은 소문자들로 이루어집니다.

## 출력
5행 3열의 배열을 대문자로 출력합니다.

## 시스템 제한
- Time Limit: 1000 ms
- Memory Limit: 128 MiB

# 📌 Code Review 📌

## 01. 기존 풀이
```javascript
let fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");

const alpObj = {
    a: "A", b: "B", c: "C", d: "D", e: "E", f: "F", g: "G", h: "H", i: "I", j: "J", k: "K", l: "L", m: "M", n: "N", o: "O", p: "P", q: "Q", r: "R", s: "S", t: "T", u: "U", v: "V", w: "W", x: "X", y: "Y", z: "Z"
}
const answer = [];

for (let i = 0; i < 5; i++) {
    const line = input[i].trim().split(" ");
    const arr = [];

    for (let j = 0; j < 3; j++) {
        arr.push(alpObj[line[j]]);
    }

    answer.push(arr.join(" "));
}

console.log(answer.join("\n"));
```

## 02. AI 피드백 & 사전지식
- 알파벳 객체 대칭 매핑 대신 내장 메서드 사용: JavaScript 내장 문자열 메서드인 `.toUpperCase()`를 사용하면 코드가 훨씬 간결해지고 오타 위험이 줄어든다.
- 2중 `for` 루프 대신 배열 고차 함수(`map`) 활용: 배열을 순회하며 변환할 때는 `for` 루프와 `.push()` 조합 대신 `.map()` 함수를 사용하면 선언적이고 간결한 코드를 작성할 수 있다.

## 03. 개선 풀이: `.toUpperCase()` 및 `map()` 활용
```javascript
const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

// 각 줄의 문자들을 대문자로 변환 후 공백으로 연결
const answer = input.map(line => 
    line.trim().split(" ").map(char => char.toUpperCase()).join(" ")
);

console.log(answer.join("\n"));
```
