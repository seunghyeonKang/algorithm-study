## 5로 나눈 나머지가 2 이상인 수의 합

### 문제 설명
$N$개의 자연수가 주어질 때, 각각의 수를 5로 나누었을 때 나머지가 2 이상(2, 3, 4)인 수들만 골라 그 합을 구하는 프로그램을 작성하시오.
### 입력
첫 번째 줄에 자연수의 개수 $N$이 주어집니다. ($1 \le N \le 100,000$)
두 번째 줄에 $N$개의 자연수가 공백으로 구분되어 주어집니다. (각 수는 $1$ 이상 $10,000$ 이하)
### 출력
조건을 만족하는 수들의 총합을 출력합니다.
### 입출력 예시
**입력**

```text
5
10 12 14 15 18

```


**출력**
```text
32

```


**설명**
* $10 \% 5 = 0$ (제외)
* $12 \% 5 = 2$ (포함)
* $14 \% 5 = 4$ (포함)
* $15 \% 5 = 0$ (제외)
* $18 \% 5 = 3$ (포함)
* 합: $12 + 14 + 18 = 32$


## 📌 Code Review 📌

### 01. 기존 풀이
```javascript
const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = parseInt(input[0], 10);
const arr = input[1].split(" ").map(Number);

let sum = 0;

for ( let i = 0; i < n; i++ ) {
    if (arr[i] % 5 >= 2) sum += arr[i];
}

console.log(sum);
```

### 02. AI 피드백
- 변수 명명: '`sum`'보다는 '`validSum`', '`total`'처럼 어떤 조건의 합인지 명확히 표현하면 가독성이 더 좋아진다.
- `reduce` 함수를 사용하면 한 줄로도 구현이 가능하다.
  
  ```javascript
  const sum = arr.reduce((acc, cur) => (cur % 5 >= 2 ? acc + cur : acc), 0);
  ```
