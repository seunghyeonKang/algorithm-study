# [level 1] 문자열 내 마음대로 정렬하기 - 12915 

[문제 링크](https://school.programmers.co.kr/learn/courses/30/lessons/12915) 

### 성능 요약

메모리: 46 MB, 시간: 493.86 ms

### 구분

코딩테스트 연습 > 연습문제

### 채점결과

정확성: 100.0<br/>합계: 100.0 / 100.0

### 제출 일자

2026년 06월 22일 12:03:52

### 문제 설명

<p>문자열로 구성된 리스트 strings와, 정수 n이 주어졌을 때, 각 문자열의 인덱스 n번째 글자를 기준으로 오름차순 정렬하려 합니다. 예를 들어 strings가 ["sun", "bed", "car"]이고 n이 1이면 각 단어의 인덱스 1의 문자 "u", "e", "a"로 strings를 정렬합니다.</p>

<h5>제한 조건</h5>

<ul>
<li>strings는 길이 1 이상, 50이하인 배열입니다.</li>
<li>strings의 원소는 소문자 알파벳으로 이루어져 있습니다.</li>
<li>strings의 원소는 길이 1 이상, 100이하인 문자열입니다.</li>
<li>모든 strings의 원소의 길이는 n보다 큽니다.</li>
<li>인덱스 1의 문자가 같은 문자열이 여럿 일 경우, 사전순으로 앞선 문자열이 앞쪽에 위치합니다.</li>
</ul>

<h5>입출력 예</h5>
<table class="table">
        <thead><tr>
<th>strings</th>
<th>n</th>
<th>return</th>
</tr>
</thead>
        <tbody><tr>
<td>["sun", "bed", "car"]</td>
<td>1</td>
<td>["car", "bed", "sun"]</td>
</tr>
<tr>
<td>["abce", "abcd", "cdx"]</td>
<td>2</td>
<td>["abcd", "abce", "cdx"]</td>
</tr>
</tbody>
      </table>
<h5>입출력 예 설명</h5>

<p><strong>입출력 예 1</strong><br>
"sun", "bed", "car"의 1번째 인덱스 값은 각각 "u", "e", "a" 입니다. 이를 기준으로 strings를 정렬하면 ["car", "bed", "sun"] 입니다.</p>

<p><strong>입출력 예 2</strong><br>
"abce"와 "abcd", "cdx"의 2번째 인덱스 값은 "c", "c", "x"입니다. 따라서 정렬 후에는 "cdx"가 가장 뒤에 위치합니다. "abce"와 "abcd"는 사전순으로 정렬하면 "abcd"가 우선하므로, 답은 ["abcd", "abce", "cdx"] 입니다.</p>


> 출처: 프로그래머스 코딩 테스트 연습, https://school.programmers.co.kr/learn/challenges

## 📌 Code Review 📌

### 01. 기존 풀이
```javascript
function solution(strings, n) {
    let stringsObjs = [];
    for (let i = 0; i < strings.length; i++) {
        stringsObjs.push({
            word: strings[i],
            char: strings[i][n]
        })
    } // [{word: "sun", char: "u"}, {}, ...]
    
    stringsObjs.sort((a, b) => {
        if (a.char.localeCompare(b.char) === 0) return a.word.localeCompare(b.word);
        else return a.char.localeCompare(b.char);
    }); // 정렬
    
    let sortedStrings = [];
    for (let i = 0; i < stringsObjs.length; i++) {
        sortedStrings.push(stringsObjs[i].word)
    }
    return sortedStrings;
}
```

### 02. 개선 방향: `map`을 활용하여 기존 코드 리팩토링
```javascript
function solution(strings, n) {
    return strings
        // 1. 객체 배열로 변환
        .map(word => ({ word, char: word[n] }))
        // 2. n번째 글자 기준 정렬 (같으면 단어 기준)
        .sort((a, b) => {
            if (a.char === b.char) return a.word.localeCompare(b.word);
            return a.char.localeCompare(b.char);
        })
        // 3. 단어만 추출해서 배열로 반환
        .map(obj => obj.word);
}
```

### 03. 다른 풀이: 객체 변환 없이 바로 정렬하기
```javascript
function solution(strings, n) {
    return strings.sort((a, b) => {
        if (a[n] === b[n]) return a.localeCompare(b);
        return a[n].localeCompare(b[n]);
    });
}
```

### 04. 사전 지식
- JavaScript에서 `arr[1]`처럼 존재하지 않는 인덱스에 접근하면 `undefined`를 반환한다.
- `sort()` 메서드 안의 콜백 함수에서 조건문을 활용하면 여러 단계의 정렬 기준을 세울 수 있다.
- `a.localeCompare(b)`는 문자열 `a`와 `b`를 비교하여 다음과 같은 숫자를 반환한다는 성질을 정렬에 적용한다.
  - `a < b` 이면 음수 (-1) -> `a`를 앞으로
  - `a > b` 이면 양수 (1) -> `b`를 앞으로
  - `a === b` 이면 0 -> 순서 유지
