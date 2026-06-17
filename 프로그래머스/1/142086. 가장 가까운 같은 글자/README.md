# [level 1] 가장 가까운 같은 글자 - 142086 

[문제 링크](https://school.programmers.co.kr/learn/courses/30/lessons/142086) 

### 성능 요약

메모리: 45 MB, 시간: 36.72 ms

### 구분

코딩테스트 연습 > 연습문제

### 채점결과

정확성: 100.0<br/>합계: 100.0 / 100.0

### 제출 일자

2026년 06월 14일 22:03:35

### 문제 설명

<p>문자열 <code>s</code>가&nbsp;주어졌을 때, <code>s</code>의 각 위치마다 자신보다 앞에 나왔으면서, 자신과 가장 가까운 곳에 있는 같은 글자가 어디 있는지 알고 싶습니다.<br>
예를 들어, <code>s</code>="banana"라고 할 때,&nbsp; 각 글자들을 왼쪽부터 오른쪽으로 읽어 나가면서&nbsp;다음과 같이 진행할 수 있습니다.</p>

<ul>
<li>b는 처음 나왔기 때문에 자신의 앞에 같은 글자가 없습니다. 이는 -1로 표현합니다.</li>
<li>a는 처음 나왔기 때문에 자신의 앞에 같은 글자가 없습니다. 이는 -1로 표현합니다.</li>
<li>n은 처음 나왔기 때문에 자신의 앞에 같은 글자가 없습니다. 이는 -1로 표현합니다.</li>
<li>a는 자신보다 두 칸 앞에 a가 있습니다. 이는 2로 표현합니다.</li>
<li>n도&nbsp;자신보다 두 칸 앞에 n이 있습니다. 이는 2로 표현합니다.</li>
<li>a는 자신보다 두 칸, 네 칸 앞에 a가 있습니다. 이 중 가까운 것은 두 칸 앞이고, 이는 2로 표현합니다.</li>
</ul>

<p>따라서 최종 결과물은 [-1, -1, -1, 2, 2, 2]가 됩니다.</p>

<p>문자열 <code>s</code>이 주어질 때, 위와 같이 정의된 연산을 수행하는 함수 solution을 완성해주세요.</p>

<hr>

<h5>제한사항</h5>

<ul>
<li>1 ≤ <code>s</code>의 길이 ≤ 10,000

<ul>
<li><code>s</code>은 영어 소문자로만 이루어져 있습니다.</li>
</ul></li>
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
<td>"banana"</td>
<td>[-1, -1, -1, 2, 2, 2]</td>
</tr>
<tr>
<td>"foobar"</td>
<td>[-1, -1, 1, -1, -1, -1]</td>
</tr>
</tbody>
      </table>
<hr>

<h5>입출력 예 설명</h5>

<p>입출력 예 #1<br>
지문과 같습니다.</p>

<p>입출력 예 #2<br>
설명 생략</p>


> 출처: 프로그래머스 코딩 테스트 연습, https://school.programmers.co.kr/learn/challenges

## 📌 Code Review 📌

### 01. 기존 풀이
```javascript
function solution(s) {
    let sArr = s.split("");
    return sArr.map((char, i) => {
        if (sArr.indexOf(char) === i) return -1;
        let temp = sArr.indexOf(char);
        sArr[temp] = 0;
        return i - temp;
    })
}
```
- 시간복잡도가 $O(N^2)$이다. 해시 맵(객체)을 활용하여 개선하자.

### 02. 개선 방향: 객체 활용
```javascript
function solution(s) {
    const lastSeen = {}; // 각 글자의 마지막 인덱스를 저장할 객체
    const result = [];

    for (let i = 0; i < s.length; i++) {
        const char = s[i];

        // 이미 나온 적이 있는 글자라면
        if (lastSeen[char] !== undefined) {
            result.push(i - lastSeen[char]);
        } else {
            // 처음 등장하는 글자라면
            result.push(-1);
        }

        // 현재 글자의 위치를 최신화
        lastSeen[char] = i;
    }

    return result;
}
```

### 03. 사전 지식
- `obj.key (점 표기법)`: 내가 바꾸거나 찾으려는 키의 이름을 정확히 알고 있고, 평범한 문자열일 때 기본적으로 사용한다.
- `obj[key] (대괄호 표기법)`: 앞선 알고리즘 문제처럼 `char`나 `i` 같은 변수 안의 값에 따라 매번 찾아야 하는 키가 바뀔 때(동적일 때) 필수적으로 사용한다.
