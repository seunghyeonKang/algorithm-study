# [level 2] JadenCase 문자열 만들기 - 12951 

[문제 링크](https://school.programmers.co.kr/learn/courses/30/lessons/12951) 

### 성능 요약

메모리: 32.4 MB, 시간: 0.15 ms

### 구분

코딩테스트 연습 > 연습문제

### 채점결과

정확성: 100.0<br/>합계: 100.0 / 100.0

### 제출 일자

2026년 06월 02일 11:47:33

### 문제 설명

<p>JadenCase란 모든 단어의 첫 문자가 대문자이고, 그 외의 알파벳은 소문자인 문자열입니다. 단, 첫 문자가 알파벳이 아닐 때에는 이어지는 알파벳은 소문자로 쓰면 됩니다. (첫 번째 입출력 예 참고)<br>
문자열 s가 주어졌을 때, s를 JadenCase로 바꾼 문자열을 리턴하는 함수, solution을 완성해주세요.</p>

<h5>제한 조건</h5>

<ul>
<li>s는 길이 1 이상 200 이하인 문자열입니다.</li>
<li>s는 알파벳과 숫자, 공백문자(" ")로 이루어져 있습니다.

<ul>
<li>숫자는 단어의 첫 문자로만 나옵니다.</li>
<li>숫자로만 이루어진 단어는 없습니다.</li>
<li>공백문자가 연속해서 나올 수 있습니다.</li>
</ul></li>
</ul>

<h5>입출력 예</h5>
<table class="table">
        <thead><tr>
<th>s</th>
<th style="text-align: center">return</th>
</tr>
</thead>
        <tbody><tr>
<td>"3people unFollowed me"</td>
<td style="text-align: center">"3people Unfollowed Me"</td>
</tr>
<tr>
<td>"for the last week"</td>
<td style="text-align: center">"For The Last Week"</td>
</tr>
</tbody>
      </table>
<hr>

<p>※ 공지 - 2022년 1월 14일 제한 조건과 테스트 케이스가 추가되었습니다.</p>


> 출처: 프로그래머스 코딩 테스트 연습, https://school.programmers.co.kr/learn/challenges

## 📌 Code Review 📌

### 01. 기존 풀이
```
function solution(s) {
    return s.split(" ").map((word, i) => {
        let charArr = word.split("");
        return charArr.map((char, i) => {
            if (i === 0) {
                return char.toUpperCase();
            } else {
                return char.toLowerCase();
            }
        }).join("");
    }).join(" ");
}
```
- `charArr`는 선언하자마자 바로 `.map()`에만 쓰이므로 인라인으로 처리해도 된다.
- 내부 `.map()` → 슬라이싱(`slice(1)`)으로 단순화할 수 있다.

### 02. 개선 방향: `charAt`과 `slice` 활용 (가장 안전한 방법)
```
function solution(s) {
    return s.split(" ").map(word => {
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    }).join(" ");
}
```

### 03. 다른 풀이: 인덱스 접근 방식 (직관적인 방법)
```
function solution(s) {
    return s.split(" ").map(word => {
        if (!word) return ""; 
        
        return word[0].toUpperCase() + word.slice(1).toLowerCase();
    }).join(" ");
}
```
→ 공백이 연속으로 들어와 `word`가 빈 문자열(`""`)인 경우 그대로 반환

### 04. 사전 지식
- `charAt(0)`은 빈 문자열일 때 에러 대신 `""`을 반환한다.
- `map()` 메서드는 원본 배열을 수정하지 않고, 항상 변형된 '새로운 배열'을 반환한다.
- `toUpperCase()`: 문자열의 모든 알파벳을 대문자로 변환한다.
- `toLowerCase()`: 문자열의 모든 알파벳을 소문자로 변환한다.
- `charAt(i)`: 문자열에서 인덱스 `i`에 위치한 문자 하나를 반환한다.
- `slice(start, end)`: 문자열에서 `start` 인덱스부터 `end` 직전까지 잘라 반환한다. (end 생략 시 끝까지)
