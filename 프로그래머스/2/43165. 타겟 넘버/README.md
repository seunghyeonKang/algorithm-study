# [level 2] 타겟 넘버 - 43165 

[문제 링크](https://school.programmers.co.kr/learn/courses/30/lessons/43165) 

### 성능 요약

메모리: 49.1 MB, 시간: 7.67 ms

### 구분

코딩테스트 연습 > 깊이／너비 우선 탐색（DFS／BFS）

### 채점결과

정확성: 100.0<br/>합계: 100.0 / 100.0

### 제출 일자

2026년 07월 21일 21:14:09

### 문제 설명

<p>n개의 음이 아닌 정수들이 있습니다. 이 정수들을 순서를 바꾸지 않고 적절히 더하거나 빼서 타겟 넘버를 만들려고 합니다. 예를 들어 [1, 1, 1, 1, 1]로 숫자 3을 만들려면 다음 다섯 방법을 쓸 수 있습니다.</p>
<div class="highlight"><pre class="codehilite"><code>-1+1+1+1+1 = 3
+1-1+1+1+1 = 3
+1+1-1+1+1 = 3
+1+1+1-1+1 = 3
+1+1+1+1-1 = 3
</code></pre></div>
<p>사용할 수 있는 숫자가 담긴 배열 numbers, 타겟 넘버 target이 매개변수로 주어질 때 숫자를 적절히 더하고 빼서 타겟 넘버를 만드는 방법의 수를 return 하도록 solution 함수를 작성해주세요.</p>

<h5>제한사항</h5>

<ul>
<li>주어지는 숫자의 개수는 2개 이상 20개 이하입니다.</li>
<li>각 숫자는 1 이상 50 이하인 자연수입니다.</li>
<li>타겟 넘버는 1 이상 1000 이하인 자연수입니다.</li>
</ul>

<h5>입출력 예</h5>
<table class="table">
        <thead><tr>
<th>numbers</th>
<th>target</th>
<th>return</th>
</tr>
</thead>
        <tbody><tr>
<td>[1, 1, 1, 1, 1]</td>
<td>3</td>
<td>5</td>
</tr>
<tr>
<td>[4, 1, 2, 1]</td>
<td>4</td>
<td>2</td>
</tr>
</tbody>
      </table>
<h5>입출력 예 설명</h5>

<p><strong>입출력 예 #1</strong></p>

<p>문제 예시와 같습니다.</p>

<p><strong>입출력 예 #2</strong></p>
<div class="highlight"><pre class="codehilite"><code>+4+1-2+1 = 4
+4-1+2-1 = 4
</code></pre></div>
<ul>
<li>총 2가지 방법이 있으므로, 2를 return 합니다.</li>
</ul>


> 출처: 프로그래머스 코딩 테스트 연습, https://school.programmers.co.kr/learn/challenges

## 📌 Code Review 📌

### 01. 기존 풀이
```javascript
function solution(numbers, target) {
    let count = 0;
    
    const checkValidCalculation = (idx, acc) => {
        // idx: 현재 배열의 인덱스, acc: 누적값
        
        // 탈출 조건
        if (idx >= numbers.length) {
            if (acc === 0) count++;
            return 0;
        }
        
        // 갈림길
        // 다음 인덱스를 +하는 함수 호출
        checkValidCalculation(idx + 1, acc + numbers[idx]);
        // 다음 인덱스를 -하는 함수 호출
        checkValidCalculation(idx + 1, acc - numbers[idx]);
    }
    
    checkValidCalculation(0, target);
    return count;
}
```
- `return 0;` 대신 `return`으로도 충분하다.
- 탈출 조건으로 `idx >= numbers.length` 대신 `idx === numbers.length`를 사용하는 것이 더 정확하다.

### 02. 개선 방향: 기존 코드 리팩토링
```javascript
function solution(numbers, target) {
    let count = 0;
    
    const checkValidCalculation = (idx, acc) => {
        // 모든 숫자를 다 사용했을 때 (기저 조건)
        if (idx === numbers.length) {
            if (acc === 0) count++;
            return; // 깔끔한 void 리턴
        }
        
        // 다음 숫자를 빼거나 더하기
        checkValidCalculation(idx + 1, acc - numbers[idx]);
        checkValidCalculation(idx + 1, acc + numbers[idx]);
    };
    
    checkValidCalculation(0, target);
    return count;
}
```

### 03. 다른 풀이: 외부 변수를 사용하지 않는 순수 함수 형태
```javascript
function solution(numbers, target) {
  const dfs = (idx, acc) => {
    if (idx === numbers.length) return acc === target ? 1 : 0;
    return dfs(idx + 1, acc + numbers[idx]) + dfs(idx + 1, acc - numbers[idx]);
  };
  return dfs(0, 0);
}
```

### 04. 사전 지식
- **DFS**는 시간복잡도가 $O(2^N)$이기 때문에 `N`이 최대 `20~22`일 때 완전탐색이나 DFS로 다 찾아도 된다는 힌트이다.
- DFS의 기본 뼈대는 1. 탈출 조건과 2. 갈림길 선택으로 이루어져있다. 이 뼈대를 기억해두자.
