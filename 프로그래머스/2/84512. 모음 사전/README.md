# [level 2] 모음 사전 - 84512 

[문제 링크](https://school.programmers.co.kr/learn/courses/30/lessons/84512) 

### 성능 요약

메모리: 44 MB, 시간: 0.62 ms

### 구분

코딩테스트 연습 > 완전탐색

### 채점결과

정확성: 100.0<br/>합계: 100.0 / 100.0

### 제출 일자

2026년 11월 08일 20:53:49

### 문제 설명

<p>사전에 알파벳 모음 'A', 'E', 'I', 'O', 'U'만을 사용하여 만들 수 있는, 길이 5 이하의 모든 단어가 수록되어 있습니다. 사전에서 첫 번째 단어는 "A"이고, 그다음은 "AA"이며, 마지막 단어는 "UUUUU"입니다.</p>

<p>단어 하나 word가 매개변수로 주어질 때, 이 단어가 사전에서 몇 번째 단어인지 return 하도록 solution 함수를 완성해주세요.</p>

<h5>제한사항</h5>

<ul>
<li>word의 길이는 1 이상 5 이하입니다.</li>
<li>word는 알파벳 대문자 'A', 'E', 'I', 'O', 'U'로만 이루어져 있습니다.</li>
</ul>

<hr>

<h5>입출력 예</h5>
<table class="table">
        <thead><tr>
<th>word</th>
<th>result</th>
</tr>
</thead>
        <tbody><tr>
<td><code>"AAAAE"</code></td>
<td>6</td>
</tr>
<tr>
<td><code>"AAAE"</code></td>
<td>10</td>
</tr>
<tr>
<td><code>"I"</code></td>
<td>1563</td>
</tr>
<tr>
<td><code>"EIO"</code></td>
<td>1189</td>
</tr>
</tbody>
      </table>
<h5>입출력 예 설명</h5>

<p>입출력 예 #1</p>

<p>사전에서 첫 번째 단어는 "A"이고, 그다음은 "AA", "AAA", "AAAA", "AAAAA", "AAAAE", ... 와 같습니다. "AAAAE"는 사전에서 6번째 단어입니다.</p>

<p>입출력 예 #2</p>

<p>"AAAE"는  "A", "AA", "AAA", "AAAA", "AAAAA", "AAAAE", "AAAAI", "AAAAO", "AAAAU"의 다음인 10번째 단어입니다.</p>

<p>입출력 예 #3</p>

<p>"I"는 1563번째 단어입니다.</p>

<p>입출력 예 #4</p>

<p>"EIO"는 1189번째 단어입니다.</p>


> 출처: 프로그래머스 코딩 테스트 연습, https://school.programmers.co.kr/learn/challenges

# 📌 Code Review 📌

## 01. 기존 풀이
```javascript
function solution(word) {
    let wordsArray = [];
    const alp = ["A", "E", "I", "O", "U"];
    
    const pushWords = (str) => {
        // 단어 추가
        if (str.length >= 1 && str.length <= 5) wordsArray.push(str);
        
        // 단어 길이가 4 이하 -> 그 단어에 5개 단어를 추가한 함수 호출
        if (str.length <= 4) {
            for (let i = 0; i < 5; i++) {
                pushWords(str + alp[i]);
            }
        }
    }
    
    pushWords("");
    
    return wordsArray.sort().indexOf(word) + 1;
}
```

## 02. AI 피드백 & 사전지식
- 불필요한 `.sort()` 연산 제거: 재귀 함수 내부에서 `alp` 배열의 순서(`"A", "E", "I", "O", "U"`)대로 차례대로 탐색하기 때문에, `wordsArray`에 담기는 단어들은 이미 완벽한 사전순으로 정렬되어 생성되므로 마지막에 `.sort()`는 생략해도 된다.

## 03. 다른 풀이: 수학적 규칙 방식 - 시간·공간 복잡도: 시간 $O(L)$, 공간 $O(1)$
```javascript
function solution(word) {
    const alp = ["A", "E", "I", "O", "U"];
    // 각 자리별 가중치 미리 계산 (781, 156, 31, 6, 1)
    const weights = [781, 156, 31, 6, 1]; 

    let answer = 0;

    for (let i = 0; i < word.length; i++) {
        const charIdx = alp.indexOf(word[i]);
        // (문자 인덱스 * 가중치) + 본인 단어 카운트(+1)
        answer += charIdx * weights[i] + 1;
    }

    return answer;
}
```
- 메모리를 거의 쓰지 않고 연산 횟수가 극도로 적어 이론적으로 완벽하게 효율적이다. 다만, 규칙을 유도해내는 아이디어가 필요하다.
  - 첫 번째 자리 (`i = 0`): 문자가 바뀔 때마다 뒤에 올 수 있는 모든 경우의 수 ($5^4 + 5^3 + 5^2 + 5^1 + 1$) = 781개씩 건너뛴다.
  - 두 번째 자리 (`i = 1`): ($5^3 + 5^2 + 5^1 + 1$) = 156개씩 건너뛴다.
  - 세 번째 자리 (`i = 2`): ($5^2 + 5^1 + 1$) = 31개씩 건너뛴다.
  - 네 번째 자리 (`i = 3`): ($5^1 + 1$) = 6개씩 건너뛴다.
  - 다섯 번째 자리 (`i = 4`): 1개씩 건너뛴다.
- 계산 공식: `(해당 문자의 인덱스 × 해당 자리의 가중치)의 총합 + 단어의 길이`
