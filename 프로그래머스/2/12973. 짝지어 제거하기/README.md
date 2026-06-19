# [level 2] 짝지어 제거하기 - 12973 

[문제 링크](https://school.programmers.co.kr/learn/courses/30/lessons/12973) 

### 성능 요약

메모리: 55.4 MB, 시간: 31.57 ms

### 구분

코딩테스트 연습 > 2017 팁스타운

### 채점결과

정확성: 61.2<br/>효율성: 38.8<br/>합계: 100.0 / 100.0

### 제출 일자

2026년 06월 19일 12:33:57

### 문제 설명

<p>짝지어 제거하기는, 알파벳 소문자로 이루어진 문자열을 가지고 시작합니다. 먼저 문자열에서 같은 알파벳이 2개 붙어 있는 짝을 찾습니다. 그다음, 그 둘을 제거한 뒤, 앞뒤로 문자열을 이어 붙입니다. 이 과정을 반복해서 문자열을 모두 제거한다면 짝지어 제거하기가 종료됩니다. 문자열 S가 주어졌을 때, 짝지어 제거하기를 성공적으로 수행할 수 있는지 반환하는 함수를 완성해 주세요. 성공적으로 수행할 수 있으면 1을, 아닐 경우 0을 리턴해주면 됩니다.</p>

<p>예를 들어, 문자열 S = <code>baabaa</code> 라면</p>

<p>b <em>aa</em> baa → <em>bb</em> aa → <em>aa</em> →</p>

<p>의 순서로 문자열을 모두 제거할 수 있으므로 1을 반환합니다.</p>

<h5>제한사항</h5>

<ul>
<li>문자열의 길이 : 1,000,000이하의 자연수</li>
<li>문자열은 모두 소문자로 이루어져 있습니다.</li>
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
<td>baabaa</td>
<td>1</td>
</tr>
<tr>
<td>cdcd</td>
<td>0</td>
</tr>
</tbody>
      </table>
<h5>입출력 예 설명</h5>

<p>입출력 예 #1<br>
위의 예시와 같습니다.<br>
입출력 예 #2<br>
문자열이 남아있지만 짝지어 제거할 수 있는 문자열이 더 이상 존재하지 않기 때문에 0을 반환합니다.</p>

<p>※ 공지 - 2020년 6월 8일 테스트케이스가 추가되었습니다.<br>
※ 공지 - 2023년 8월 31일 테스트케이스가 추가되었습니다. 기존에 제출한 코드가 통과하지 못할 수도 있습니다.</p>


> 출처: 프로그래머스 코딩 테스트 연습, https://school.programmers.co.kr/learn/challenges

## 📌 Code Review 📌

### 00. 기존 풀이: 시간초과
```javascript
function solution(s)
{
    const deleteCouple = (str) => {
        if (str === "") return 1;
        for (let i = 0; i < str.length; i++) {
            if (str[i] === str[i + 1]) return deleteCouple(str.slice(0, i) + str.slice(i + 2));
        }
        return 0;
    }
    
    return deleteCouple(s);
}
```
- 전체 시간 복잡도가 $O(N^2)$에 가깝기에 "시간 초과"와 "런타임 에러(Stack Overflow)"가 난다.

### 01. 기존 풀이
```javascript
function solution(s) {
    const alpStack = [];
    
    for (let i = 0; i < s.length; i++) {
        const temp = alpStack.pop();
        if (temp === undefined) {
            alpStack.push(s[i]);
        } else if (temp !== s[i]) {
            alpStack.push(temp);
            alpStack.push(s[i]);
        }
    }
    
    if (alpStack.length === 0) return 1;
    else return 0;
}
```
- 먼저 값을 빼는(pop) 것 대신, 스택의 맨 위 값을 확인만(peek) 하고 조건이 맞을 때 빼는 것이 훨씬 안전하고 직관적이다.

### 02. 개선 방향: 기존 코드 리팩토링
```javascript
function solution(s) {
    const stack = [];
    
    for (const char of s) {
        if (stack.length > 0 && stack[stack.length - 1] === char) {
            stack.pop();
        } else {
            stack.push(char);
        }
    }
    
    return stack.length === 0 ? 1 : 0;
}
```

### 03. 사전 지식
- `includes()`: 값이 포함되어 있으면 `true`, 없으면 `false`를 반환한다.
