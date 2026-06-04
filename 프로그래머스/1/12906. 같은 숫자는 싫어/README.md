# [level 1] 같은 숫자는 싫어 - 12906 

[문제 링크](https://school.programmers.co.kr/learn/courses/30/lessons/12906) 

### 성능 요약

메모리: 82.3 MB, 시간: 15.98 ms

### 구분

코딩테스트 연습 > 스택／큐

### 채점결과

정확성: 71.9<br/>효율성: 28.1<br/>합계: 100.0 / 100.0

### 제출 일자

2026년 06월 04일 13:04:16

### 문제 설명

<p>배열 arr가 주어집니다. 배열 arr의 각 원소는 숫자 0부터 9까지로 이루어져 있습니다. 이때, 배열 arr에서 연속적으로 나타나는 숫자는 하나만 남기고 전부 제거하려고 합니다. 단, 제거된 후 남은 수들을 반환할 때는 배열 arr의 원소들의 순서를 유지해야 합니다. 예를 들면,</p>

<ul>
<li>arr = [1, 1, 3, 3, 0, 1, 1] 이면 [1, 3, 0, 1] 을 return 합니다.</li>
<li>arr = [4, 4, 4, 3, 3] 이면 [4, 3] 을 return 합니다.</li>
</ul>

<p>배열 arr에서 연속적으로 나타나는 숫자는 제거하고 남은 수들을 return 하는 solution 함수를 완성해 주세요.</p>

<h5>제한사항</h5>

<ul>
<li>배열 arr의 크기 : 1,000,000 이하의 자연수</li>
<li>배열 arr의 원소의 크기 : 0보다 크거나 같고 9보다 작거나 같은 정수</li>
</ul>

<hr>

<h5>입출력 예</h5>
<table class="table">
        <thead><tr>
<th>arr</th>
<th>answer</th>
</tr>
</thead>
        <tbody><tr>
<td>[1,1,3,3,0,1,1]</td>
<td>[1,3,0,1]</td>
</tr>
<tr>
<td>[4,4,4,3,3]</td>
<td>[4,3]</td>
</tr>
</tbody>
      </table>
<h5>입출력 예 설명</h5>

<p>입출력 예 #1,2<br>
문제의 예시와 같습니다.</p>


> 출처: 프로그래머스 코딩 테스트 연습, https://school.programmers.co.kr/learn/challenges

## :pushpin: Code Review :pushpin:

### 01. 기존 풀이
```
function solution(arr) {
    return arr.filter((num, i) => i === 0 || arr[i] !== arr[i - 1]);
}
```

### 02. 개선 방향: `num` 변수 활용
```
function solution(arr) {
    return arr.filter((num, i) => i === 0 || num !== arr[i - 1]);
}
```

### 03. 다른 풀이: `for`문 활용
```
function solution(arr) {
    const answer = [];
    for (let i = 0; i < arr.length; i++) {
        // answer의 마지막 원소와 현재 원소가 다를 때만 추가
        if (answer[answer.length - 1] !== arr[i]) {
            answer.push(arr[i]);
        }
    }
    return answer;
}
```
- 기존 풀이와 `for`문 모두 배열을 한 번만 도는 $O(N)$ 복잡도를 가지지만 `for`문을 활용한 코드가 훨씬 빠르다.
1. 함수 호출(Function Call)의 오버헤드: 기존 풀이는 배열의 모든 원소마다 화살표 함수 `(num, i) => ...`를 매번 호출한다.
2. 조건문의 단락 평가(Short-circuit Evaluation) 효율 차이: 기존 풀이의 경우, `i === 0`인지 체크하는 연산이 매번 들어간다.
3. 자바스크립트 엔진의 최적화: 현대 JavaScript 엔진은 단순한 `for` 루프를 보면 아주 극단적으로 최적화한다.

### 04. 사전 지식
- `for...in`은 `i`가 문자열이기 때문에 배열에 매우 느리다. 객체의 속성(Property)을 순회할 때 사용하자.
