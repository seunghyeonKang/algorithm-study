# [[개념]블럭쌓는 명령2](https://www.codetree.ai/trails/complete/curated-cards/intro-block-stacking-commands2)

| 항목 | 내용 |
|---|---|
| 분류 | Trail |
| 커리큘럼 | [Trail 2 / 시뮬레이션 I / 구간 칠하기](https://www.codetree.ai/trail-info/novice-mid/) |
| 난이도 | 쉬움 |
| 경험치 | 20 XP |

## 문제 설명
1번 칸부터 $N$번 칸까지 순서대로 총 $N$개의 칸이 있습니다. 처음에는 모든 칸에 블록이 0개 놓여 있습니다.

명령은 총 $K$번 주어집니다. $i$번째 명령은 두 정수 $A_i, B_i$로 주어지며, $A_i$번 칸부터 $B_i$번 칸까지 양 끝 칸을 포함한 모든 칸에 블록을 각각 1개씩 쌓으라는 뜻입니다. ($1 \le i \le K$)

명령을 주어진 순서대로 모두 수행한 이후, 1번 칸부터 $N$번 칸까지 쌓인 블록의 수 중 최댓값을 출력하는 프로그램을 작성해보세요.

## 입력
- 첫 번째 줄에 $N$과 $K$가 공백을 사이에 두고 주어집니다.
- 두 번째 줄부터 $K$개의 줄에 걸쳐 명령이 주어진 순서대로 한 줄에 하나씩 주어집니다. 그중 $i$번째 줄에는 두 정수 $A_i$와 $B_i$가 공백을 사이에 두고 주어집니다. ($1 \le i \le K$)

## 출력
- 첫 번째 줄에 각 칸에 있는 블록의 수 중 최댓값을 출력합니다.

## 제한 조건
- $1 \le N \le 100$
- $1 \le K \le 100$
- $1 \le A_i \le B_i \le N$ ($1 \le i \le K$)

## 시스템 제한
- Time Limit: 1000 ms
- Memory Limit: 64 MiB

# 📌 Code Review 📌

## 01. 기존 풀이
```javascript
const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const [n, k] = input[0].split(' ').map(Number);
const segments = input.slice(1, k + 1).map(line => line.split(' ').map(Number));

const blockList = Array.from({ length: n }, () => 0);
for (let i = 0; i < k; i++) {
    for (let j = segments[i][0] - 1; j < segments[i][1]; j++) {
        blockList[j]++;
    }
}

console.log(Math.max(...blockList));
```

## 02. AI 피드백 & 사전지식
- 만약 $N$과 $K$의 범위가 $100,000$ 정도로 커진다면 지금의 2중 루프( $O(K \times N)$ ) 방식은 시간 초과가 나게 된다. 이럴 때는 **누적합(Prefix Sum)** / **차분 배열(Difference Array)** 기법을 사용하면 $O(N + K)$만에 해결할 수 있다.

## 03. 다른 풀이: 심화 학습용
```javascript
const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const [n, k] = input[0].split(' ').map(Number);

// 변화량을 기록할 배열 (1-based index 편의상 n+2 크기)
const diff = Array(n + 2).fill(0);

for (let i = 1; i <= k; i++) {
    const [a, b] = input[i].split(' ').map(Number);
    diff[a] += 1;     // a번 칸부터 시작 (+1)
    diff[b + 1] -= 1; // b+1번 칸에서 종료 (-1)
}

// 누적합을 구하며 최댓값 측정
let maxBlock = 0;
let currentBlock = 0;

for (let i = 1; i <= n; i++) {
    currentBlock += diff[i];
    if (currentBlock > maxBlock) {
        maxBlock = currentBlock;
    }
}

console.log(maxBlock);
```
