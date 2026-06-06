# [level 2] 이진 변환 반복하기 - 70129 

[문제 링크](https://school.programmers.co.kr/learn/courses/30/lessons/70129) 

### 성능 요약

메모리: 38.5 MB, 시간: 5.72 ms

### 구분

코딩테스트 연습 > 월간 코드 챌린지 시즌1

### 채점결과

정확성: 100.0<br/>합계: 100.0 / 100.0

### 제출 일자

2026년 06월 07일 01:49:35

### 문제 설명

<p>0과 1로 이루어진 어떤 문자열 x에 대한 이진 변환을 다음과 같이 정의합니다.</p>

<ol>
<li>x의 모든 0을 제거합니다.</li>
<li>x의 길이를 c라고 하면, x를 "c를 2진법으로 표현한 문자열"로 바꿉니다.</li>
</ol>

<p>예를 들어, <code>x = "0111010"</code>이라면, x에 이진 변환을 가하면 <code>x = "0111010" -&gt; "1111" -&gt; "100"</code> 이 됩니다.</p>

<p>0과 1로 이루어진 문자열 s가 매개변수로 주어집니다. s가 "1"이 될 때까지 계속해서 s에 이진 변환을 가했을 때, 이진 변환의 횟수와 변환 과정에서 제거된 모든 0의 개수를 각각 배열에 담아 return 하도록 solution 함수를 완성해주세요.</p>

<hr>

<h5>제한사항</h5>

<ul>
<li>s의 길이는 1 이상 150,000 이하입니다.</li>
<li>s에는 '1'이 최소 하나 이상 포함되어 있습니다.</li>
</ul>

<hr>

<h5>입출력 예</h5>
<table class="table">
        <thead><tr>
<th>s</th>
<th>result</th>
</tr>
</thead>
        <tbody><tr>
<td><code>"110010101001"</code></td>
<td><code>[3,8]</code></td>
</tr>
<tr>
<td><code>"01110"</code></td>
<td><code>[3,3]</code></td>
</tr>
<tr>
<td><code>"1111111"</code></td>
<td><code>[4,1]</code></td>
</tr>
</tbody>
      </table>
<hr>

<h5>입출력 예 설명</h5>

<p>입출력 예 #1</p>

<ul>
<li>"110010101001"이 "1"이 될 때까지 이진 변환을 가하는 과정은 다음과 같습니다.</li>
</ul>
<table class="table">
        <thead><tr>
<th>회차</th>
<th>이진 변환 이전</th>
<th>제거할 0의 개수</th>
<th>0 제거 후 길이</th>
<th>이진 변환 결과</th>
</tr>
</thead>
        <tbody><tr>
<td>1</td>
<td>"110010101001"</td>
<td>6</td>
<td>6</td>
<td>"110"</td>
</tr>
<tr>
<td>2</td>
<td>"110"</td>
<td>1</td>
<td>2</td>
<td>"10"</td>
</tr>
<tr>
<td>3</td>
<td>"10"</td>
<td>1</td>
<td>1</td>
<td>"1"</td>
</tr>
</tbody>
      </table>
<ul>
<li>3번의 이진 변환을 하는 동안 8개의 0을 제거했으므로, <code>[3,8]</code>을 return 해야 합니다.</li>
</ul>

<p>입출력 예 #2</p>

<ul>
<li>"01110"이 "1"이 될 때까지 이진 변환을 가하는 과정은 다음과 같습니다.</li>
</ul>
<table class="table">
        <thead><tr>
<th>회차</th>
<th>이진 변환 이전</th>
<th>제거할 0의 개수</th>
<th>0 제거 후 길이</th>
<th>이진 변환 결과</th>
</tr>
</thead>
        <tbody><tr>
<td>1</td>
<td>"01110"</td>
<td>2</td>
<td>3</td>
<td>"11"</td>
</tr>
<tr>
<td>2</td>
<td>"11"</td>
<td>0</td>
<td>2</td>
<td>"10"</td>
</tr>
<tr>
<td>3</td>
<td>"10"</td>
<td>1</td>
<td>1</td>
<td>"1"</td>
</tr>
</tbody>
      </table>
<ul>
<li>3번의 이진 변환을 하는 동안 3개의 0을 제거했으므로, <code>[3,3]</code>을 return 해야 합니다.</li>
</ul>

<p>입출력 예 #3</p>

<ul>
<li>"1111111"이 "1"이 될 때까지 이진 변환을 가하는 과정은 다음과 같습니다.</li>
</ul>
<table class="table">
        <thead><tr>
<th>회차</th>
<th>이진 변환 이전</th>
<th>제거할 0의 개수</th>
<th>0 제거 후 길이</th>
<th>이진 변환 결과</th>
</tr>
</thead>
        <tbody><tr>
<td>1</td>
<td>"1111111"</td>
<td>0</td>
<td>7</td>
<td>"111"</td>
</tr>
<tr>
<td>2</td>
<td>"111"</td>
<td>0</td>
<td>3</td>
<td>"11"</td>
</tr>
<tr>
<td>3</td>
<td>"11"</td>
<td>0</td>
<td>2</td>
<td>"10"</td>
</tr>
<tr>
<td>4</td>
<td>"10"</td>
<td>1</td>
<td>1</td>
<td>"1"</td>
</tr>
</tbody>
      </table>
<ul>
<li>4번의 이진 변환을 하는 동안 1개의 0을 제거했으므로, <code>[4,1]</code>을 return 해야 합니다.</li>
</ul>


> 출처: 프로그래머스 코딩 테스트 연습, https://school.programmers.co.kr/learn/challenges

## 📌 Code Review 📌

### 01. 기존 풀이
```
function solution(s) {
    let numZero = 0;
    let funNum = 0;
    
    const ParseArr = (arr) => {
        let len = arr.split("").filter((n) => n === "1").length;
        numZero += arr.length - len;
        funNum++;
        return len.toString(2);
    }
    
    while (s !== "1") {
        s = ParseArr(s);
    }
    
    return [funNum, numZero];
}
```
→ 문자열을 모든 글자 단위로 쪼개어 새로운 배열을 생성하고, `filter`를 돌리면 메모리를 많이 잡아먹고 속도가 느려진다.

### 02. 개선 방향: `split("").filter()` 대신 `replaceAll`로 단순화
```
function solution(s) {
    let numZero = 0;
    let funNum = 0;
    
    const binaryTransform = (str) => {
        const ones = str.replaceAll("0", "");
        numZero += str.length - ones.length;
        funNum++;
        return ones.length.toString(2);
    }
    
    while (s !== "1") {
        s = binaryTransform(s);
    }
    
    return [funNum, numZero];
}
```
→ 기존 테스트 10번에서 `4.66ms`이던 것을 `3.81ms`로 줄였다.

### 03. 사전 지식
- `replaceAll()`: 문자열 내에서 특정 문자(또는 정규식)와 일치하는 모든 부분을 새로운 문자열로 한 번에 교체할 수 있는 내장 메서드
- `10진수.toString(2)`: 10진수 숫자를 괄호 안의 진수(여기서는 2진수) 형태를 가진 '문자열'로 변환해 주는 메서드
- `parseInt("2진수 문자열", 2)`: 특정 진법(여기서는 2진법)으로 표현된 문자열을 다시 컴퓨터가 인식하는 10진수 '숫자'로 변환해 주는 함수.
