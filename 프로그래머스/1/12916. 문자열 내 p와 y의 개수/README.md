# [level 1] 문자열 내 p와 y의 개수 - 12916 

[문제 링크](https://school.programmers.co.kr/learn/courses/30/lessons/12916) 

### 성능 요약

메모리: 32.6 MB, 시간: 0.13 ms

### 구분

코딩테스트 연습 > 연습문제

### 채점결과

정확성: 100.0<br/>합계: 100.0 / 100.0

### 제출 일자

2026년 05월 18일 01:33:28

### 문제 설명

<p>대문자와 소문자가 섞여있는 문자열 s가 주어집니다. s에 'p'의 개수와 'y'의 개수를 비교해 같으면 True, 다르면 False를 return 하는 solution를 완성하세요. 'p', 'y' 모두 하나도 없는 경우는 항상 True를 리턴합니다. 단, 개수를 비교할 때 대문자와 소문자는 구별하지 않습니다.</p>

<p>예를 들어 s가 "pPoooyY"면 true를 return하고 "Pyy"라면 false를 return합니다.</p>

<h5>제한사항</h5>

<ul>
<li>문자열 s의 길이 : 50 이하의 자연수</li>
<li>문자열 s는 알파벳으로만 이루어져 있습니다.</li>
</ul>

<hr>

<h5>입출력 예</h5>
<table class="table">
        <thead><tr>
<th>s</th>
<th>answer</th>
</tr>
</thead>
        <tbody><tr>
<td>"pPoooyY"</td>
<td>true</td>
</tr>
<tr>
<td>"Pyy"</td>
<td>false</td>
</tr>
</tbody>
      </table>
<h5>입출력 예 설명</h5>

<p>입출력 예 #1<br>
'p'의 개수 2개, 'y'의 개수 2개로 같으므로 true를 return 합니다.</p>

<p>입출력 예 #2<br>
'p'의 개수 1개, 'y'의 개수 2개로 다르므로 false를 return 합니다.</p>

<p>※ 공지 - 2021년 8월 23일 테스트케이스가 추가되었습니다.</p>


> 출처: 프로그래머스 코딩 테스트 연습, https://school.programmers.co.kr/learn/challenges

## 📌 Code Review 📌

### 01. 기존 풀이
```
function solution(s){
    let numP = 0;
    let numY = 0;
    
    for (let i = 0; i < s.length; i++) {
        if (s[i] === "p" || s[i] === "P") {
            numP++;
        } else if (s[i] === "y" || s[i] === "Y") {
            numY++;
        }
    }
    return numP === numY;
}
```
- `toLowerCase()` 전처리로 조건 단순화
- 내장 메서드 활용으로 더 간결하게 표현 가능

### 02. 개선 방향: `for...of`문, `toLowerCase()` 활용
```
function solution(s) {
    let numP = 0;
    let numY = 0;

    for (const char of s.toLowerCase()) {
        if (char === 'p') numP++;
        else if (char === 'y') numY++;
    }
    
    return numP === numY;
}
```

### 03. 다른 풀이: `split()` 활용
```
function solution(s) {
    const lower = s.toLowerCase();
    return lower.split('p').length === lower.split('y').length;
}
```

### 04. 다른 풀이: `split()`, `filter()` 활용
```
function solution(s) {
    const lower = s.toLowerCase();
    const countP = lower.split("").filter(c => c === "p").length;
    const countY = lower.split("").filter(c => c === "y").length;
    return countP === countY;
}
```

### 05. 사전 지식
- `for...of`문: 값(Value)을 꺼내온다. (배열의 실제 데이터, 문자열의 글자)

  ```
  let str = "hello";
  for (let char of str) {
      console.log(char); // 변수 char에 글자가 알아서 하나씩 담김
  }
  ```
- `for...in`문: 키(Key) 또는 인덱스(Index)를 꺼내옵니다. (주로 일반 객체`{}`의 속성을 훑을 때 사용)

  ```
  const arr = ['a', 'b', 'c'];
  
  for (let x of arr) {
      console.log(x); // 출력: 'a', 'b', 'c' (값)
  }
  
  for (let x in arr) {
      console.log(x); // 출력: '0', '1', '2' (인덱스/위치)

  }
  ```
