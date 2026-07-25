# [level 3] 단어 변환 - 43163 

[문제 링크](https://school.programmers.co.kr/learn/courses/30/lessons/43163) 

### 성능 요약

메모리: 44.2 MB, 시간: 0.39 ms

### 구분

코딩테스트 연습 > 깊이／너비 우선 탐색（DFS／BFS）

### 채점결과

정확성: 100.0<br/>합계: 100.0 / 100.0

### 제출 일자

2026년 07월 25일 13:50:20

### 문제 설명

<p>두 개의 단어 begin, target과 단어의 집합 words가 있습니다. 아래와 같은 규칙을 이용하여 begin에서 target으로 변환하는 가장 짧은 변환 과정을 찾으려고 합니다.</p>
<div class="highlight"><pre class="codehilite"><code>1. 한 번에 한 개의 알파벳만 바꿀 수 있습니다.
2. words에 있는 단어로만 변환할 수 있습니다.
</code></pre></div>
<p>예를 들어 begin이 "hit", target가 "cog", words가 ["hot","dot","dog","lot","log","cog"]라면 "hit" -&gt; "hot" -&gt; "dot" -&gt; "dog" -&gt; "cog"와 같이 4단계를 거쳐 변환할 수 있습니다.</p>

<p>두 개의 단어 begin, target과 단어의 집합 words가 매개변수로 주어질 때, 최소 몇 단계의 과정을 거쳐 begin을 target으로 변환할 수 있는지 return 하도록 solution 함수를 작성해주세요.</p>

<h5>제한사항</h5>

<ul>
<li>각 단어는 알파벳 소문자로만 이루어져 있습니다.</li>
<li>각 단어의 길이는 3 이상 10 이하이며 모든 단어의 길이는 같습니다.</li>
<li>words에는 3개 이상 50개 이하의 단어가 있으며 중복되는 단어는 없습니다.</li>
<li>begin과 target은 같지 않습니다.</li>
<li>변환할 수 없는 경우에는 0를 return 합니다.</li>
</ul>

<h5>입출력 예</h5>
<table class="table">
        <thead><tr>
<th>begin</th>
<th>target</th>
<th>words</th>
<th>return</th>
</tr>
</thead>
        <tbody><tr>
<td>"hit"</td>
<td>"cog"</td>
<td>["hot", "dot", "dog", "lot", "log", "cog"]</td>
<td>4</td>
</tr>
<tr>
<td>"hit"</td>
<td>"cog"</td>
<td>["hot", "dot", "dog", "lot", "log"]</td>
<td>0</td>
</tr>
</tbody>
      </table>
<h5>입출력 예 설명</h5>

<p>예제 #1<br>
문제에 나온 예와 같습니다.</p>

<p>예제 #2<br>
target인 "cog"는 words 안에 없기 때문에 변환할 수 없습니다.</p>


> 출처: 프로그래머스 코딩 테스트 연습, https://school.programmers.co.kr/learn/challenges

## 📌 Code Review 📌

### 01. 기존 풀이
```javascript
function solution(begin, target, words) {
    const isVisitedWord = Array(words.length).fill(false);
    let currWords = [begin];
    let count = 0;
    
    while (currWords.length !== 0) {
        const nextWords = [];
        
        for (let j = 0; j < currWords.length; j++) {
            if (currWords[j] === target) return count;
            
            for (let i = 0; i < words.length; i++) {
                let differentCharCount = 0;
                for (let k = 0; k < begin.length; k++) {
                    if (words[i][k] !== currWords[j][k]) differentCharCount++;
                }
                if (differentCharCount === 1 && !isVisitedWord[i]) {
                    nextWords.push(words[i]);
                    isVisitedWord[i] = true;
                }
            }
        }
        
        currWords = nextWords;
        count++;
    }
    
    return 0;
}
```
- `isVisitedWord`를 `visited`처럼 더 간결한 이름도 좋다. 지금도 의미가 명확하여 괜찮지만, 코드가 길어질수록 짧은 이름이 가독성에 도움이 된다.
- 현재 3중 `for`문이 겹쳐있어 코드를 한눈에 파악하기 어렵다. 알파벳 차이 계산을 함수로 분리하는 것이 가독성에 좋다.
- 현재 `isVisitedWord[i]`가 `true`여도 `differentCharCount`를 끝까지 계산한다. 이미 방문한 단어라면 계산할 필요가 없으니 걸러주자.
- `target` 존재 여부를 확인하여 조기 리턴을 하면 불필요한 연산을 줄일 수 있다.

### 02. 개선 방향: 기존 코드 리팩토링
```javascript
function solution(begin, target, words) {
    // target이 words에 없으면 변환 자체가 불가능하므로 바로 0 반환
    if (!words.includes(target)) return 0;

    const visited = Array(words.length).fill(false);
    let queue = [begin];
    let steps = 0;

    while (queue.length > 0) {
        const nextQueue = [];

        for (const currentWord of queue) {
            if (currentWord === target) return steps;

            for (let i = 0; i < words.length; i++) {
                if (!visited[i] && isConvertible(currentWord, words[i])) {
                    visited[i] = true;
                    nextQueue.push(words[i]);
                }
            }
        }

        queue = nextQueue;
        steps++;
    }

    return 0;
}

// 두 단어가 정확히 1개 알파벳만 다른지 확인하는 함수
function isConvertible(word1, word2) {
    let diffCount = 0;
    for (let i = 0; i < word1.length; i++) {
        if (word1[i] !== word2[i]) diffCount++;
        if (diffCount > 1) return false; // 2개 이상 다르면 조기 종료
    }
    return diffCount === 1;
}
```
- `0.39ms`까지 걸리던 시간이 `0.20ms`로 개선되었다.

### 03. 사전 지식
- `includes()`: 배열이나 문자열 안에 특정 요소(또는 문자열)가 포함되어 있는지 확인할 때 사용하는 메서드
