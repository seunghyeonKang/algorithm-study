# [level 1] 자연수 뒤집어 배열로 만들기 - 12932 

[문제 링크](https://school.programmers.co.kr/learn/courses/30/lessons/12932) 

### 성능 요약

메모리: 32.5 MB, 시간: 0.10 ms

### 구분

코딩테스트 연습 > 연습문제

### 채점결과

정확성: 100.0<br/>합계: 100.0 / 100.0

### 제출 일자

2026년 05월 07일 14:54:56

### 문제 설명

<p>자연수 n을 뒤집어 각 자리 숫자를 원소로 가지는 배열 형태로 리턴해주세요. 예를들어 n이 12345이면 [5,4,3,2,1]을 리턴합니다.</p>

<h5>제한 조건</h5>

<ul>
<li>n은 10,000,000,000이하인 자연수입니다.</li>
</ul>

<h5>입출력 예</h5>
<table class="table">
        <thead><tr>
<th>n</th>
<th>return</th>
</tr>
</thead>
        <tbody><tr>
<td>12345</td>
<td>[5,4,3,2,1]</td>
</tr>
</tbody>
      </table>

> 출처: 프로그래머스 코딩 테스트 연습, https://school.programmers.co.kr/learn/challenges

## 📌풀이 메모

### 01. 기존 풀이
```
function solution(n) {
    let str = n + "";
    let answer = [];
    
    for (let i = 0; i < str.length; i++) {
        answer[i] = Math.floor(str[str.length - i - 1]);
    }
    
    return answer;
}
```
- `Math.floor()`의 의도가 명확하지 않음.
- `Number()`로 수정하기

### 02. 개선 방향: 배열 메서드 활용
```
function solution(n) {
    return String(n)
        .split("")
        .reverse()
        .map(Number);
}
```
- `String(12345)` → `"12345"`
- `.split("")` → `["1","2","3","4","5"]`
- `.reverse()` → `["5","4","3","2","1"]`
- `.map(Number)` → `[5,4,3,2,1]`

### 03. 개선 방향: 나머지 연산 활용
```
function solution(n) {
    const answer = [];

    while (n > 0) {
        answer.push(n % 10); // 마지막 자리 숫자 추출
        n = Math.floor(n / 10); // 마지막 자리 제거
    }

    return answer;
}
```

### 04. 사전 지식
- `.split("")`: 문자열을 각 문자 단위로 잘라 배열로 반환
- `.reverse()`: 배열의 요소 순서를 거꾸로 뒤집음 (원본 배열 변경)
- `.map(Number)`: 배열의 각 요소에 Number()를 적용해 문자 → 숫자로 변환한 새 배열 반환
- `.push()`: 배열의 맨 끝에 요소를 추가 (원본 배열 변경)
