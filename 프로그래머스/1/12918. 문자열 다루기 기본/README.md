# [level 1] 문자열 다루기 기본 - 12918 

[문제 링크](https://school.programmers.co.kr/learn/courses/30/lessons/12918) 

### 성능 요약

메모리: 32.5 MB, 시간: 0.19 ms

### 구분

코딩테스트 연습 > 연습문제

### 채점결과

정확성: 100.0<br/>합계: 100.0 / 100.0

### 제출 일자

2026년 05월 31일 12:26:03

### 문제 설명

<p>문자열 s의 길이가 4 혹은 6이고, 숫자로만 구성돼있는지 확인해주는 함수, solution을 완성하세요. 예를 들어 s가 "a234"이면 False를 리턴하고 "1234"라면 True를 리턴하면 됩니다.</p>

<h5>제한 사항</h5>

<ul>
<li><code>s</code>는 길이 1 이상, 길이 8 이하인 문자열입니다.</li>
<li><code>s</code>는 영문 알파벳 대소문자 또는 0부터 9까지 숫자로 이루어져 있습니다.</li>
</ul>

<h5>입출력 예</h5>
<table class="table">
        <thead><tr>
<th>s</th>
<th>return</th>
</tr>
</thead>
        <tbody><tr>
<td>"a234"</td>
<td>false</td>
</tr>
<tr>
<td>"1234"</td>
<td>true</td>
</tr>
</tbody>
      </table>
<h5>문제가 잘 안풀린다면😢</h5>

<p>힌트가 필요한가요? [코딩테스트 연습 힌트 모음집]으로 오세요! → <a href="https://school.programmers.co.kr/learn/courses/14743?itm_content=lesson12918" target="_blank" rel="noopener">클릭</a></p>

<hr>

<ul>
<li>공지 - 2022년 7월 22일 테스트케이스가 추가되었습니다.</li>
<li>공지 - 2022년 7월 22일 제한 사항이 추가되었습니다.</li>
</ul>


> 출처: 프로그래머스 코딩 테스트 연습, https://school.programmers.co.kr/learn/challenges

## 📌 Code Review 📌

### 00. 틀린 기존 풀이
```
function solution(s) {
    return (s.length === 4 || s.length === 6) && Number(s) >= 0;
}
```
- 예외 케이스: 지수 표기법(e), 공백 문자, 마이너스(-), 소수점(.) 등
- `isNaN()`을 사용해도 위와 같은 예외 케이스로 실패한다.

### 01. 기존 풀이
```
function solution(s) {
    let arr = s.split("");
    if (arr.length !== 4 && arr.length !== 6) return false;
    for (let char of arr) {
        let isNum = false;
        for (let num of ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]) {
            if (char === num) isNum = true;
        }
        if (isNum === false) return false;
    }
    return true;
}
```
- `split()`로 배열을 만들지 않아도 순환 가능하다.

### 02. 개선 방향: `isNaN()` 활용하기
```
function solution(s) {
    if (s.length !== 4 && s.length !== 6) return false;
    for (let char of s) {
        if (isNaN(char)) return false;
    }
    return true;
}
```

### 03. 다른 풀이: `.every()` 활용하기
```
function solution(s) {
    if (s.length !== 4 && s.length !== 6) return false;
    
    return s.split("").every(char => char >= "0" && char <= "9");
}
```

### 04. 다른 풀이: 정규표현식 사용하기
```
function solution(s) {
    // ^: 시작, \d: 숫자, {4}: 4번 반복, $: 끝 (또는 6번 반복)
    const regex = /^\d{4}$|^\d{6}$/;
    return regex.test(s);
}
```

### 05. 사전 지식
- `isNaN()`: 값을 숫자로 변환했을 때 `NaN`이면 `true`를 반환하는 전역 함수
- `.every()`: 배열의 모든 요소가 콜백 조건을 만족하면 `true`, 하나라도 만족하지 않으면 즉시 `false`를 반환하는 배열 메서드.
- 문자열이 되는 것: 인덱스 접근, `length`, `for...of`
- 문자열이 안 되는 것: 배열 메서드 (`every`, `map` 등)
