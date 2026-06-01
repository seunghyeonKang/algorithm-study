# [level 1] 행렬의 덧셈 - 12950 

[문제 링크](https://school.programmers.co.kr/learn/courses/30/lessons/12950) 

### 성능 요약

메모리: 66.6 MB, 시간: 5.08 ms

### 구분

코딩테스트 연습 > 연습문제

### 채점결과

정확성: 100.0<br/>합계: 100.0 / 100.0

### 제출 일자

2026년 06월 01일 12:52:24

### 문제 설명

<p>행렬의 덧셈은 행과 열의 크기가 같은 두 행렬의 같은 행, 같은 열의 값을 서로 더한 결과가 됩니다. 2개의 행렬 arr1과 arr2를 입력받아, 행렬 덧셈의 결과를 반환하는 함수, solution을 완성해주세요.</p>

<h5>제한 조건</h5>

<ul>
<li>행렬 arr1, arr2의 행과 열의 길이는 500을 넘지 않습니다.</li>
</ul>

<h5>입출력 예</h5>
<table class="table">
        <thead><tr>
<th>arr1</th>
<th>arr2</th>
<th>return</th>
</tr>
</thead>
        <tbody><tr>
<td>[[1,2],[2,3]]</td>
<td>[[3,4],[5,6]]</td>
<td>[[4,6],[7,9]]</td>
</tr>
<tr>
<td>[[1],[2]]</td>
<td>[[3],[4]]</td>
<td>[[4],[6]]</td>
</tr>
</tbody>
      </table>

> 출처: 프로그래머스 코딩 테스트 연습, https://school.programmers.co.kr/learn/challenges

## 📌 Code Review 📌

### 01. 기존 풀이1
```
function solution(arr1, arr2) {
    let answer = [[]];
    answer = arr1.map((hang, i) => {
        let temp = [];
        for (let a = 0; a < hang.length; a++) {
            temp.push(hang[a] + arr2[i][a]);
        }
        return temp;
    })
    return answer;
}
```
- `let answer = [[]]` 초기화가 불필요하다.
- 내부 루프도 `map`으로 통일하여 코드 일관성을 높이자.

### 02. 기존 풀이2
```
function solution(arr1, arr2) {
    let answer = [];
    for (let a = 0; a < arr1.length; a++){
        answer.push([]);
        for (let b = 0; b < arr1[a].length; b++) {
            answer[a].push(arr1[a][b] + arr2[a][b]);
        }
    }
    return answer;
}
```
- 성능 측면 단점: 안쪽 루프에서 `answer[a].push()`를 할 때마다 컴퓨터는 `answer` 배열의 `a`번째 인덱스를 찾아가서 그 안의 배열에 요소를 추가해야 한다. 주소 참조(Look-up) 연산이 한 단계 더 들어간다.

### 03. 개선 방향: 기존 풀이1를 리팩토링
```
function solution(arr1, arr2) {
    return arr1.map((row, i) => row.map((val, j) => val + arr2[i][j]));
}
```

### 04. 개선 방향: 기존 풀이2를 리팩토링
```
function solution(arr1, arr2) {
    const answer = [];
    
    for (let i = 0; i < arr1.length; i++) {
        const row = [];
        for (let j = 0; j < arr1[i].length; j++) {
            row.push(arr1[i][j] + arr2[i][j]);
        }
        answer.push(row);
    }
    
    return answer;
}
```
→ 한 행이 완성되면 한 번에 push한다.

→ 안쪽 루프에서 변수 주소를 거치지 않고 로컬 변수 `row`에 곧바로 `push`하므로 미세하게 메모리 접근 속도가 빠를 수 있다.

### 05. 사전 지식
```
function solution(arr1, arr2) {
    let answer = [];
    for (let a = 0; a < arr1.length; a++){
        for (let b = 0; b < arr1[a].length; b++) {
            answer[a].push(arr1[a][b] + arr2[a][b]);
        }
    }
    return answer;
}
```
위 코드에서 에러가 난 이유:
1. 인덱스 접근: 빈 배열(`let answer = []`)에 없는 방(`answer[0]`)을 부르면 에러 대신 `undefined`가 나온다.
2. 메서드 제약: `undefined`는 배열이 아니므로 `.push()`를 쓰면 런타임 에러가 발생한다.
3. 해결법: 안쪽 루프를 돌기 전에 `answer.push([])` 등으로 '방 안의 방'을 만들어 놓아야 안전하게 데이터를 채울 수 있다.
