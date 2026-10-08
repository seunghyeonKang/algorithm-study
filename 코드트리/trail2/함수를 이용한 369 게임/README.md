# [[개념]함수를 이용한 369 게임](https://www.codetree.ai/trails/complete/curated-cards/intro-369-games-using-functions)

| 항목 | 내용 |
|---|---|
| 분류 | Trail |
| 커리큘럼 | [Trail 2 / 함수 / 값을 반환하는 함수](https://www.codetree.ai/trail-info/novice-mid/) |
| 난이도 | 보통 |
| 경험치 | 30 XP |

## 문제 설명
정수 $A$와 $B$가 주어지면, $A$ 이상 $B$ 이하의 수들 중 숫자 '3', '6', '9' 중 하나가 들어있거나 그 수 자체가 3의 배수인 수의 개수를 세는 프로그램을 작성하세요. 

**단, 함수를 이용하여 문제를 해결해야 합니다.**

## 입력
첫 번째 줄에 정수 $A$와 $B$가 공백을 사이에 두고 주어집니다.

## 출력
첫 번째 줄에 위의 조건을 만족하는 수의 개수를 세어 출력합니다.

## 제한 조건
- $1 \le A \le B \le 1\,000\,000$

## 시스템 제한
- Time Limit: 1000 ms
- Memory Limit: 64 MiB

# 📌 Code Review 📌

## 01. 기존 풀이
```javascript
const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const [A, B] = input[0].split(" ").map(Number);

// Please Write your code here.

const getNumberCount = (a, b) => {
    let count = 0;

    for (let i = a; i <= b; i++) {
        const isIncludes = String(i).split("").some((n) => n === "3" || n === "6" || n === "9");
        if (i % 3 ===0 || isIncludes) count++;
    }

    return count;
}

console.log(getNumberCount(A, B));
```

## 02. AI 피드백 & 사전지식
- 현재 `String(i)`로 문자열 생성, `.split("")`로 문자열을 쪼개어 새로운 배열 생성, `.some()`으로 배열 탐색 및 콜백 함수 호출, 3단계를 거친다. $B = 1,000,000$일 경우 최대 100만 번 동안 배열 생성과 메모리 할당이 반복되어 가비지 컬렉션(GC) 부하 및 실행 시간 증가로 이어질 수 있다.

## 03. 개선 풀이: 숫자를 문자로 순회하며 직접 확인
```javascript
const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").trim().split("\n");
const [A, B] = input[0].split(" ").map(Number);

// 특정 숫자가 조건(3의 배수이거나 3, 6, 9 포함)을 만족하는지 검사하는 함수
const is369Number = (num) => {
    // 1. 3의 배수인지 먼저 확인 (가장 빠름)
    if (num % 3 === 0) return true;

    // 2. 3의 배수가 아니라면 문자열로 변환하여 3, 6, 9 포함 여부 확인
    const str = String(num);
    return str.includes("3") || str.includes("6") || str.includes("9");
};

const getNumberCount = (a, b) => {
    let count = 0;

    for (let i = a; i <= b; i++) {
        if (is369Number(i)) {
            count++;
        }
    }

    return count;
};

console.log(getNumberCount(A, B));
```
