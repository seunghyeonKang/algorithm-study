# [level 0] 0 떼기 - 181847 

[문제 링크](https://school.programmers.co.kr/learn/courses/30/lessons/181847) 

### 성능 요약

메모리: 44.1 MB, 시간: 0.10 ms

### 구분

코딩테스트 연습 > 코딩 기초 트레이닝

### 채점결과

정확성: 100.0<br/>합계: 100.0 / 100.0

### 제출 일자

2026년 07월 20일 22:27:37

### 문제 설명

<p>정수로 이루어진 문자열 <code>n_str</code>이 주어질 때, <code>n_str</code>의 가장 왼쪽에 처음으로 등장하는 0들을 뗀 문자열을 return하도록 solution 함수를 완성해주세요.</p>

<hr>

<h5>제한사항</h5>

<ul>
<li>2 ≤ <code>n_str</code> ≤ 10</li>
<li><code>n_str</code>이 "0"으로만 이루어진 경우는 없습니다.</li>
</ul>

<hr>

<h5>입출력 예</h5>
<table class="table">
        <thead><tr>
<th>n_str</th>
<th>result</th>
</tr>
</thead>
        <tbody><tr>
<td>"0010"</td>
<td>"10"</td>
</tr>
<tr>
<td>"854020"</td>
<td>"854020"</td>
</tr>
</tbody>
      </table>
<hr>

<h5>입출력 예 설명</h5>

<p>입출력 예 #1</p>

<ul>
<li>"0010"의 가장 왼쪽에 연속으로 등장하는 "0"을 모두 제거하면 "10"이 됩니다.</li>
</ul>

<p>입출력 예 #2</p>

<ul>
<li>"854020"는 가장 왼쪽에 0이 없으므로 "854020"을 return합니다.</li>
</ul>


> 출처: 프로그래머스 코딩 테스트 연습, https://school.programmers.co.kr/learn/challenges

## 📌 Code Review 📌

### 01. 기존 풀이
```javascript
function solution(n_str) {
    let startIdx = 0;
    for (let i = 0; i < n_str.length; i++) {
        if (n_str[i] !== "0") break;
        else startIdx = i + 1;
    }
    return n_str.slice(startIdx);
}
```
- `break`로 빠져나가므로 `else`는 불필요하다.
- `startIdx`를 매번 갱신하기보다 `i`를 그대로 쓰면 더 간결하다.

### 02. 개선 방향: 기존 코드 리팩토링
```javascript
function solution(n_str) {
    let i = 0;
    while (n_str[i] === "0") i++;
    return n_str.slice(i);
}
```

### 03. 다른 풀이: 정규식 활용
```javascript
const solution = (n_str) => n_str.replace(/^0+/, "");
```

### 04. 다른 풀이: 숫자 변환
```javascript
const solution = (n_str) => String(Number(n_str));
```

### 05. 사전 지식
- 정규식
  - `^` : 문자열의 시작 point
  - `0+` : `0`이 1개 이상 연속됨
