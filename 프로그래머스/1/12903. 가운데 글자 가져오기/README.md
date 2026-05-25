# [level 1] 가운데 글자 가져오기 - 12903 

[문제 링크](https://school.programmers.co.kr/learn/courses/30/lessons/12903) 

### 성능 요약

메모리: 32.6 MB, 시간: 0.03 ms

### 구분

코딩테스트 연습 > 연습문제

### 채점결과

정확성: 100.0<br/>합계: 100.0 / 100.0

### 제출 일자

2026년 05월 25일 01:33:30

### 문제 설명

<p>단어 s의 가운데 글자를 반환하는 함수, solution을 만들어 보세요. 단어의 길이가 짝수라면 가운데 두글자를 반환하면 됩니다.</p>

<h6>재한사항</h6>

<ul>
<li>s는 길이가 1 이상, 100이하인 스트링입니다.</li>
</ul>

<h5>입출력 예</h5>
<table class="table">
        <thead><tr>
<th>s</th>
<th>return</th>
</tr>
</thead>
        <tbody><tr>
<td>"abcde"</td>
<td>"c"</td>
</tr>
<tr>
<td>"qwer"</td>
<td>"we"</td>
</tr>
</tbody>
      </table>

> 출처: 프로그래머스 코딩 테스트 연습, https://school.programmers.co.kr/learn/challenges

## 📌 Code Review 📌

### 01. 기존 풀이
```
function solution(s) {
    const l = s.length;
    return (l % 2 === 0 ? s[l / 2 - 1] + s[l / 2] : s[(l - 1) / 2]);
}
```
- 안전장치로 소수점을 버리는 함수(`Math.floor`)을 습관화하는 것이 좋다.
- const `l`은 숫자 `1`이나 알파벳 대문자 `I`와 헷갈릴 수 있으므로 `len`이나 `length`로 명확히 하는게 좋다.

### 02. 개선 방향: `Math.floor` 활용 및 중복 계산 줄이기
```
function solution(s) {
    const len = s.length;
    const mid = Math.floor(len / 2);
    
    return len % 2 === 0 ? s[mid - 1] + s[mid] : s[mid];
}
```

### 03. 다른 풀이: `slice()` 활용
```
function solution(s) {
    const mid = Math.floor(s.length / 2);
    return s.slice(mid - (s.length % 2 === 0 ? 1 : 0), mid + 1);
}
```

### 04. 다른 풀이: `slice()`와 `Math.ceil()` 활용
```
function solution(s) {
    return s.slice(Math.ceil(s.length / 2) - 1, Math.floor(s.length / 2) + 1);
}
```

### 05. 사전 지식
- `string.slice(beginIndex, endIndex)`: 배열이나 문자열의 일부분을 추출해서 새로운 배열이나 문자열로 반환
- `Math.ceil(number)`: 소수점이 있으면 무조건 올림(Ceiling)하여 더 큰 정수로 만드는 함수
