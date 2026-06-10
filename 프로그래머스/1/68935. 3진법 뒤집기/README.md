# [level 1] 3진법 뒤집기 - 68935 

[문제 링크](https://school.programmers.co.kr/learn/courses/30/lessons/68935) 

### 성능 요약

메모리: 43.8 MB, 시간: 0.08 ms

### 구분

코딩테스트 연습 > 월간 코드 챌린지 시즌1

### 채점결과

정확성: 100.0<br/>합계: 100.0 / 100.0

### 제출 일자

2026년 06월 10일 11:22:33

### 문제 설명

<p>자연수 n이 매개변수로 주어집니다. n을 3진법 상에서 앞뒤로 뒤집은 후, 이를 다시 10진법으로 표현한 수를 return 하도록 solution 함수를 완성해주세요.</p>

<hr>

<h5>제한사항</h5>

<ul>
<li>n은 1 이상 100,000,000 이하인 자연수입니다.</li>
</ul>

<hr>

<h5>입출력 예</h5>
<table class="table">
        <thead><tr>
<th>n</th>
<th>result</th>
</tr>
</thead>
        <tbody><tr>
<td>45</td>
<td>7</td>
</tr>
<tr>
<td>125</td>
<td>229</td>
</tr>
</tbody>
      </table>
<hr>

<h5>입출력 예 설명</h5>

<p>입출력 예 #1</p>

<ul>
<li>답을 도출하는 과정은 다음과 같습니다.</li>
</ul>
<table class="table">
        <thead><tr>
<th>n (10진법)</th>
<th>n (3진법)</th>
<th>앞뒤 반전(3진법)</th>
<th>10진법으로 표현</th>
</tr>
</thead>
        <tbody><tr>
<td>45</td>
<td>1200</td>
<td>0021</td>
<td>7</td>
</tr>
</tbody>
      </table>
<ul>
<li>따라서 7을 return 해야 합니다.</li>
</ul>

<p>입출력 예 #2</p>

<ul>
<li>답을 도출하는 과정은 다음과 같습니다.</li>
</ul>
<table class="table">
        <thead><tr>
<th>n (10진법)</th>
<th>n (3진법)</th>
<th>앞뒤 반전(3진법)</th>
<th>10진법으로 표현</th>
</tr>
</thead>
        <tbody><tr>
<td>125</td>
<td>11122</td>
<td>22111</td>
<td>229</td>
</tr>
</tbody>
      </table>
<ul>
<li>따라서 229를 return 해야 합니다.</li>
</ul>


> 출처: 프로그래머스 코딩 테스트 연습, https://school.programmers.co.kr/learn/challenges

## 📌 Code Review 📌

### 01. 기존 풀이
```
function solution(n) {
    return parseInt(n.toString(3).split("").reverse().join(""), 3);
}
```

### 02. 개선 방향: 구조 분해 할당 활용
```
const solution = (n) => {
    return parseInt([...n.toString(3)].reverse().join(""), 3);
}
```
- 현재 문제 상으로는 기능 차이가 없으며, 오히려 `split("")`가 성능상 아주 조금 빠르다.
- 다만 최근 자바스크립트(ES6+)에서는 문자열을 배열로 만들 때, 이모지나 외국어 처리를 할 때 깨짐 없이 인식하기 때문에, `split("")`보다 구조 분해 할당을 활용한 `[...]` 방식을 더 세련되고 안전한 코드로 평가한다. 

### 03. 다른 풀이: 수학적 풀이
```
function solution(n) {
    let answer = 0;
    while (n > 0) {
        answer = answer * 3 + (n % 3);
        n = Math.floor(n / 3);
    }
    return answer;
}
```

### 04. 사전 지식
- 3진법: 오직 0, 1, 2 세 개의 숫자만 사용하여 수를 표현하며, 자릿수가 올라갈 때마다 값이 3배씩 커지는 수 체계
- `n.toString(3)`: 10진수 숫자 `n`을 **3진법 형태의 문자열**로 변환하는 메서드
- `parseInt(문자열, 3)`: 3진법 형태의 문자열을 읽어서 **다시 10진수 정수**로 변환하는 함수
