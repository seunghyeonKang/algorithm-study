# [level 2] 괄호 회전하기 - 76502 

[문제 링크](https://school.programmers.co.kr/learn/courses/30/lessons/76502) 

### 성능 요약

메모리: 44.4 MB, 시간: 0.99 ms

### 구분

코딩테스트 연습 > 월간 코드 챌린지 시즌2

### 채점결과

정확성: 100.0<br/>합계: 100.0 / 100.0

### 제출 일자

2026년 07월 08일 16:31:38

### 문제 설명

<p>다음 규칙을 지키는 문자열을 올바른 괄호 문자열이라고 정의합니다.</p>

<ul>
<li><code>()</code>, <code>[]</code>, <code>{}</code> 는 모두 올바른 괄호 문자열입니다.</li>
<li>만약 <code>A</code>가 올바른 괄호 문자열이라면, <code>(A)</code>, <code>[A]</code>, <code>{A}</code> 도 올바른 괄호 문자열입니다. 예를 들어, <code>[]</code> 가 올바른 괄호 문자열이므로, <code>([])</code> 도 올바른 괄호 문자열입니다.</li>
<li>만약 <code>A</code>, <code>B</code>가 올바른 괄호 문자열이라면, <code>AB</code> 도 올바른 괄호 문자열입니다. 예를 들어, <code>{}</code> 와 <code>([])</code> 가 올바른 괄호 문자열이므로, <code>{}([])</code> 도 올바른 괄호 문자열입니다.</li>
</ul>

<p>대괄호, 중괄호, 그리고 소괄호로 이루어진 문자열 <code>s</code>가 매개변수로 주어집니다. 이 <code>s</code>를 왼쪽으로 x (<em>0 ≤ x &lt; (<code>s</code>의 길이)</em>) 칸만큼 회전시켰을 때 <code>s</code>가 올바른 괄호 문자열이 되게 하는 x의 개수를 return 하도록 solution 함수를 완성해주세요.</p>

<hr>

<h5>제한사항</h5>

<ul>
<li>s의 길이는 1 이상 1,000 이하입니다.</li>
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
<td><code>"[](){}"</code></td>
<td>3</td>
</tr>
<tr>
<td><code>"}]()[{"</code></td>
<td>2</td>
</tr>
<tr>
<td><code>"[)(]"</code></td>
<td>0</td>
</tr>
<tr>
<td><code>"}}}"</code></td>
<td>0</td>
</tr>
</tbody>
      </table>
<hr>

<h5>입출력 예 설명</h5>

<p><strong>입출력 예 #1</strong></p>

<ul>
<li>다음 표는 <code>"[](){}"</code> 를 회전시킨 모습을 나타낸 것입니다.</li>
</ul>
<table class="table">
        <thead><tr>
<th>x</th>
<th>s를 왼쪽으로 x칸만큼 회전</th>
<th>올바른 괄호 문자열?</th>
</tr>
</thead>
        <tbody><tr>
<td>0</td>
<td><code>"[](){}"</code></td>
<td>O</td>
</tr>
<tr>
<td>1</td>
<td><code>"](){}["</code></td>
<td>X</td>
</tr>
<tr>
<td>2</td>
<td><code>"(){}[]"</code></td>
<td>O</td>
</tr>
<tr>
<td>3</td>
<td><code>"){}[]("</code></td>
<td>X</td>
</tr>
<tr>
<td>4</td>
<td><code>"{}[]()"</code></td>
<td>O</td>
</tr>
<tr>
<td>5</td>
<td><code>"}[](){"</code></td>
<td>X</td>
</tr>
</tbody>
      </table>
<ul>
<li>올바른 괄호 문자열이 되는 x가 3개이므로, 3을 return 해야 합니다.</li>
</ul>

<p><strong>입출력 예 #2</strong></p>

<ul>
<li>다음 표는 <code>"}]()[{"</code> 를 회전시킨 모습을 나타낸 것입니다.</li>
</ul>
<table class="table">
        <thead><tr>
<th>x</th>
<th>s를 왼쪽으로 x칸만큼 회전</th>
<th>올바른 괄호 문자열?</th>
</tr>
</thead>
        <tbody><tr>
<td>0</td>
<td><code>"}]()[{"</code></td>
<td>X</td>
</tr>
<tr>
<td>1</td>
<td><code>"]()[{}"</code></td>
<td>X</td>
</tr>
<tr>
<td>2</td>
<td><code>"()[{}]"</code></td>
<td>O</td>
</tr>
<tr>
<td>3</td>
<td><code>")[{}]("</code></td>
<td>X</td>
</tr>
<tr>
<td>4</td>
<td><code>"[{}]()"</code></td>
<td>O</td>
</tr>
<tr>
<td>5</td>
<td><code>"{}]()["</code></td>
<td>X</td>
</tr>
</tbody>
      </table>
<ul>
<li>올바른 괄호 문자열이 되는 x가 2개이므로, 2를 return 해야 합니다.</li>
</ul>

<p><strong>입출력 예 #3</strong></p>

<ul>
<li>s를 어떻게 회전하더라도 올바른 괄호 문자열을 만들 수 없으므로, 0을 return 해야 합니다.</li>
</ul>

<p><strong>입출력 예 #4</strong></p>

<ul>
<li>s를 어떻게 회전하더라도 올바른 괄호 문자열을 만들 수 없으므로, 0을 return 해야 합니다.</li>
</ul>

<hr>

<p>※ 공지 - 2021년 4월 16일 테스트케이스가 추가되었습니다.</p>


> 출처: 프로그래머스 코딩 테스트 연습, https://school.programmers.co.kr/learn/challenges

## 📌 Code Review 📌

### 01. 기존 풀이
```javascript
function solution(s) {
    const twiceStrArr = [...s, ...s];
    const openSymbol = new Set(['(', '[', '{']);
    const changeSymbolToOpen = { ')': '(', ']': '[', '}': '{' };
    
    let symbolStack = [];
    let checkStrLength = 0; // 문자열 길이
    let countCorrectStr = 0; // '올바른 괄호 문자열'의 총 개수
    
    for (let i = 0; i < twiceStrArr.length - 1; i++) {
        const currChar = twiceStrArr[i];
        const popChar = symbolStack.pop();
        
        if (openSymbol.has(currChar)) { // 괄호가 열리면 +1
            popChar && symbolStack.push(popChar);
            symbolStack.push(currChar);
            checkStrLength++;
        } else if (popChar === changeSymbolToOpen[currChar]) { // 괄호가 닫히면 -1
            checkStrLength++;
            
            // '올바른 괄호 문자열'의 개수 세기
            symbolStack.length === 0 && countCorrectStr++;
        } else { // 문자열이 올바르지 않다면 초기화
            symbolStack = [];
            checkStrLength = 0;
            countCorrectStr = 0;
        }
        
        if (checkStrLength === s.length) return countCorrectStr; // 문자열 수만큼 돌면 반환
    }
    
    return 0;
}
```
- 정확도 테스트에서 실패하고 AI에게 힌트를 받고 푼 코드이다.
- 매번 스택에서 `pop()`을 먼저 하기 때문에 비효율적이다.
- `s = "()("` 같이 완결되지 않은 괄호를 걸러내지 못하는 버그가 있다. (실제로는 틀렸으나 프로그래머스에서 제대로 거르지 못한 케이스...)

### 02. 다른 풀이: O(n²)로 단순하게 풀기
```javascript
function solution(s) {
    let answer = 0;
    
    // 1. 회전된 문자열이 올바른지 검사하는 헬퍼 함수 (스택 활용)
    const isValid = (str) => {
        const stack = [];
        const pair = { ')': '(', ']': '[', '}': '{' };
        
        for (const char of str) {
            if (char === '(' || char === '[' || char === '{') {
                stack.push(char); // 열린 괄호는 무조건 푸시
            } else {
                // 닫힌 괄호인데 스택이 비어있거나, 짝이 안 맞으면 탈락!
                if (stack.length === 0 || stack.pop() !== pair[char]) {
                    return false;
                }
            }
        }
        // 문자열을 다 돌았을 때 스택이 깨끗하게 비어있어야 올바른 괄호
        return stack.length === 0;
    };

    // 2. x만큼 왼쪽으로 회전시키며 모든 케이스 검사 (0 <= x < s.length)
    for (let x = 0; x < s.length; x++) {
        // 원래 문자열 s를 x만큼 회전시킨 새로운 문자열 생성
        const rotatedStr = s.slice(x) + s.slice(0, x);
        
        if (isValid(rotatedStr)) {
            answer++;
        }
    }

    return answer;
}
```
- 문자열을 회전시키는 반복문과 회전된 문자열이 올바른지 검사하는 함수를 분리한다.
- `s`의 길이가 최대 1,000이므로, 1,000번 회전시키고 매번 1,000글자를 검사해도 약 1,000,000번의 연산만 수행하므로 시간 초과 없이 통과한다.

### 03. 개선 방향: 기존 아이디어 활용 (독립적인 올바른 괄호 한 세트의 개수 구하기)
```javascript
function solution(s) {
    if (s.length % 2 !== 0) return 0;
    const pair = { ')': '(', ']': '[', '}': '{' };

    // 1. 유효한 회전 하나 찾기
    let validStr = null;
    for (let x = 0; x < s.length; x++) {
        const rotated = s.slice(x) + s.slice(0, x);
        if (isValid(rotated, pair)) {
            validStr = rotated;
            break;
        }
    }
    if (validStr === null) return 0;

    // 2. 최상위 세트 개수 세기
    let setCount = 0;
    const stack = [];
    for (const char of validStr) {
        if (char === '(' || char === '[' || char === '{') {
            stack.push(char);
        } else {
            stack.pop();
        }
        if (stack.length === 0) setCount++;
    }
    return setCount;
}

function isValid(str, pair) {
    const stack = [];
    for (const char of str) {
        if (char === '(' || char === '[' || char === '{') {
            stack.push(char);
        } else {
            if (stack.length === 0 || stack.pop() !== pair[char]) return false;
        }
    }
    return stack.length === 0;
}
```
- 유효한 회전이 앞쪽에서 빨리 발견되는 경우에는 나머지 회전들을 다 검사할 필요가 없어지므로, 평균적/실질적으로는 원래의 완전 브루트포스보다 빠를 수 있다. 하지만 최악의 케이스 빅오는 여전히 동일하다.
- 이전 코드가 실패한 이유:
  1. 문자열 `s`자체가 '올바른 괄호가 될 수 있는 재료여야한다.
  2. 세트의 경계를 판별할 때 반드시 스택을 써야한다. 카운터 변수만으로 세트를 세면 `[(])` 같은 엇갈린 케이스를 정상 세트로 오인하게 된다.
- `n ≤ 1000` 제약을 고려하면, 타입별 개수 사전 체크 + 조기 종료 정도의 최적화만으로 충분히 안전하고 빠르다. 더 정교한 O(n) 트릭을 억지로 찾기보다는, 2번 방법 선에서 정확성을 확보하는 것이 코딩테스트 실전에서 더 나은 선택이다.

### 04. 사전 지식
- 괄호 문제는 99% 스택을 사용한다.
- 회전 문자열 다룰 때에는 `s + s`와 인덱스 연산을 하용하자.
- 문제의 제한 사항을 가장 먼저 보자. 완전 탐색이 가능한 경우를 판단하자.
  - 코딩테스트에서 시간 제한은 보통 1초이다.
  - 컴퓨터는 1초에 약 1억번의 연산을 처리할 수 있다.
  - N의 크기별 추천 알고리즘 공식
    
    | N의 최대 크기 | 허용되는 시간 복잡도 | 풀이 방향 / 알고리즘 |
    | --- | --- | --- |
    | $N \leq 10 \sim 15$ | $O(2^N)$, $O(N!)$ | 재귀, 백트래킹 (모든 경우의 수 완전 탐색) |
    | $N \leq 500 \sim 1{,}000$ | $O(N^2)$ | **2중 반복문**, 플로이드-워셜 |
    | $N \leq 100{,}000$ | $O(N \log N)$ | 정렬, 이진 탐색, 우선순위 큐(Heap) |
    | $N \leq 1{,}000{,}000$ | $O(N)$ | **1중 반복문**, 투 포인터, **스택/큐**, DP |
    | $N > 1{,}000{,}000$ | $O(\log N)$, $O(1)$ | 수학적 공식, 이진 탐색 |
- 단일 역할의 원칙에 따라 기능을 분리해보자.
- 최적화 아이디어는 꼭 검증해보자. 예외 케이스들을 알아보고 반례에 따른 조건을 추가하자.
