# [[테스트]특정 원소들의 합](https://www.codetree.ai/trails/complete/curated-cards/test-sum-of-specific-elements)

| 항목 | 내용 |
|---|---|
| 분류 | Trail |
| 커리큘럼 | [Trail 1 / 2차원 배열 / 2차원 배열 입력](https://www.codetree.ai/trail-info/novice-low/) |
| 난이도 | 쉬움 |
| 경험치 | 10 XP |

## 문제 설명
$4 \times 4$ 크기의 격자에 정수가 하나씩 주어진다. 이 정수들 중 다음 그림에서 색칠된 칸들에 해당하는 정수의 합을 2차원 배열을 통해 구하는 프로그램을 작성하시오.

<img width="1800" height="1200" alt="image" src="https://github.com/user-attachments/assets/6076b89b-e9fc-48a4-8452-b379ca410b3b" />


## 입력
첫 번째 줄부터 4개의 줄에 걸쳐, 한 줄에 4개씩 정수가 공백을 두고 주어집니다.

## 출력
첫 번째 줄에 색칠된 칸에 해당하는 정수들의 합을 출력합니다.

## 제한 조건
- $1 \le \text{주어지는 정수} \le 100$

## 시스템 제한
- **Time Limit:** 1000 ms
- **Memory Limit:** 64 MiB

# 📌 Code Review 📌

## 01. 기존 풀이
```javascript
let fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");

const numArr = [];
for (let i = 0; i < 4; i++) {
    numArr.push(input[i].trim().split(" ").map(Number));
}

let sum = 0;
for (let i = 0; i < 4; i++) {
    for (let j = 0; j < i + 1; j++) {
        sum += numArr[i][j];
    }
}

console.log(sum);
```

## 02. AI 피드백 & 사전지식
- 배열 생성 없이 바로 계산하기: 2차원 배열(`numArr`)에 저장하는 과정 없이 입력을 읽어오는 즉시 더해주면 코드가 한층 더 간결해질 수도 있다.

## 03. 개선 풀이: 기존 풀이 리팩토링
```javascript
const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

let sum = 0;
for (let i = 0; i < 4; i++) {
    const row = input[i].trim().split(" ").map(Number);
    for (let j = 0; j <= i; j++) {
        sum += row[j];
    }
}

console.log(sum);
```
