# 소인수분해

정수 n이 주어졌을 때 소인수분해를 하는 프로그램을 작성하세요.

## Input
첫 번째 줄에 정수 n이 주어집니다.

## Constraints
- 2 ≤ n ≤ 10,000,000

## Output
첫 번째 줄부터 n의 소인수분해 결과를 한 줄에 하나씩 오름차순으로 출력합니다.

## Example 1
**Input**
```
6
```
**Output**
```
2
3
```

## Example 2
**Input**
```
12
```
**Output**
```
2
2
3
```

## 📌 Code Review 📌

### 01. 기존 풀이
```javascript
const input = require("fs").readFileSync("/dev/stdin").toString().trim();
const answer = [];

const Func = (n) => {
  if (n === 1) return 0;

  let i = answer.length ? answer[answer.length - 1] : 2;
  for (; i < n; i++) {
    if (n % i === 0) {
      answer.push(i);
      return Func(n / i);
    }
  }

  answer.push(n);
}

Func(Number(input));
console.log(answer.join("\n"));
```
- $O(N)$의 시간 복잡도: 제약 조건이 $10,000,000$이기 때문에, 최악의 경우 약 1,000만 번 반복한다.
- 스택 오버플로우: 숫자에 따라 재귀 호출이 수십 번 누적될 수 있다. 재귀 깊이가 너무 깊어져 에러를 내며 멈출 수 있다.

### 02. 개선 방향: 기존 코드 리팩토링
```javascript
const input = require("fs").readFileSync("/dev/stdin").toString().trim();
let n = Number(input);
const answer = [];

// 2부터 시작해서 n의 제곱근까지만 확인한다.
for (let i = 2; i * i <= n; i++) {
  // n이 i로 나누어 떨어진다면, 안 나누어 떨어질 때까지 계속 나눈다.
  while (n % i === 0) {
    answer.push(i);
    n /= i;
  }
}

// 만약 위 반복문을 다 돌았는데도 n이 1이 아니라면, 남은 n 자체가 마지막 소수(소인수)이다.
if (n > 1) {
  answer.push(n);
}

console.log(answer.join("\n"));
```
- 재귀 대신 반복문을 사용하고, $\sqrt{N}$ 까지만 탐색하도록 최적화했다.

### 03. 사전 지식
- 소인수분해를 할 때 어떤 수 $N$의 약수들은 항상 $\sqrt{N}$을 기준으로 서로 짝을 이루기 때문에, $\sqrt{N}$까지만 조사하면 반대편 짝을 자동으로 찾을 수 있다.
- 재귀함수로 풀 때 코드가 깔끔하더라도, JavaScript에는 Call Stack 크기에 제한이 있기 때문에 입력값이 조금만 커져도 스택 오버플로우가 날 수 있다.
