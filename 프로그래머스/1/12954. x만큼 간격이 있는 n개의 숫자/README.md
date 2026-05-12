# [level 1] x만큼 간격이 있는 n개의 숫자 - 12954 

[문제 링크](https://school.programmers.co.kr/learn/courses/30/lessons/12954) 

### 성능 요약

메모리: 32.6 MB, 시간: 0.10 ms

### 구분

코딩테스트 연습 > 연습문제

### 채점결과

정확성: 100.0<br/>합계: 100.0 / 100.0

### 제출 일자

2026년 05월 12일 11:48:00

### 문제 설명

<p>함수 solution은 정수 x와 자연수 n을 입력 받아, x부터 시작해 x씩 증가하는 숫자를 n개 지니는 리스트를 리턴해야 합니다. 다음 제한 조건을 보고, 조건을 만족하는 함수, solution을 완성해주세요.</p>

<h4>제한 조건</h4>

<ul>
<li>x는 -10000000 이상, 10000000 이하인 정수입니다.</li>
<li>n은 1000 이하인 자연수입니다.</li>
</ul>

<h4>입출력 예</h4>
<table class="table">
        <thead><tr>
<th>x</th>
<th>n</th>
<th>answer</th>
</tr>
</thead>
        <tbody><tr>
<td>2</td>
<td>5</td>
<td>[2,4,6,8,10]</td>
</tr>
<tr>
<td>4</td>
<td>3</td>
<td>[4,8,12]</td>
</tr>
<tr>
<td>-4</td>
<td>2</td>
<td>[-4, -8]</td>
</tr>
</tbody>
      </table>

> 출처: 프로그래머스 코딩 테스트 연습, https://school.programmers.co.kr/learn/challenges

## 📌풀이 메모

### 01. 기존 풀이
```
function solution(x, n) {
    let answer = [];

    for (let i = 1; i <= n; i++) {
        answer.push(x * i);
    }

    return answer;
}
```

### 02. 다른 풀이: 배열 메서드 활용 - `Array.from()`
```
function solution(x, n) {
    return Array.from({ length: n }, (_, i) => x * (i + 1));
}
```

### 03. 다른 풀이: 배열 메서드 활용 - `fill()`과 `map()`
```
function solution(x, n) {
    return Array(n).fill(x).map((v, i) => v * (i + 1));
}
```

### 04. 사전 지식
- `Array(n)` : 길이가 n인 빈 슬롯 배열 생성
- `Array.from()` : 이터러블 또는 유사 배열을 실제 배열로 변환
- `.fill()` : 배열의 모든 요소를 특정 값으로 채움
- `.map()` : 배열의 각 요소를 콜백 함수로 변환한 새 배열 반환
- 대부분의 자바스크립트 표준 배열 메서드의 **콜백함수의 인자**가 아래 규칙을 따른다. (예외: `reduce` 등)
  - **`첫 번째 인자`**: 현재 처리 중인 요소의 값 $(Value)$
  - **`두 번째 인자`**: 현재 처리 중인 인덱스 $(Index)$
  - **`세 번째 인자`**: 메서드를 호출한 배열 자체 $(Array)$
