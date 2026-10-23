# [[테스트]특정 구간의 합](https://www.codetree.ai/trails/complete/curated-cards/test-sum-of-specific-intervals)

| 항목 | 내용 |
|---|---|
| 분류 | Trail |
| 커리큘럼 | [Trail 2 / 함수 / 변수의 영역](https://www.codetree.ai/trail-info/novice-mid/) |
| 난이도 | 쉬움 |
| 경험치 | 30 XP |

# 문제

$N$개의 원소로 이루어진 수열 $A$가 주어지고, 이어서 $M$개의 질의가 주어집니다. 각 질의는 두 정수 $a_1, a_2$로 이루어지며, 수열 $A$의 $a_1$번째 원소부터 $a_2$번째 원소까지의 합을 묻습니다.

$M$개의 질의에 대해 각각의 구간 합을 구해 출력하는 프로그램을 작성해보세요. 단, 수열 $A$를 전역 변수로 표현하여 문제를 해결해보세요.

## 입력

첫 번째 줄에 $N$과 $M$이 공백을 사이에 두고 주어집니다.  
두 번째 줄에 수열 $A$의 원소 $A_1, A_2, \dots, A_N$이 공백을 사이에 두고 주어집니다.  
이후 $M$개의 줄에 걸쳐 각 줄에 질의를 이루는 두 정수 $a_1, a_2$가 공백을 사이에 두고 주어집니다.

## 제한 조건

* $1 \le N, M \le 100$
* $1 \le A_i \le 100$ ($1 \le i \le N$)
* $1 \le a_1 \le a_2 \le N$
* $N, M, A_i, a_1, a_2$는 모두 정수입니다.

## 시스템 제한

* Time Limit: 1000 ms
* Memory Limit: 64 MiB

## 출력

$M$개의 줄에 걸쳐, 각 질의의 구간 합을 주어진 순서대로 한 줄에 하나씩 출력합니다.

# 📌 Code Review 📌

## 01. 기존 풀이
```javascript
const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const [n, m] = input[0].split(" ").map(Number);
const A = input[1].split(" ").map(Number);
const queries = input.slice(2).map(line => line.split(" ").map(Number));

// Please write your code here.

const getAnswers = (arr, q) => {
    let printData = "";

    for (let i = 0; i < q.length; i++) {
        let tempSum = 0;

        for (let j = q[i][0] - 1; j < q[i][1]; j++) {
            tempSum += arr[j];
        }

        printData += tempSum + "\n";
    }
    return printData.trim();
}

console.log(getAnswers(A, queries));
```

## 02. AI 피드백 & 사전지식
- 문제에서 수열 A를 전역 변수로 표현하여 문제를 해결해보라는 조건이 있었으므로, A를 함수 인자로 넘기지 않고 직접 참조해야 문제의 요구사항에 충족할 수 있다.
