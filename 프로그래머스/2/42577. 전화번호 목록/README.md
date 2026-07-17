# [level 2] 전화번호 목록 - 42577 

[문제 링크](https://school.programmers.co.kr/learn/courses/30/lessons/42577) 

### 성능 요약

메모리: 97.8 MB, 시간: 102.46 ms

### 구분

코딩테스트 연습 > 해시

### 채점결과

정확성: 83.3<br/>효율성: 16.7<br/>합계: 100.0 / 100.0

### 제출 일자

2026년 07월 16일 23:43:21

### 문제 설명

<p>전화번호부에 적힌 전화번호 중, 한 번호가 다른 번호의 접두어인 경우가 있는지 확인하려 합니다.<br>
전화번호가 다음과 같을 경우, 구조대 전화번호는 영석이의 전화번호의 접두사입니다.</p>

<ul>
<li>구조대 : 119</li>
<li>박준영 : 97 674 223</li>
<li>지영석 : 11 9552 4421</li>
</ul>

<p>전화번호부에 적힌 전화번호를 담은 배열 phone_book 이 solution 함수의 매개변수로 주어질 때, 어떤 번호가 다른 번호의 접두어인 경우가 있으면 false를 그렇지 않으면 true를 return 하도록 solution 함수를 작성해주세요.</p>

<h5>제한 사항</h5>

<ul>
<li>phone_book의 길이는 1 이상 1,000,000 이하입니다.

<ul>
<li>각 전화번호의 길이는 1 이상 20 이하입니다.</li>
<li>같은 전화번호가 중복해서 들어있지 않습니다.</li>
</ul></li>
</ul>

<h5>입출력 예제</h5>
<table class="table">
        <thead><tr>
<th>phone_book</th>
<th>return</th>
</tr>
</thead>
        <tbody><tr>
<td>["119", "97674223", "1195524421"]</td>
<td>false</td>
</tr>
<tr>
<td>["123","456","789"]</td>
<td>true</td>
</tr>
<tr>
<td>["12","123","1235","567","88"]</td>
<td>false</td>
</tr>
</tbody>
      </table>
<h5>입출력 예 설명</h5>

<p>입출력 예 #1<br>
앞에서 설명한 예와 같습니다.</p>

<p>입출력 예 #2<br>
한 번호가 다른 번호의 접두사인 경우가 없으므로, 답은 true입니다.</p>

<p>입출력 예 #3<br>
첫 번째 전화번호, “12”가 두 번째 전화번호 “123”의 접두사입니다. 따라서 답은 false입니다.</p>

<hr>

<p><strong>알림</strong></p>

<p>2021년 3월 4일, 테스트 케이스가 변경되었습니다. 이로 인해 이전에 통과하던 코드가 더 이상 통과하지 않을 수 있습니다.</p>


> 출처: 프로그래머스 코딩 테스트 연습, https://school.programmers.co.kr/learn/challenges

## 📌 Code Review 📌

### 00. 기존 풀이: 효율성 테스트 실패
```javascript
function solution(phone_book) {
    const phoneStrings = phone_book.sort((a, b) => a - b);
    const phoneNumbers = phoneStrings.map(Number);
    
    for (let i = 0; i < phoneStrings.length; i++) {
        for (let j = i + 1; j < phoneStrings.length; j++) {
            if (Math.floor(phoneNumbers[j] / (10 ** (phoneStrings[j].length - phoneStrings[i].length))) === phoneNumbers[i]) return false;
        }
    }
    
    return true;
}
```
- AI 힌트01: 정렬을 숫자 크기 순 대신 사전식으로 하면 접두어 관계에 있는 문자열들이 반드시 옆에 나란히 붙게 된다.
- AI 힌트02: `startsWith()`를 사용해보자.

### 01. 기존 풀이: 효율성 테스트 통과
```javascript
function solution(phone_book) {
    const phoneStrings = [...phone_book].sort();
    
    for (let i = 1; i < phoneStrings.length; i++) {
        if (phoneStrings[i].startsWith(phoneStrings[i - 1])) return false;
    }
    
    return true;
}
```
- 이중 반복문( $O(N^2)$ ) 구조를 정렬 $O(N \log N)$과 단일 반복문 $O(N \times L)$로 수정하여 시간 복잡도를 개선했다.

### 02. 사전 지식
- `startsWith()`: 어떤 문자열이 특정 문자열로 시작하는지 확인하여 `true` 또는 `false`를 반환하는 자바스크립트 내장 메서드
- 앞으로 데이터의 '형태'보다 '본질을 파악하기를 연습해보자.
