# [[챌린지]배열 놀이](https://www.codetree.ai/trails/complete/curated-cards/challenge-play-with-array)

| 항목 | 내용 |
|---|---|
| 분류 | Trail |
| 커리큘럼 | [Trail 1 / 1차원 배열 / 탐색](https://www.codetree.ai/trail-info/novice-low/) |
| 난이도 | 어려움 |
| 경험치 | 30 XP |

## 문제 설명

$N$개의 원소와 $Q$개의 질의가 주어집니다[cite: 1].
하나의 질의는 다음 세 종류 중 하나입니다[cite: 1]:

1. `"1 a"`
   - $a$번째 원소를 출력합니다[cite: 1].
2. `"2 b"`
   - $N$개의 원소 중에 값이 $b$인 원소를 찾아, 그 원소가 몇 번째 원소인지 출력합니다[cite: 1].
   - 그러한 원소가 여러 개라면, 그 중에서 index가 제일 작은 원소의 위치를 출력합니다[cite: 1].
   - 그러한 원소가 없다면, `0`을 출력합니다[cite: 1].
3. `"3 s e"`
   - $s$번째 원소부터 $e$번째 원소까지 각 원소의 값을 공백으로 구분하여 차례대로 출력합니다[cite: 1].

각 질의를 차례대로 수행하는 프로그램을 작성하세요[cite: 1].

---

## 입력 형식

- **첫째 줄:** 두 정수 $N$과 $Q$가 주어집니다[cite: 1].
- **둘째 줄:** $N$개의 원소의 값이 차례대로 공백으로 구분되어 주어집니다[cite: 1].
- **셋째 줄부터 $Q$개의 줄:** $Q$개의 질의가 한 줄에 하나씩 차례대로 주어집니다[cite: 1].
  - $i$번째 줄에는 $i$번째 질의가 지문과 동일한 형식으로 주어집니다[cite: 1].

---

## 출력 형식

- 첫 줄부터 $Q$개의 줄에 걸쳐, $Q$개의 질의에 대한 결과를 한 줄에 하나씩 차례대로 출력합니다[cite: 2].

---

## 제한 조건

- $1 \le N, Q \le 100$[cite: 2]
- $1 \le a \le N$[cite: 2]
- $1 \le b \le 100$[cite: 2]
- $1 \le s \le e \le N$[cite: 2]
- $N$개의 원소의 값은 모두 $1$ 이상 $100$ 이하입니다[cite: 2].

---

## 시스템 제한

- **Time Limit:** 1000 ms[cite: 3]
- **Memory Limit:** 64 MiB[cite: 3]

# 📌 Code Review 📌

## 01. 기존 풀이
```javascript
let fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");

const [n, q] = input[0].split(" ").map(Number);
const numList = input[1].split(" ").map(Number);

const logAnswer = (arr) => {
    if (arr[0] === 1) {
        console.log(numList[arr[1] - 1]);
    } else if (arr[0] === 2) {
        const idx = numList.indexOf(arr[1]);
        console.log(idx !== -1 ? idx + 1 : 0);
    } else {
        let numAnswer = numList[arr[1] - 1];
        for (let j = arr[1]; j < arr[2]; j++) {
            numAnswer += ` ${numList[j]}`;
        }
        console.log(numAnswer);
    }
}

for (let i = 2; i < q + 2; i++) {
    logAnswer(input[i].split(" ").map(Number));
}
```

## 02. AI 피드백 & 사전지식
- `console.log` 호출 횟수 최적화: Node.js 환경에서는 출력(I/O) 연산의 오버헤드가 매우 크다. 따라서 결과값을 배열에 모아두었다가 마지막에 한 번만 출력(`join('\n')`)하는 방식을 권장한다.
- 문자열 더하기 대신 `slice().join()`: 반복문과 문자열 더하기 대신, 배열의 `slice` 메서드를 사용하면 범위 추출과 출력을 한 줄로 처리할 수 있다.

## 03. 개선 풀이
```javascript
const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const [n, q] = input[0].split(" ").map(Number);
const numList = input[1].split(" ").map(Number);

const results = [];

for (let i = 2; i < q + 2; i++) {
    const query = input[i].split(" ").map(Number);
    const type = query[0];

    if (type === 1) {
        const a = query[1];
        results.push(numList[a - 1]);
    } else if (type === 2) {
        const b = query[1];
        const idx = numList.indexOf(b);
        // indexOf는 가장 먼저 등장하는 인덱스를 반환하므로 문제의 'index가 제일 작은 원소' 조건 자동 충족
        results.push(idx !== -1 ? idx + 1 : 0);
    } else if (type === 3) {
        const [_, s, e] = query;
        // s-1부터 e까지의 범위 추출 후 공백으로 연결
        results.push(numList.slice(s - 1, e).join(" "));
    }
}

// 한 번에 출력하여 I/O 오버헤드 최소화
console.log(results.join("\n"));
```
