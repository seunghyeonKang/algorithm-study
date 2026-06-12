# [level 2] 피보나치 수 - 12945 

[문제 링크](https://school.programmers.co.kr/learn/courses/30/lessons/12945) 

### 성능 요약

메모리: 51.9 MB, 시간: 2.49 ms

### 구분

코딩테스트 연습 > 연습문제

### 채점결과

정확성: 100.0<br/>합계: 100.0 / 100.0

### 제출 일자

2026년 06월 13일 02:11:17

### 문제 설명

<p>피보나치 수는 F(0) = 0, F(1) = 1일 때, 1 이상의 n에 대하여 F(n) = F(n-1) + F(n-2) 가 적용되는 수 입니다. </p>

<p>예를들어 </p>

<ul>
<li>F(2) = F(0) + F(1) = 0 + 1 = 1</li>
<li>F(3) = F(1) + F(2) = 1 + 1 = 2</li>
<li>F(4) = F(2) + F(3) = 1 + 2 = 3</li>
<li>F(5) = F(3) + F(4) = 2 + 3 = 5</li>
</ul>

<p>와 같이 이어집니다.</p>

<p>2 이상의 n이 입력되었을 때, n번째 피보나치 수를 1234567으로 나눈 나머지를 리턴하는 함수, solution을 완성해 주세요.</p>

<h5>제한 사항</h5>

<ul>
<li>n은 2 이상 100,000 이하인 자연수입니다.</li>
</ul>

<h5>입출력 예</h5>
<table class="table">
        <thead><tr>
<th>n</th>
<th>return</th>
</tr>
</thead>
        <tbody><tr>
<td>3</td>
<td>2</td>
</tr>
<tr>
<td>5</td>
<td>5</td>
</tr>
</tbody>
      </table>
<h5>입출력 예 설명</h5>

<p>피보나치수는 0번째부터 0, 1, 1, 2, 3, 5, ... 와 같이 이어집니다.</p>

<h5>문제가 잘 안풀린다면😢</h5>

<p>힌트가 필요한가요? [코딩테스트 연습 힌트 모음집]으로 오세요! → <a href="https://school.programmers.co.kr/learn/courses/14743?itm_content=lesson12945" target="_blank" rel="noopener">클릭</a></p>


> 출처: 프로그래머스 코딩 테스트 연습, https://school.programmers.co.kr/learn/challenges

## 📌 Code Review 📌

### 01. 기존 풀이
```javascript
function solution(n) {
    let funcArr = [0, 1];
    for (let i = 2; i <= n; i++) {
        funcArr.push((funcArr[i-1] + funcArr[i-2]) % 1234567);
    }
    return funcArr[n] % 1234567;
}
```
- 마지막 줄의 `% 1234567`이 불필요하다.
- 배열 대신 변수 2개만 사용하면 공간복잡도가 $O(n)$에서 $O(1)$로 줄일 수 있다.

### 02. 개선 방향: 기존 코드 리팩도링
```javascript
function solution(n) {
    let a = 0; 
    let b = 1;
    
    for (let i = 2; i <= n; i++) {
        let sum = (a + b) % 1234567;
        a = b;
        b = sum;
    }
    
    return b;
}
```

### 03. 사전 지식
- 자바스크립트에서 안전하게 연산할 수 있는 최대 정수는 약 9000조($9 \times 10^{15}$)까지이다.
- 중간에 계속 `%` 연산을 적용해도 최종 결과는 변하지 않는다.

  `(A + B) % M = ((A % M) + (B % M)) % M`
