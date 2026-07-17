## 문제 설명

### **색인**

색인은 책 속의 낱말이나 구절을 찾아보기 쉽도록 해당 낱말 또는 구절이 나오는 페이지와 함께 엮어 사전 순으로 나열한 목록을 가리킵니다.

$n$ 개의 낱말과 페이지가 주어지면 낱말을 기준으로 사전순으로 정렬해 색인을 구성하여 출력하는 프로그램을 작성해보세요.

### **Input**

첫 번째 줄에는 정수 $n$ 이어 주어집니다.
두 번째 줄부터는 $n$ 개의 줄에 걸쳐 문자열로 주어지는 낱말과 페이지 번호를 나타내는 정수가 공백을 사이에 두고 주어집니다.

### **Constraints**

* $1 \le n \le 50$
* $1 \le 낱말의 길이 \le 20$
* $1 \le 페이지 번호 \le 1000$
* 문자열들은 소문자 알파벳으로 구성됩니다.
* 동일한 문자열이 주어지는 경우는 없습니다.

## 입출력 예시

### **Input**

```text
10
multiprocessing 124
clusters 464
clustering 19
forwarding 466
hardware 4
multiproprogramming 420
nonblocking 507
pages 360
priority 243
process 23

```

### **Output**

```text
clustering 19
clusters 464
forwarding 466
hardware 4
multiprocessing 124
multiproprogramming 420
nonblocking 507
pages 360
priority 243
process 23

```

## 📌 Code Review 📌

### 01. 기존 풀이
```javascript
const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
const wordNum = Number(input[0]);
const wordArr = [];

for (let i = 1; i <= wordNum; i++) {
    wordArr.push(input[i]);
}

wordArr.sort();

for (let i = 0; i < wordNum; i++) {
    console.log(wordArr[i]);
}
```

### 02. 개선 방향: 기존 코드 리팩토링
```javascript
const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
const wordNum = Number(input[0]);

// 1. 단어와 페이지를 분리하여 객체 배열로 생성
const wordArr = [];
for (let i = 1; i <= wordNum; i++) {
    const [word, page] = input[i].trim().split(" ");
    wordArr.push({ word, page: Number(page) });
}

// 2. 'word'(단어)만을 기준으로 정렬 (사전순)
wordArr.sort((a, b) => {
    if (a.word < b.word) return -1;
    if (a.word > b.word) return 1;
    return 0;
});

// 3. 형식에 맞춰 출력
for (let i = 0; i < wordNum; i++) {
    console.log(`${wordArr[i].word} ${wordArr[i].page}`);
}
```

### 03. 다른 풀이: 출력 최적화
```javascript
// 반복문 대신 map과 join을 이용해 한 번에 출력하기
const result = wordArr.map(item => `${item.word} ${item.page}`).join("\n");
console.log(result);
```
