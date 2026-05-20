# [level 1] 제일 작은 수 제거하기 - 12935 

[문제 링크](https://school.programmers.co.kr/learn/courses/30/lessons/12935) 

### 성능 요약

메모리: 41.5 MB, 시간: 3.52 ms

### 구분

코딩테스트 연습 > 연습문제

### 채점결과

정확성: 100.0<br/>합계: 100.0 / 100.0

### 제출 일자

2026년 05월 20일 10:40:43

### 문제 설명

<p>정수를 저장한 배열, arr 에서 가장 작은 수를 제거한 배열을 리턴하는 함수, solution을 완성해주세요. 단, 리턴하려는 배열이 빈 배열인 경우엔 배열에 -1을 채워 리턴하세요. 예를들어 arr이 [4,3,2,1]인 경우는 [4,3,2]를 리턴 하고, [10]면 [-1]을 리턴 합니다.</p>

<h5>제한 조건</h5>

<ul>
<li>arr은 길이 1 이상인 배열입니다.</li>
<li>인덱스 i, j에 대해 i ≠ j이면 arr[i] ≠ arr[j] 입니다.</li>
</ul>

<h5>입출력 예</h5>
<table class="table">
        <thead><tr>
<th>arr</th>
<th>return</th>
</tr>
</thead>
        <tbody><tr>
<td>[4,3,2,1]</td>
<td>[4,3,2]</td>
</tr>
<tr>
<td>[10]</td>
<td>[-1]</td>
</tr>
</tbody>
      </table>

> 출처: 프로그래머스 코딩 테스트 연습, https://school.programmers.co.kr/learn/challenges

## 📌 Code Review 📌

### 01. 기존 풀이
```
function solution(arr) {
    if (arr.length === 1) return [-1];
    
    let min = arr[0];
    
    for (let num of arr) {
        if (min > num) min = num
    }
    
    return arr.filter((n) => n !== min);
}
```

### 02. 개선 방향: `Math.min()`과 Spread 연산자 활용
```
function solution(arr) {
    if (arr.length === 1) return [-1];
    
    const min = Math.min(...arr);
    
    return arr.filter((n) => n !== min);
}
```

### 03. 다른 풀이: `.indexOf()`와 `.splice()` 활용
```
function solution(arr) {
    if (arr.length <= 1) return [-1];
    
    arr.splice(arr.indexOf(Math.min(...arr)), 1);
    
    return arr;
}
```
- 전체 요소를 검사하는 `filter`와 달리 `splice`는 해당 인덱스만 찾기 때문에, 요소 중복이 없는 이 문제에서 성능이 미세하게 좋다.

### 04. 사전 지식
- `Math.min()`: 인자로 전달받은 여러 숫자들 중 가장 작은 값을 찾아서 반환하는 자바스크립트 내장 함수
- `.splice()`: 배열의 특정 위치에 있는 요소를 추가하거나 삭제하여 원본 배열을 직접 수정하는 내장 함수
