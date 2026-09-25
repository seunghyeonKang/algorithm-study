# [[챌린지]연속부분수열일까](https://www.codetree.ai/trails/complete/curated-cards/challenge-contiguous-array-or-not)

| 항목 | 내용 |
|---|---|
| 분류 | Trail |
| 커리큘럼 | [Trail 1 / 1차원 배열 / 탐색](https://www.codetree.ai/trail-info/novice-low/) |
| 난이도 | 어려움 |
| 경험치 | 20 XP |

## 문제 설명
$N_1$개의 원소로 이루어져 있는 수열 $A$의 정보와, $N_2$개의 원소로 이루어져 있는 수열 $B$의 정보가 주어졌을 때 수열 $B$가 수열 $A$의 연속부분수열인지를 판단하는 프로그램을 작성해보세요.

수열 $B$가 수열 $A$의 원소들을 연속하게 뽑았을 때 나올 수 있는 수열이라면 연속부분수열이라 부릅니다.

예를 들어 수열 $A$가 `[1, 5, 2, 6]`일 때 수열 $B$가 `[5, 2]`라면 수열 $B$는 수열 $A$의 연속부분수열이지만, 만약 수열 $B$가 `[5, 6]`이라면 연속부분수열이 아닙니다.

## 입력
- **첫 번째 줄**: 수열 $A$의 원소의 개수를 나타내는 $N_1$과 수열 $B$의 원소의 개수를 나타내는 $N_2$값이 각각 공백을 사이에 두고 주어집니다.
- **두 번째 줄**: 수열 $A$에 해당하는 $N_1$개의 원소가 공백을 사이에 두고 주어집니다.
- **세 번째 줄**: 수열 $B$에 해당하는 $N_2$개의 원소가 공백을 사이에 두고 주어집니다.

## 출력
- 수열 $B$가 수열 $A$의 연속부분수열이라면 `Yes`, 아니라면 `No`를 출력합니다.

## 제한 조건
- $1 \le N_1, N_2 \le 100$
- $1 \le \text{each element} \le 100$

## 시스템 제한
- **Time Limit**: $1000\text{ ms}$
- **Memory Limit**: $64\text{ MiB}$

# 📌 Code Review 📌

## 01. 기존 풀이
```javascript
let fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");

const [a, b] = input[0].trim().split(" ").map(Number);
const arrA = input[1].trim().split(" ").map(Number);
const arrB = input[2].trim().split(" ").map(Number);

let pointer = 0;
let answer = "No";

for (let i = 0; i < a; i++) {
    if (arrA[i] === arrB[pointer]) {
        pointer++;
        if (pointer === b) {
            answer = "Yes";
            break;
        }
    } else {
        pointer = 0;
    }
}

console.log(answer);
```

## 02. AI 피드백 & 사전지식
- 수열 $A$: [1, 5, 5, 2, 6]   수열 $B$: [5, 5, 2]인 경우에는 연속 수열 검사를 놓치고 `false`가 나온다.
- $N_1, N_2 \le 100$으로 제약 조건이 매우 작기 때문에, 완전 탐색으로 확인해도 충분히 통과할 수 있다.

## 03. 개선 풀이: 이중 반복문 활용
```javascript
let fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");

const [a, b] = input[0].trim().split(" ").map(Number);
const arrA = input[1].trim().split(" ").map(Number);
const arrB = input[2].trim().split(" ").map(Number);

let isSubsequence = false;

// B가 들어갈 수 있는 범위까지만 탐색 (a - b)
for (let i = 0; i <= a - b; i++) {
    let match = true;
    for (let j = 0; j < b; j++) {
        if (arrA[i + j] !== arrB[j]) {
            match = false;
            break;
        }
    }
    
    if (match) {
        isSubsequence = true;
        break;
    }
}

console.log(isSubsequence ? "Yes" : "No");
```
