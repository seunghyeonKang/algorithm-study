# [level 2] 멀리 뛰기 - 12914 

[문제 링크](https://school.programmers.co.kr/learn/courses/30/lessons/12914) 

### 성능 요약

메모리: 44.2 MB, 시간: 0.13 ms

### 구분

코딩테스트 연습 > 연습문제

### 채점결과

정확성: 100.0<br/>합계: 100.0 / 100.0

### 제출 일자

2026년 07월 01일 16:40:06

### 문제 설명

<p>효진이는 멀리 뛰기를 연습하고 있습니다. 효진이는 한번에 1칸, 또는 2칸을 뛸 수 있습니다. 칸이 총 4개 있을 때, 효진이는<br>
(1칸, 1칸, 1칸, 1칸)<br>
(1칸, 2칸, 1칸)<br>
(1칸, 1칸, 2칸)<br>
(2칸, 1칸, 1칸)<br>
(2칸, 2칸)<br>
의 5가지 방법으로 맨 끝 칸에 도달할 수 있습니다. 멀리뛰기에 사용될 칸의 수 n이 주어질 때, 효진이가 끝에 도달하는 방법이 몇 가지인지 알아내, 여기에 1234567를 나눈 나머지를 리턴하는 함수, solution을 완성하세요. 예를 들어 4가 입력된다면, 5를 return하면 됩니다.</p>

<h5>제한 사항</h5>

<ul>
<li>n은 1 이상, 2000 이하인 정수입니다.</li>
</ul>

<h5>입출력 예</h5>
<table class="table">
        <thead><tr>
<th>n</th>
<th>result</th>
</tr>
</thead>
        <tbody><tr>
<td>4</td>
<td>5</td>
</tr>
<tr>
<td>3</td>
<td>3</td>
</tr>
</tbody>
      </table>
<h5>입출력 예 설명</h5>

<p>입출력 예 #1<br>
위에서 설명한 내용과 같습니다.</p>

<p>입출력 예 #2<br>
(2칸, 1칸)<br>
(1칸, 2칸)<br>
(1칸, 1칸, 1칸)<br>
총 3가지 방법으로 멀리 뛸 수 있습니다.</p>


> 출처: 프로그래머스 코딩 테스트 연습, https://school.programmers.co.kr/learn/challenges

## 📌 Code Review 📌

### 01. 힌트를 얻은 기존 풀이
```javascript
function solution(n) {
    let firstNum = 1;
    let secondNum = 1;
    
    for (let i = 2; i <= n; i++) {
        const temp = firstNum + secondNum;
        firstNum = secondNum;
        secondNum = temp % 1234567;
    }
    
    return secondNum;
}
```
- **피보나치 수열**이라는 사실은 직접 알아내지 못했다.
  - 작고 극단적인 수(Base Case)부터 나열해보자.

    ```
    n = 1 → 1
    n = 2 → 2
    n = 3 → 3
    n = 4 → 5
    n = 5 → 8
    ```
  - '마지막 단계'를 기준으로 사건을 쪼개어 DP(동적 계획법)식 사고를 해보자.

     `n번째 칸에 가는 총 방법의 수 = (n-1)번째 칸까지 오는 방법의 수 + (n-2)번째 칸까지 오는 방법의 수`

### 02. 개선 방향: 구조 분해 할당 활용
```javascript
function solution(n) {
    let firstNum = 1;
    let secondNum = 1;
    
    for (let i = 2; i <= n; i++) {
        [firstNum, secondNum] = [secondNum, (firstNum + secondNum) % 1234567];
    }
    
    return secondNum;
}
```

### 03. 사전 지식
- `DP(Dynamic Programming, 동적 계획법)`: 한 번 푼 문제는 배열 같은 곳에 기록(Memo)해 두고 꺼내 쓰는 알고리즘 설계 기법
