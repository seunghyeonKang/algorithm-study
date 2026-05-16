# [level 1] 정수 내림차순으로 배치하기 - 12933 

[문제 링크](https://school.programmers.co.kr/learn/courses/30/lessons/12933) 

### 성능 요약

메모리: 32.4 MB, 시간: 0.85 ms

### 구분

코딩테스트 연습 > 연습문제

### 채점결과

정확성: 100.0<br/>합계: 100.0 / 100.0

### 제출 일자

2026년 05월 16일 14:55:39

### 문제 설명

<p>함수 solution은 정수 n을 매개변수로 입력받습니다. n의 각 자릿수를 큰것부터 작은 순으로 정렬한 새로운 정수를 리턴해주세요. 예를들어 n이 118372면 873211을 리턴하면 됩니다.</p>

<h5>제한 조건</h5>

<ul>
<li><code>n</code>은 1이상 8000000000 이하인 자연수입니다.</li>
</ul>

<h5>입출력 예</h5>
<table class="table">
        <thead><tr>
<th>n</th>
<th style="text-align: center">return</th>
</tr>
</thead>
        <tbody><tr>
<td>118372</td>
<td style="text-align: center">873211</td>
</tr>
</tbody>
      </table>

> 출처: 프로그래머스 코딩 테스트 연습, https://school.programmers.co.kr/learn/challenges

## 📌 Code Review 📌

### 01. 기존 풀이
```
function solution(n) {
    return Number(
        String(n)
            .split("")
            .sort((a, b) => b - a)
            .reduce((acc, curr) => acc + curr)
    );
}
```
- `.reduce()`의 과한 사용 → `.join("")`로 대체하자.

### 02. 개선 방향: `.join("")` 활용
```
function solution(n) {
    return Number(
        String(n)
            .split("")
            .sort((a, b) => b - a)
            .join("")
    );
}
```

### 03. 사전 지식
- `.join("")`: 배열의 모든 요소를 이어 붙여 하나의 문자열로 만들어주는 메서드
- `sort()`의 시간 복잡도 원리 → O(n log n)이 나오는 이유
  - $n$개의 요소를 정렬할 때, 가장 효율적인 비교 기반 정렬 알고리즘의 이론적 하한이 $O(n log n)$이다.

    ```
    요소가 8개일 때
    전체를 절반씩 나누는 횟수 → log₂8 = 3번
    각 단계에서 비교 횟수     → 최대 n(8)번

    총 비교 횟수 → n × log n = 8 × 3 = 24번
    ```
  - JavaScript의 `sort`는 엔진마다 다르지만, V8(Node.js, Chrome)은 **TimSort**를 사용한다.

    **TimSort**는 병합 정렬 + 삽입 정렬을 결합한 알고리즘으로, 최선/평균/최악 모두 O(n log n)을 보장한다.
    ```
    삽입 정렬  → 작은 구간에서 빠름
    병합 정렬  → 큰 구간에서 O(n log n) 보장
    TimSort    → 둘을 상황에 따라 혼합
    ```
