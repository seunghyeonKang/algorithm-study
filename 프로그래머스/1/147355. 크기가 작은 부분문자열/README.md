# [level 1] 크기가 작은 부분문자열 - 147355 

[문제 링크](https://school.programmers.co.kr/learn/courses/30/lessons/147355) 

### 성능 요약

메모리: 35.6 MB, 시간: 1.93 ms

### 구분

코딩테스트 연습 > 연습문제

### 채점결과

정확성: 100.0<br/>합계: 100.0 / 100.0

### 제출 일자

2026년 06월 05일 00:04:24

### 문제 설명

<p>숫자로 이루어진 문자열 <code>t</code>와 <code>p</code>가 주어질 때, <code>t</code>에서 <code>p</code>와 길이가 같은 부분문자열 중에서, 이 부분문자열이 나타내는 수가 <code>p</code>가 나타내는 수보다 작거나 같은 것이 나오는 횟수를 return하는 함수 solution을 완성하세요.</p>

<p>예를 들어, <code>t</code>="3141592"이고 <code>p</code>="271" 인 경우, <code>t</code>의 길이가 3인 부분 문자열은 314, 141, 415, 159, 592입니다. 이 문자열이 나타내는 수 중 271보다 작거나 같은 수는 141, 159 2개 입니다.</p>

<hr>

<h5>제한사항</h5>

<ul>
<li>1 ≤ <code>p</code>의 길이 ≤ 18</li>
<li><code>p</code>의 길이 ≤ <code>t</code>의 길이 ≤ 10,000</li>
<li><code>t</code>와 <code>p</code>는 숫자로만 이루어진 문자열이며, 0으로 시작하지 않습니다.</li>
</ul>

<hr>

<h5>입출력 예</h5>
<table class="table">
        <thead><tr>
<th>t</th>
<th>p</th>
<th>result</th>
</tr>
</thead>
        <tbody><tr>
<td>"3141592"</td>
<td>"271"</td>
<td>2</td>
</tr>
<tr>
<td>"500220839878"</td>
<td>"7"</td>
<td>8</td>
</tr>
<tr>
<td>"10203"</td>
<td>"15"</td>
<td>3</td>
</tr>
</tbody>
      </table>
<hr>

<h5>입출력 예 설명</h5>

<p>입출력 예 #1<br>
본문과 같습니다.</p>

<p>입출력 예 #2<br>
<code>p</code>의 길이가 1이므로 <code>t</code>의 부분문자열은 "5", "0", 0", "2", "2", "0", "8", "3", "9", "8", "7", "8"이며 이중 7보다 작거나 같은 숫자는 "5", "0", "0", "2", "2", "0", "3", "7" 이렇게 8개가 있습니다.</p>

<p>입출력 예 #3<br>
<code>p</code>의 길이가 2이므로 <code>t</code>의 부분문자열은 "10", "02", "20", "03"이며, 이중 15보다 작거나 같은 숫자는 "10", "02", "03" 이렇게 3개입니다. "02"와 "03"은 각각 2, 3에 해당한다는 점에 주의하세요</p>


> 출처: 프로그래머스 코딩 테스트 연습, https://school.programmers.co.kr/learn/challenges

## 📌 Code Review 📌

### 01. 기존 풀이
```
function solution(t, p) {
    let answer = 0;
    const pNum = Number(p);
    for (let i = 0; i < t.length - p.length + 1; i++) {
        if (pNum >= Number(t.slice(i, i + p.length))) answer++;
    }
    return answer;
}
```
→ 정수 정밀도 한계: `Number` 타입은 안전하게 표현할 수 있는 최대 정수 값이 ($2^{53} - 1$)(16자리)이기 때문에, 문자열이 17~18자리 숫자로 나오면 `Number()` 변환 과정에서 정밀도가 손실되어 크기 비교가 부정확해질 수 있다.

### 02. 개선 방향: `BigInt` 사용
```
function solution(t, p) {
    let answer = 0;
    const pNum = BigInt(p);
    const pLen = p.length;
    
    for (let i = 0; i <= t.length - pLen; i++) {
        if (pNum >= BigInt(t.slice(i, i + pLen))) {
            answer++;
        }
    }
    return answer;
}
```

### 03. 다른 풀이: 문자열 자체로 비교
```
function solution(t, p) {
    let answer = 0;
    const pLen = p.length;
    
    for (let i = 0; i <= t.length - pLen; i++) {
        const subStr = t.slice(i, i + pLen);
        if (subStr <= p) {
            answer++;
        }
    }
    return answer;
}
```
- 두 문자열의 길이가 항상 같을 때 문자열로도 비교를 할 수 있다.
- 유니코드 값을 기준으로 비교하기 때문에, 문자열 길이가 다른 경우에는 숫자 비교가 이상해진다.

### 04. 사전 지식
- 문자열도 비교를 할 수 있다.
