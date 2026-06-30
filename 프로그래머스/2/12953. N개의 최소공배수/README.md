
# [level 2] N개의 최소공배수 - 12953 

[문제 링크](https://school.programmers.co.kr/learn/courses/30/lessons/12953) 

### 성능 요약

메모리: 48.8 MB, 시간: 1.13 ms

### 구분

코딩테스트 연습 > 연습문제

### 채점결과

정확성: 100.0<br/>합계: 100.0 / 100.0

### 제출 일자

2026년 06월 29일 11:30:47

### 문제 설명

<p>두 수의 최소공배수(Least Common Multiple)란 입력된 두 수의 배수 중 공통이 되는 가장 작은 숫자를 의미합니다. 예를 들어 2와 7의 최소공배수는 14가 됩니다. 정의를 확장해서, n개의 수의 최소공배수는 n 개의 수들의 배수 중 공통이 되는 가장 작은 숫자가 됩니다. n개의 숫자를 담은 배열 arr이 입력되었을 때 이 수들의 최소공배수를 반환하는 함수, solution을 완성해 주세요. </p>

<h5>제한 사항</h5>

<ul>
<li>arr은 길이 1이상, 15이하인 배열입니다.</li>
<li>arr의 원소는 100 이하인 자연수입니다.</li>
</ul>

<h5>입출력 예</h5>
<table class="table">
        <thead><tr>
<th>arr</th>
<th>result</th>
</tr>
</thead>
        <tbody><tr>
<td>[2,6,8,14]</td>
<td>168</td>
</tr>
<tr>
<td>[1,2,3]</td>
<td>6</td>
</tr>
</tbody>
      </table>

> 출처: 프로그래머스 코딩 테스트 연습, https://school.programmers.co.kr/learn/challenges

## 📌 Code Review 📌

### 01. 기존 풀이
```javascript
function solution(arr) {
    let numList = [...arr].sort((a, b) => b - a);
    let max = numList[0];
    
    let answer = 0;
    let i = 1;
    while (answer === 0) {
        for (let j = 1; j < numList.length ; j++) {
            if (max * i % numList[j] !== 0) break;
            if (j === numList.length - 1) answer = max * i;
        }
        i++;
    }
    
    return answer;
}
```
- 배열의 길이가 1일 때 무한 루프 위험이 있다.
- 유클리드 호제법을 활용하여 효율성(시간 복잡도)을 높이자.

### 02. 개선 방향: 유클리드 호제법 활용
```javascript
function solution(arr) {
    // 최대공약수(GCD)를 구하는 함수 (유클리드 호제법)
    const gcd = (a, b) => b === 0 ? a : gcd(b, a % b);
    
    // 최소공배수(LCM)를 구하는 함수
    const lcm = (a, b) => (a * b) / gcd(a, b);

    // reduce를 이용해 배열의 모든 수를 순회하며 최소공배수를 누적
    return arr.reduce((acc, cur) => lcm(acc, cur));
}
```
