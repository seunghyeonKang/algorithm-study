# [[개념]특정 위치의 문자](https://www.codetree.ai/trails/complete/curated-cards/intro-char-in-specific-location)

| 항목 | 내용 |
|---|---|
| 분류 | Trail |
| 커리큘럼 | [Trail 1 / 1차원 배열 / 탐색](https://www.codetree.ai/trail-info/novice-low/) |
| 난이도 | 쉬움 |
| 경험치 | 10 XP |

## 문제 설명
6개의 문자를 요소로 가지는 문자 배열을 생성하고, 각각 `L`, `E`, `B`, `R`, `O`, `S` 로 초기화합니다.
입력으로 문자 한 개가 주어지면, 사전 정의된 배열에서 해당 문자가 위치한 인덱스(위치)를 출력하는 프로그램을 작성하세요.

- 배열의 첫 번째 위치(인덱스)는 `0`번입니다.
- 배열에 존재하지 않는 문자가 입력으로 주어지면 `None`을 출력합니다.

---

## 입력
- 첫 번째 줄에 한 개의 문자가 입력됩니다.

## 출력
- 입력받은 문자가 배열에 존재하는 경우, 해당 문자의 인덱스(위치)를 출력합니다.
- 입력받은 문자가 배열에 존재하지 않는 경우, `None`을 출력합니다.

---

## 제한 사항
- **Time Limit:** 1000 ms
- **Memory Limit:** 64 MiB

---

## 입출력 예시 (참고용)
### 예시 1
- **입력:** `B`
- **출력:** `2`

### 예시 2
- **입력:** `A`
- **출력:** `None`

# 📌 Code Review 📌

## 01. 기존 풀이
```javascript
let fs = require("fs");
let input = fs.readFileSync(0).toString().trim();

const arr = [ "L", "E", "B", "R", "O", "S" ];
let answer = "None";

for (let i = 0; i < 6; i++) {
    if(arr[i] === input) answer = i;
}

console.log(answer);
```

## 02. AI 피드백
- 효율성 개선: 문자를 찾으면 반복문 종료하기 (`break`)
  ```javascript
  for (let i = 0; i < 6; i++) {
    if (arr[i] === input) {
      answer = i;
      break; // 문자를 찾았으므로 더 이상 돌지 않고 탈출
    }
  }
  ```
- JavaScript 내장 메서드 활용 (`indexOf`)
  ```javascript
  let fs = require("fs");
  let input = fs.readFileSync(0).toString().trim();
  
  const arr = ["L", "E", "B", "R", "O", "S"];
  const index = arr.indexOf(input);
  
  // index가 -1이면 None, 찾았으면 해당 인덱스 출력
  console.log(index !== -1 ? index : "None");
  ```
