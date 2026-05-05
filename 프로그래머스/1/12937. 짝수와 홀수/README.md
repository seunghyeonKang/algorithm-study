# [level 1] 짝수와 홀수 - 12937 

[문제 링크](https://school.programmers.co.kr/learn/courses/30/lessons/12937) 

### 성능 요약

메모리: 77.9 MB, 시간: 0.02 ms

### 구분

코딩테스트 연습 > 연습문제

### 채점결과

정확성: 100.0<br/>합계: 100.0 / 100.0

### 제출 일자

2026년 05월 05일 12:24:42

### 문제 설명

<p>정수 num이 짝수일 경우 "Even"을 반환하고 홀수인 경우 "Odd"를 반환하는 함수, solution을 완성해주세요.</p>

<h5>제한 조건</h5>

<ul>
<li>num은 int 범위의 정수입니다.</li>
<li>0은 짝수입니다.</li>
</ul>

<h5>입출력 예</h5>
<table class="table">
        <thead><tr>
<th>num</th>
<th style="text-align: center">return</th>
</tr>
</thead>
        <tbody><tr>
<td>3</td>
<td style="text-align: center">"Odd"</td>
</tr>
<tr>
<td>4</td>
<td style="text-align: center">"Even"</td>
</tr>
</tbody>
      </table>

> 출처: 프로그래머스 코딩 테스트 연습, https://school.programmers.co.kr/learn/challenges

## 📌풀이 메모

**JavaScript**의 경우, truthy/falsy 개념이 있어서 숫자를 조건식에 바로 쓸 수 있다.
```
num % 2  // 결과: 숫자 (1 또는 0 또는 -1), 0은 falsy, 0이 아닌 수는 truthy이기 때문에 ? :에 바로 넣어도 동작한다.
```
**Java**는 강타입 언어라서 조건식에는 반드시 boolean 타입이 와야 한다.
```
if (num % 2) // 컴파일 에러: int는 boolean이 아님
if (num % 2 == 0) // boolean이기 때문에 정상 동작
```
