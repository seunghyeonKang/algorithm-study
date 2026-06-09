# [level 1] 삼총사 - 131705 

[문제 링크](https://school.programmers.co.kr/learn/courses/30/lessons/131705) 

### 성능 요약

메모리: 43.8 MB, 시간: 0.10 ms

### 구분

코딩테스트 연습 > 연습문제

### 채점결과

정확성: 100.0<br/>합계: 100.0 / 100.0

### 제출 일자

2026년 06월 09일 10:24:47

### 문제 설명

<p>한국중학교에 다니는 학생들은 각자 정수 번호를 갖고 있습니다. 이 학교 학생 3명의 정수 번호를 더했을 때 0이 되면 3명의 학생은 삼총사라고 합니다. 예를 들어, 5명의 학생이 있고, 각각의 정수 번호가 순서대로 -2, 3, 0, 2, -5일 때, 첫 번째, 세 번째, 네 번째 학생의 정수 번호를 더하면 0이므로 세 학생은 삼총사입니다. 또한, 두 번째, 네 번째, 다섯 번째 학생의 정수 번호를 더해도 0이므로 세 학생도 삼총사입니다. 따라서 이 경우 한국중학교에서는 두 가지 방법으로 삼총사를 만들 수 있습니다.</p>

<p>한국중학교 학생들의 번호를 나타내는 정수 배열 <code>number</code>가 매개변수로 주어질 때, 학생들 중 삼총사를 만들 수 있는 방법의 수를 return 하도록 solution 함수를 완성하세요.</p>

<hr>

<h5>제한사항</h5>

<ul>
<li>3 ≤ <code>number</code>의 길이 ≤ 13</li>
<li>-1,000 ≤ <code>number</code>의 각 원소 ≤ 1,000</li>
<li>서로 다른 학생의 정수 번호가 같을 수 있습니다.</li>
</ul>

<hr>

<h5>입출력 예</h5>
<table class="table">
        <thead><tr>
<th>number</th>
<th>result</th>
</tr>
</thead>
        <tbody><tr>
<td>[-2, 3, 0, 2, -5]</td>
<td>2</td>
</tr>
<tr>
<td>[-3, -2, -1, 0, 1, 2, 3]</td>
<td>5</td>
</tr>
<tr>
<td>[-1, 1, -1, 1]</td>
<td>0</td>
</tr>
</tbody>
      </table>
<hr>

<h5>입출력 예 설명</h5>

<p><strong>입출력 예 #1</strong></p>

<ul>
<li>문제 예시와 같습니다.</li>
</ul>

<p><strong>입출력 예 #2</strong></p>

<ul>
<li>학생들의 정수 번호 쌍 (-3, 0, 3), (-2, 0, 2), (-1, 0, 1), (-2, -1, 3), (-3, 1, 2) 이 삼총사가 될 수 있으므로, 5를 return 합니다.</li>
</ul>

<p><strong>입출력 예 #3</strong></p>

<ul>
<li>삼총사가 될 수 있는 방법이 없습니다.</li>
</ul>


> 출처: 프로그래머스 코딩 테스트 연습, https://school.programmers.co.kr/learn/challenges

## 📌 Code Review 📌

### 01. 기존 풀이
```
function solution(number) {
    let count = 0;
    
    for (let i = 0; i < number.length - 2; i++) {
        for (let j = i + 1; j < number.length - 1; j++) {
            for (let k = j + 1; k < number.length; k++) {
                if (number[i] + number[j] + number[k] === 0) count++;
            }
        }
    }
    
    return count;
}
```

### 02. 개선 방향: 재귀(DFS) 형태의 조합 함수
```
function solution(number) {
    let count = 0;

    function combine(index, currentSum, depth) {
        // 3명을 모두 뽑았을 때
        if (depth === 3) {
            if (currentSum === 0) count++;
            return;
        }
        // 배열 끝까지 탐색했을 때
        if (index === number.length) return;

        // 현재 학생을 포함하는 경우
        combine(index + 1, currentSum + number[index], depth + 1);
        // 현재 학생을 포함하지 않는 경우
        combine(index + 1, currentSum, depth);
    }

    combine(0, 0, 0);
    return count;
}
```
→ 확장 가능성이 좋다.

### 03. 다른 풀이: `reduce` 메서드를 활용한 숏코딩
```
function solution(number) {
    return number.reduce((acc, v, i) => 
        acc + number.slice(i + 1).reduce((acc2, w, j) => 
            acc2 + number.slice(i + j + 2).filter(x => v + w + x === 0).length, 0)
    , 0);
}
```

### 04. 사전 지식
- `DFS` (`Depth-First Search`, 깊이 우선 탐색): 그래프나 트리를 탐색하는 알고리즘 중 하나. 한 방향으로 끝까지 파고든 뒤, 되돌아오며 다른 경로를 탐색하는 방식이다.
