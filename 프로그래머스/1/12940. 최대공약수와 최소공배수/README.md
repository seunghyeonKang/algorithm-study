# [level 1] 최대공약수와 최소공배수 - 12940 

[문제 링크](https://school.programmers.co.kr/learn/courses/30/lessons/12940) 

### 성능 요약

메모리: 32.8 MB, 시간: 0.19 ms

### 구분

코딩테스트 연습 > 연습문제

### 채점결과

정확성: 100.0<br/>합계: 100.0 / 100.0

### 제출 일자

2026년 06월 06일 17:00:30

### 문제 설명

<p>두 수를 입력받아 두 수의 최대공약수와 최소공배수를 반환하는 함수, solution을 완성해 보세요. 배열의 맨 앞에 최대공약수, 그다음 최소공배수를 넣어 반환하면 됩니다. 예를 들어 두 수 3, 12의 최대공약수는 3, 최소공배수는 12이므로 solution(3, 12)는 [3, 12]를 반환해야 합니다.</p>

<h5>제한 사항</h5>

<ul>
<li>두 수는 1이상 1000000이하의 자연수입니다.</li>
</ul>

<h5>입출력 예</h5>
<table class="table">
        <thead><tr>
<th>n</th>
<th>m</th>
<th>return</th>
</tr>
</thead>
        <tbody><tr>
<td>3</td>
<td>12</td>
<td>[3, 12]</td>
</tr>
<tr>
<td>2</td>
<td>5</td>
<td>[1, 10]</td>
</tr>
</tbody>
      </table>
<h5>입출력 예 설명</h5>

<p>입출력 예 #1<br>
위의 설명과 같습니다.</p>

<p>입출력 예 #2<br>
자연수 2와 5의 최대공약수는 1, 최소공배수는 10이므로 [1, 10]을 리턴해야 합니다.</p>


> 출처: 프로그래머스 코딩 테스트 연습, https://school.programmers.co.kr/learn/challenges

## 📌 Code Review 📌

### 01. 기존 풀이
```
function solution(n, m) {
    let max = Math.max(n, m);
    let min = Math.min(n, m);
    let a;
    for (let i = min; i > 0; i--) {
        if (max % i === 0 && min % i === 0) {
            a = i;
            break;
        }
    }
    let answer = [];
    answer.push(a);
    answer.push(max * min / a);
    return answer;
}
```
→ 시간 복잡도가 현재 방식은 O(min(n, m))이다. 유클리드 호재법을 활용하면 O(log(min(n, m)))으로 훨씬 빠르다.

### 02. 개선 방향: 유클리드 호제법 적용
```
function solution(n, m) {
    const getGCD = (a, b) => {
        while (b !== 0) {
            let r = a % b;
            a = b;
            b = r;
        }
        return a;
    };
    
    const gcd = getGCD(n, m);
    const lcm = (n * m) / gcd;
    
    return [gcd, lcm];
}
```

### 03. 다른 풀이: 재귀 함수를 활용
```
function solution(n, m) {
    function gcd(a, b) {
        return b === 0 ? a : gcd(a, b % a);
    }

    const g = gcd(n, m);
    return [g, (n * m) / g];
}
```
- 재귀 깊이가 깊어지면 스택 오버플로우 가능성이 있다.
- 물론 이 문제는 입력이 최대 1,000,000이라 실제로는 문제 없다.

### 04. 사전 지식
- 유클리드 호제법 원리: $A$를 $B$로 나눈 나머지를 $R$이라고 할 때, $A$와 $B$의 최대공약수는 $B$와 $R$의 최대공약수와 같다. 이 과정을 나머지가 0이 될 때까지 반복하는 방법이다.
