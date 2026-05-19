# [level 1] 서울에서 김서방 찾기 - 12919 

[문제 링크](https://school.programmers.co.kr/learn/courses/30/lessons/12919) 

### 성능 요약

메모리: 32.5 MB, 시간: 0.16 ms

### 구분

코딩테스트 연습 > 연습문제

### 채점결과

정확성: 100.0<br/>합계: 100.0 / 100.0

### 제출 일자

2026년 05월 19일 11:20:17

### 문제 설명

<p>String형 배열 seoul의 element중 "Kim"의 위치 x를 찾아, "김서방은 x에 있다"는 String을 반환하는 함수, solution을 완성하세요. seoul에 "Kim"은 오직 한 번만 나타나며 잘못된 값이 입력되는 경우는 없습니다.</p>

<h5>제한 사항</h5>

<ul>
<li>seoul은 길이 1 이상, 1000 이하인 배열입니다.</li>
<li>seoul의 원소는 길이 1 이상,  20 이하인 문자열입니다.</li>
<li>"Kim"은 반드시 seoul 안에 포함되어 있습니다.</li>
</ul>

<h5>입출력 예</h5>
<table class="table">
        <thead><tr>
<th>seoul</th>
<th>return</th>
</tr>
</thead>
        <tbody><tr>
<td>["Jane", "Kim"]</td>
<td>"김서방은 1에 있다"</td>
</tr>
</tbody>
      </table>

> 출처: 프로그래머스 코딩 테스트 연습, https://school.programmers.co.kr/learn/challenges

## 📌 Code Review 📌

### 01. 기존 풀이
```
function solution(seoul) {
    let x = 0;
    for (let char of seoul) {
        if (char === "Kim") return `김서방은 ${x}에 있다`
        x++;
    }
}
```
- 변수명 `char` 대신 `name`으로 수정
- "Kim"을 못 찾았을 때 `undefined`를 반환하지 않도록 방어적인 코드 작성 습관 만들기

### 02. 개선 방향: `indexOf()` 활용
```
function solution(seoul) {
    const x = seoul.indexOf("Kim");
    return `김서방은 ${x}에 있다`;
}
```

### 03. 다른 풀이: `findIndex()` 활용
```
function solution(seoul) {
    const x = seoul.findIndex(name => name === "Kim");
    return `김서방은 ${x}에 있다`;
}
```

### 04. 사전 지식
- `.indexOf()`: 배열에서 해당 값의 첫 번째 인덱스를 반환
- `.findIndex()`: 배열에서 조건식(콜백 함수)을 만족하는 최초의 요소의 위치를 반환
