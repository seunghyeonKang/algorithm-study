# [level 1] 음양 더하기 - 76501 

[문제 링크](https://school.programmers.co.kr/learn/courses/30/lessons/76501) 

### 성능 요약

메모리: 32.3 MB, 시간: 0.20 ms

### 구분

코딩테스트 연습 > 월간 코드 챌린지 시즌2

### 채점결과

정확성: 100.0<br/>합계: 100.0 / 100.0

### 제출 일자

2026년 05월 22일 11:05:04

### 문제 설명

<p>어떤 정수들이 있습니다. 이 정수들의 절댓값을 차례대로 담은 정수 배열 absolutes와 이 정수들의 부호를 차례대로 담은 불리언 배열 signs가 매개변수로 주어집니다. 실제 정수들의 합을 구하여 return 하도록 solution 함수를 완성해주세요.</p>

<hr>

<h5>제한사항</h5>

<ul>
<li>absolutes의 길이는 1 이상 1,000 이하입니다.

<ul>
<li>absolutes의 모든 수는 각각 1 이상 1,000 이하입니다.</li>
</ul></li>
<li>signs의 길이는 absolutes의 길이와 같습니다.

<ul>
<li><code>signs[i]</code> 가 참이면 <code>absolutes[i]</code> 의 실제 정수가 양수임을, 그렇지 않으면 음수임을 의미합니다.</li>
</ul></li>
</ul>

<hr>

<h5>입출력 예</h5>
<table class="table">
        <thead><tr>
<th>absolutes</th>
<th>signs</th>
<th>result</th>
</tr>
</thead>
        <tbody><tr>
<td><code>[4,7,12]</code></td>
<td><code>[true,false,true]</code></td>
<td>9</td>
</tr>
<tr>
<td><code>[1,2,3]</code></td>
<td><code>[false,false,true]</code></td>
<td>0</td>
</tr>
</tbody>
      </table>
<hr>

<h5>입출력 예 설명</h5>

<p><strong>입출력 예 #1</strong></p>

<ul>
<li>signs가 <code>[true,false,true]</code> 이므로, 실제 수들의 값은 각각 4, -7, 12입니다.</li>
<li>따라서 세 수의 합인 9를 return 해야 합니다.</li>
</ul>

<p><strong>입출력 예 #2</strong></p>

<ul>
<li>signs가 <code>[false,false,true]</code> 이므로, 실제 수들의 값은 각각 -1, -2, 3입니다.</li>
<li>따라서 세 수의 합인 0을 return 해야 합니다.</li>
</ul>


> 출처: 프로그래머스 코딩 테스트 연습, https://school.programmers.co.kr/learn/challenges

## 📌 Code Review 📌

### 01. 기존 풀이
```
function solution(absolutes, signs) {
    for (let i in absolutes) {
        if (signs[i] === false) absolutes[i] = -absolutes[i];
    }
    
    return absolutes.reduce((acc, curr) => acc + curr);
}
```
1. `for...in` 대신 일반 `for` 루프나 `forEach` 사용하기
2. 원본 데이터 변조(Mutation) 방지하기
3. `reduce` 초기값 설정하기

### 02. 개선 방향: `forEach` 활용하여 원래 방식 보완
```
function solution(absolutes, signs) {
    absolutes.forEach((num, i) => {
        if (signs[i] === false) {
            absolutes[i] = -num;
        }
    });
    
    return absolutes.reduce((acc, curr) => acc + curr, 0);
}
```

### 03. 개선 방향: `map` 활용하여 원래 방식 보완
```
function solution(absolutes, signs) {
    const realNumbers = absolutes.map((num, i) => signs[i] ? num : -num);
    
    return realNumbers.reduce((acc, curr) => acc + curr, 0);
}
```

### 04. 개선 방향: `reduce`와 인덱스 활용하여 깔끔하게 처리
```
function solution(absolutes, signs) {
    return absolutes.reduce((acc, curr, i) => acc + (signs[i] ? curr : -curr), 0);
}
```

### 05. 사전 지식
- `forEach`: 배열의 모든 요소를 순회하며 단순히 지정된 작업을 실행할 뿐, 아무것도 반환하지 않는(undefined) 반복문 전용 메서드이다.
- `map`: 배열의 모든 요소를 하나씩 가공하여 길이와 순서가 똑같은 **새로운 배열**을 만들어 반환한다.
- `reduce`: 배열의 요소를 하나씩 줄여가며 누적 계산을 수행하고, 최종적으로 **단 하나의 값**(숫자, 객체, 배열 등)으로 뭉쳐서 반환한다.
