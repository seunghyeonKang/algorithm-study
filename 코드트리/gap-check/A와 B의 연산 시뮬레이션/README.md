## A와 B의 연산 시뮬레이션

### [문제 설명(임시 복원)]

두 정수 A와 B가 입력으로 주어진다. (A < B)

A가 B보다 크거나 같아질 때까지 다음 연산을 반복한다.

1. B - A가 짝수라면, A의 값을 2배로 만든다. (A = A * 2)
2. B - A가 홀수라면, B의 값에 17을 더한다. (B = B + 17)

A >= B 조건이 만족될 때까지 수행한 총 연산 횟수를 출력하시오.

## 📌 Code Review 📌

### 01. 기존 풀이
```javascript
const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

let A = parseInt(input[0]);
let B = parseInt(input[1]);

const func = (a, b) => {
    if((b - a) % 2 === 0) a *= 2;
    else b += 17;
    return {a, b};
}

let count = 0;
while (A < B) {
    const obj = func(A, B);
    A = obj.a;
    B = obj.b;
    count++;
}
console.log(count);
```

### 02. 개선 풀이: 기존 코드 리팩토링
```javascript
const fs = require("fs");
// 공백/줄바꿈 문자로 구분된 입력 처리
const input = fs.readFileSync(0).toString().trim().split(/\s+/);

let A = Number(input[0]);
let B = Number(input[1]);

let count = 0;

while (A < B) {
  if ((B - A) % 2 === 0) {
    A *= 2;
  } else {
    B += 17;
  }
  count++;
}

console.log(count);
```

### 03. 사전 지식
- `while` 루프 안에서 매번 `func` 함수를 호출하고 `{a, b}` 객체를 생성하면 불필요한 메모리 할당이 일어난다. 불필요한 함수는 제거하자.
