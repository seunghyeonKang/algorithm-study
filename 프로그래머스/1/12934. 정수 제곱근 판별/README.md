# [level 1] 정수 제곱근 판별 - 12934 

[문제 링크](https://school.programmers.co.kr/learn/courses/30/lessons/12934) 

### 성능 요약

메모리: 32.3 MB, 시간: 0.03 ms

### 구분

코딩테스트 연습 > 연습문제

### 채점결과

정확성: 100.0<br/>합계: 100.0 / 100.0

### 제출 일자

2026년 05월 10일 09:19:23

### 문제 설명

<p>임의의 양의 정수 n에 대해, n이 어떤 양의 정수 x의 제곱인지 아닌지 판단하려 합니다.<br>
n이 양의 정수 x의 제곱이라면 x+1의 제곱을 리턴하고, n이 양의 정수 x의 제곱이 아니라면 -1을 리턴하는 함수를 완성하세요.</p>

<h5>제한 사항</h5>

<ul>
<li>n은 1이상,  50000000000000 이하인 양의 정수입니다.</li>
</ul>

<h5>입출력 예</h5>
<table class="table">
        <thead><tr>
<th>n</th>
<th style="text-align: center">return</th>
</tr>
</thead>
        <tbody><tr>
<td>121</td>
<td style="text-align: center">144</td>
</tr>
<tr>
<td>3</td>
<td style="text-align: center">-1</td>
</tr>
</tbody>
      </table>
<h6>입출력 예 설명</h6>

<p><strong>입출력 예#1</strong><br>
121은 양의 정수 11의 제곱이므로, (11+1)를 제곱한 144를 리턴합니다.</p>

<p><strong>입출력 예#2</strong><br>
3은 양의 정수의 제곱이 아니므로, -1을 리턴합니다.</p>


> 출처: 프로그래머스 코딩 테스트 연습, https://school.programmers.co.kr/learn/challenges

## 📌풀이 메모

### 01. 기존 풀이
```
function solution(n) {
    let answer = 0;
    
    if (Math.sqrt(n) === Math.floor(Math.sqrt(n))) {
        answer = (Math.sqrt(n) + 1) ** 2;
    } else {
        answer = -1;
    }
    
    return answer;
}
```
→ `Math.sqrt(n)`을 반복 호출중

→ 부동소수점 오차 위험

(JavaScript의 Math.sqrt()는 부동소수점 연산을 사용하기 때문에, 큰 수에서 미세한 오차가 발생할 수 있다.)

### 02. 개선 방향: `floor` 대신 `%`로 정수 확인
```
function solution(n) {
    const x = Math.sqrt(n);
    
    if (x % 1 === 0) {
        return (x + 1) ** 2;
    }
    
    return -1;
}
```

### 03. 개선 방향: 부동소수점 오차 검증
```
function solution(n) {
    const sqrt = Math.round(Math.sqrt(n));

    if (sqrt * sqrt === n) {
        return (sqrt + 1) ** 2;
    }

    return -1;
}
```

### 04. 사전 지식
- `Math.sqrt()`: 주어진 수의 제곱근(Square Root)을 반환하는 함수
- `Math.round()`: 소수점 이하를 반올림하여 가장 가까운 정수를 반환하는 함수
