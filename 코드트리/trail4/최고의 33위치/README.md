# [[개념]최고의 33위치](https://www.codetree.ai/trails/complete/curated-cards/intro-best-place-of-33)

| 항목 | 내용 |
|---|---|
| 분류 | Trail |
| 커리큘럼 | [Trail 4 / Simulation / 격자 안에서 완전탐색](https://www.codetree.ai/trail-info/intermediate-low/) |
| 난이도 | 쉬움 |
| 경험치 | 40 XP |

# 문제

$N \times N$ 크기의 격자 정보가 주어집니다. 이때 해당 위치에 동전이 있다면 1, 없다면 0이 주어집니다. $N \times N$ 격자를 벗어나지 않도록 연속된 3개의 행과 연속된 3개의 열이 이루는 $3 \times 3$ 크기의 부분 격자를 적절하게 잘 잡아서 해당 범위 안에 들어있는 동전의 개수를 최대 로 하는 프로그램을 작성해보세요.

## 입력
첫 번째 줄에는 격자의 크기를 나타내는 $N$이 주어집니다.

두 번째 줄부터는 $N$개의 줄에 걸쳐 격자에 대한 정보가 주어집니다. 각 줄에는 각각의 행에 대한 정보가 주어지며, 이 정보는 0 또는 1로 이루어진 $N$개의 정수로 나타내어지며 공백을 사이에 두고 주어집니다.

## 제한 조건
* $3 \le N \le 20$
* 격자의 각 칸에 들어있는 값은 0 또는 1입니다.

## 출력
$3 \times 3$ 크기 부분 격자 내에 들어올 수 있는 동전의 최대 수를 출력합니다.

## 시스템 제한
* Time Limit: 3500 ms
* Memory Limit: 128 MiB

# 📌 Code Review 📌

## 01. 기존 풀이
```javascript
const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const grid = input.slice(1).map(line => line.split(' ').map(Number));

// Please Write your code here.

let maxSum = 0;

for (let i = 0; i < n - 2; i++) {
    for (let j = 0; j < n - 2; j++) {
        let nextSum = 0;

        for (let a = i; a < i + 3; a++) {
            for (let b = j; b < j + 3; b++) {
                nextSum += grid[a][b];
            }
        }

        if (maxSum < nextSum) maxSum = nextSum;
    }
}

console.log(maxSum);
```

## 02. AI 피드백 & 사전지식
- 변수명 명명: `nextSum`도 좋지만, 현재 구하고 있는 서브그리드의 합이라는 의미로 `currentSum`이나 `subgridSum` 같은 이름이 직관적일 수 있다.
- $N$이 수만~수십만으로 커진다면 2차원 누적 합 알고리즘을 사용해야한다. 하지만 현재 문제는 $N \le 20$으로 크기가 매우 작기 때문에, 누적 합을 구현하는 오버헤드가 오히려 단순 반복문보다 코드를 복잡하게 만든다. 따라서 현재 작성한 코드가 가장 이상적인 브루트포스 코드이다.
