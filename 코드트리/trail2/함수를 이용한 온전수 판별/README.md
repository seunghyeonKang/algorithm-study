# [[챌린지]함수를 이용한 온전수 판별](https://www.codetree.ai/trails/complete/curated-cards/challenge-determining-the-whole-number-using-a-function)

| 항목 | 내용 |
|---|---|
| 분류 | Trail |
| 커리큘럼 | [Trail 2 / 함수 / 값을 반환하는 함수](https://www.codetree.ai/trail-info/novice-mid/) |
| 난이도 | 쉬움 |
| 경험치 | 10 XP |

# 문제

정수 $A$와 $B$가 주어지면, $A$ 이상 $B$ 이하 온전수의 개수를 세는 프로그램을 작성해보세요. 단, 온전수인지 판단하는 함수를 이용하여 문제를 해결해주세요.

온전수란 다음 세 가지 중 어느 하나에도 해당하지 않는 정수를 뜻합니다.

* 2로 나누어 떨어지는 경우
* 일의 자리가 5인 경우
* 3으로는 나누어 떨어지지만 9로는 나누어 떨어지지 않는 경우

즉, 위 세 가지 중 하나라도 해당하면 온전수가 아닙니다.

예를 들어 27은 온전수입니다. 3으로 나누어 떨어지지만 9로도 나누어떨어지므로 세 번째에 해당하지 않고, 나머지 두 가지에도 해당하지 않기 때문입니다. 반면 21은 3으로는 나누어 떨어지지만 9로는 나누어 떨어지지 않아 세 번째에 해당하므로 온전수가 아닙니다.

## 입력

첫 번째 줄에 정수 $A$와 $B$가 공백을 사이에 두고 주어집니다.

## 제한 조건

* $1 \le A \le B \le 100$

## 시스템 제한

* Time Limit: 1000 ms
* Memory Limit: 64 MiB

## 출력

첫 번째 줄에 $A$ 이상 $B$ 이하에 있는 온전수의 개수를 출력합니다.

# 📌 Code Review 📌

## 01. 기존 풀이
```javascript
const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

let [a, b] = input[0].split(" ").map(Number);

// Please Write your code here.

const isCompletedNum = (n) => {
    let answer = true;

    if (n % 2 === 0) answer = false;
    else if (n % 5 === 0 && n % 10 !== 0) answer = false;
    else if (n % 3 === 0 && n % 9 !== 0)  answer = false;

    return answer;
}

let count = 0;

for (let i = a; i <= b; i ++) {
    if (isCompletedNum(i)) count++;
}

console.log(count);
```

## 02. AI 피드백 & 사전지식
- 조건 2번 간소화하기: 첫 번째 조건(`n % 2 === 0`)에서 10의 배수가 이미 걸러지므로, 두 번째 조건은 `n % 10 !== 0`을 뺄 필요 없이 `else if (n % 5 === 0)`만 적어도 정상 동작한다. 다만 현재 코드도 의도가 명확해서 나쁘지 않다.
