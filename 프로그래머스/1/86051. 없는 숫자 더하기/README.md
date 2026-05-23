# [level 1] 없는 숫자 더하기 - 86051 

[문제 링크](https://school.programmers.co.kr/learn/courses/30/lessons/86051) 

### 성능 요약

메모리: 32.4 MB, 시간: 0.05 ms

### 구분

코딩테스트 연습 > 월간 코드 챌린지 시즌3

### 채점결과

정확성: 100.0<br/>합계: 100.0 / 100.0

### 제출 일자

2026년 05월 23일 10:32:45

### 문제 설명

<p>0부터 9까지의 숫자 중 일부가 들어있는 정수 배열 <code>numbers</code>가 매개변수로 주어집니다. <code>numbers</code>에서 찾을 수 없는 0부터 9까지의 숫자를 모두 찾아 더한 수를 return 하도록 solution 함수를 완성해주세요.</p>

<hr>

<h5>제한사항</h5>

<ul>
<li>1 ≤ <code>numbers</code>의 길이 ≤ 9

<ul>
<li>0 ≤ <code>numbers</code>의 모든 원소 ≤ 9</li>
<li><code>numbers</code>의 모든 원소는 서로 다릅니다.</li>
</ul></li>
</ul>

<hr>

<h5>입출력 예</h5>
<table class="table">
        <thead><tr>
<th>numbers</th>
<th>result</th>
</tr>
</thead>
        <tbody><tr>
<td>[1,2,3,4,6,7,8,0]</td>
<td>14</td>
</tr>
<tr>
<td>[5,8,4,0,6,7,9]</td>
<td>6</td>
</tr>
</tbody>
      </table>
<hr>

<h5>입출력 예 설명</h5>

<p><strong>입출력 예 #1</strong></p>

<ul>
<li>5, 9가 <code>numbers</code>에 없으므로, 5 + 9 = 14를 return 해야 합니다.</li>
</ul>

<p><strong>입출력 예 #2</strong></p>

<ul>
<li>1, 2, 3이 <code>numbers</code>에 없으므로, 1 + 2 + 3 = 6을 return 해야 합니다.</li>
</ul>


> 출처: 프로그래머스 코딩 테스트 연습, https://school.programmers.co.kr/learn/challenges

## 📌 Code Review 📌

### 01. 기존 풀이
```
function solution(numbers) {
    const total = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].reduce((acc, curr) => acc + curr, 0);
    
    return total - numbers.reduce((acc, curr) => acc + curr, 0);
}
```
- 시간복잡도가 O($N$)이고 간결하다.

### 02. 기존 풀이
```
function solution(numbers) {
    let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    
    for (let num of numbers) {
        arr = arr.filter((n) => n !== num);
    }
    
    return arr.reduce((acc, curr) => acc + curr, 0);
}
```
- 직관적이나, 시간복잡도가 O($N × M$)이기에 효율성이 낮다.

### 03. 개선 방향: `total` 값을 고정 상수로 처리
```
function solution(numbers) {
    const TOTAL_SUM = 45; // 0부터 9까지의 합
    return TOTAL_SUM - numbers.reduce((acc, curr) => acc + curr, 0);
}
```

### 04. 다른 풀이: `includes()`를 활용한 정공법
```
function solution(numbers) {
    let answer = 0;

    for(let i = 0; i <= 9; i++) {
        if(!numbers.includes(i)) answer += i;
    }

    return answer;
}
```
- O(10 × M) `(M: numbers 길이)`
- 시간복잡도가 평균 O(1)인 `Set.has​`를 사용하는 것을 더 권장한다.

### 05. 개선 방향: `Set.has()​`를 활용한 정공법
```
function solution(numbers) {
    const set = new Set(numbers);
    let answer = 0;
    
    for (let i = 0; i <= 9; i++) {
        if (!set.has(i)) answer += i;
    }
    
    return answer;
}
```

### 06. 사전 지식
- `배열.includes(찾을값)`: 배열에 특정 값이 포함되어 있는지 확인하는 메서드
- `Set`: 중복을 허용하지 않는 값들의 집합을 다루는 JavaScript 내장 자료구조
- `Set.prototype.has()`: `Set` 안에 특정 값이 존재하는지 확인하는 메서드
