# [level 1] 약수의 개수와 덧셈 - 77884 

[문제 링크](https://school.programmers.co.kr/learn/courses/30/lessons/77884) 

### 성능 요약

메모리: 35.5 MB, 시간: 2.53 ms

### 구분

코딩테스트 연습 > 월간 코드 챌린지 시즌2

### 채점결과

정확성: 100.0<br/>합계: 100.0 / 100.0

### 제출 일자

2026년 05월 29일 12:37:56

### 문제 설명

<p>두 정수 <code>left</code>와 <code>right</code>가 매개변수로 주어집니다. <code>left</code>부터 <code>right</code>까지의 모든 수들 중에서, 약수의 개수가 짝수인 수는 더하고, 약수의 개수가 홀수인 수는 뺀 수를 return 하도록 solution 함수를 완성해주세요.</p>

<hr>

<h5>제한사항</h5>

<ul>
<li>1 ≤ <code>left</code> ≤ <code>right</code> ≤ 1,000</li>
</ul>

<hr>

<h5>입출력 예</h5>
<table class="table">
        <thead><tr>
<th>left</th>
<th>right</th>
<th>result</th>
</tr>
</thead>
        <tbody><tr>
<td>13</td>
<td>17</td>
<td>43</td>
</tr>
<tr>
<td>24</td>
<td>27</td>
<td>52</td>
</tr>
</tbody>
      </table>
<hr>

<h5>입출력 예 설명</h5>

<p><strong>입출력 예 #1</strong></p>

<ul>
<li>다음 표는 13부터 17까지의 수들의 약수를 모두 나타낸 것입니다.</li>
</ul>
<table class="table">
        <thead><tr>
<th>수</th>
<th>약수</th>
<th>약수의 개수</th>
</tr>
</thead>
        <tbody><tr>
<td>13</td>
<td>1, 13</td>
<td>2</td>
</tr>
<tr>
<td>14</td>
<td>1, 2, 7, 14</td>
<td>4</td>
</tr>
<tr>
<td>15</td>
<td>1, 3, 5, 15</td>
<td>4</td>
</tr>
<tr>
<td>16</td>
<td>1, 2, 4, 8, 16</td>
<td>5</td>
</tr>
<tr>
<td>17</td>
<td>1, 17</td>
<td>2</td>
</tr>
</tbody>
      </table>
<ul>
<li>따라서, 13 + 14 + 15 - 16 + 17 = 43을 return 해야 합니다.</li>
</ul>

<p><strong>입출력 예 #2</strong></p>

<ul>
<li>다음 표는 24부터 27까지의 수들의 약수를 모두 나타낸 것입니다.</li>
</ul>
<table class="table">
        <thead><tr>
<th>수</th>
<th>약수</th>
<th>약수의 개수</th>
</tr>
</thead>
        <tbody><tr>
<td>24</td>
<td>1, 2, 3, 4, 6, 8, 12, 24</td>
<td>8</td>
</tr>
<tr>
<td>25</td>
<td>1, 5, 25</td>
<td>3</td>
</tr>
<tr>
<td>26</td>
<td>1, 2, 13, 26</td>
<td>4</td>
</tr>
<tr>
<td>27</td>
<td>1, 3, 9, 27</td>
<td>4</td>
</tr>
</tbody>
      </table>
<ul>
<li>따라서, 24 - 25 + 26 + 27 = 52를 return 해야 합니다.</li>
</ul>


> 출처: 프로그래머스 코딩 테스트 연습, https://school.programmers.co.kr/learn/challenges

## 📌 Code Review 📌

### 01. 기존 풀이
```
function solution(left, right) {
    let answer = 0;
    let count = 0;
    
    for (let num = left; num <= right; num++) {
        count = 0;
        for (let i = 1; i <= num; i++) {
            if (num % i === 0) count++;
        }
        if (count % 2 === 0) {
            answer += num;
        } else {
            answer -= num;
        }
    }
    
    return answer;
}
```
- count 변수 선언 위치를 사용 범위(scope) 안으로 이동

### 02. 다른 풀이: 수학적 최적화 - 약수의 홀짝 원리
```
function solution(left, right) {
    let answer = 0;
    
    for (let num = left; num <= right; num++) {
        // 제곱근이 정수이면 약수의 개수는 홀수이다.
        if (Number.isInteger(Math.sqrt(num))) {
            answer -= num;
        } else {
            answer += num;
        }
    }
    
    return answer;
}
```

### 03. 사전 지식
- 약수의 개수가 홀수인 수는 완전제곱수뿐이다.
- `Number.isInteger()`: 전달된 값이 정수(Integer)인지 아닌지 판별하여 true 또는 false를 반환하는 메서드
- `Math.sqrt()`: 전달된 숫자의 제곱근(Square Root, $\sqrt{x}$)을 계산해서 반환하는 메서드
- JavaScript에서 원시값은 GC 대상이 아니다.
  - 원시값은 힙(heap)에 할당되지 않고 스택(stack)에 저장되기 때문에, 스코프가 끝나면 그냥 스택에서 pop될 뿐 GC가 개입하지 않는다.
  - 원시값: `number`, `string`, `boolean`, `null`, `undefined`, `symbol`, `bigint`
  - 객체: `object`, `array`, `function` 등
