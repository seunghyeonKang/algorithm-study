# [level 1] 두 정수 사이의 합 - 12912 

[문제 링크](https://school.programmers.co.kr/learn/courses/30/lessons/12912) 

### 성능 요약

메모리: 534 MB, 시간: 636.32 ms

### 구분

코딩테스트 연습 > 연습문제

### 채점결과

정확성: 100.0<br/>합계: 100.0 / 100.0

### 제출 일자

2026년 05월 08일 17:31:49

### 문제 설명

<p>두 정수 a, b가 주어졌을 때 a와 b 사이에 속한 모든 정수의 합을 리턴하는 함수, solution을 완성하세요. <br>
예를 들어 a = 3, b = 5인 경우, 3 + 4 + 5 = 12이므로 12를 리턴합니다.</p>

<h5>제한 조건</h5>

<ul>
<li>a와 b가 같은 경우는 둘 중 아무 수나 리턴하세요.</li>
<li>a와 b는 -10,000,000 이상 10,000,000 이하인 정수입니다.</li>
<li>a와 b의 대소관계는 정해져있지 않습니다.</li>
</ul>

<h5>입출력 예</h5>
<table class="table">
        <thead><tr>
<th>a</th>
<th>b</th>
<th>return</th>
</tr>
</thead>
        <tbody><tr>
<td>3</td>
<td>5</td>
<td>12</td>
</tr>
<tr>
<td>3</td>
<td>3</td>
<td>3</td>
</tr>
<tr>
<td>5</td>
<td>3</td>
<td>12</td>
</tr>
</tbody>
      </table>

> 출처: 프로그래머스 코딩 테스트 연습, https://school.programmers.co.kr/learn/challenges

## 📌풀이 메모

### 01. 기존 풀이
```
function solution(a, b) {
    let array = [];
    
    if (a === b) {
        array.push(a);
    } else if (a < b) {
        for (let i = a; i <= b; i++) {
            array.push(i);
        }
    } else if (a > b) {
        for (let i = b; i <= a; i++) {
            array.push(i);
        }
    }
    
    return array.reduce((arr, curr) => arr + curr, 0);
}
```
- 메모리 효율성: O(n)으로 비효율적
- 가독성: `Math.min`과 `Math.max`를 활용하여 개선 가능

### 02. 개선 방향: 기존 코드 개선(배열 없이 합산)
```
function solution(a, b) {
    let sum = 0;
    const min = Math.min(a, b);
    const max = Math.max(a, b);

    for (let i = min; i <= max; i++) {
        sum += i;
    }

    return sum;
}
```

### 03. 개선 방향: 가우스의 등차수열 합 공식(Math.abs 활용)
```
function solution(a, b) {
    return (a + b) * (Math.abs(a - b) + 1) / 2;
}
```

### 04. 개선 방향: 가우스의 등차수열 합 공식(정석)
```
function solution(a, b) {
    const min = Math.min(a, b);
    const max = Math.max(a, b);
    const count = max - min + 1;

    return (min + max) * count / 2;
}
```
→ 명확한 의도가 설명되어있어 유지보수가 용이하다.

### 05. 사전 지식
- `Math.min(a, b, ...)`: 입력받은 여러 숫자 중 가장 작은 값을 찾아 반환한다.
- `Math.max(a, b, ...)`: 입력받은 여러 숫자 중 가장 큰 값을 찾아 반환한다.
- `Math.abs(n)`: 숫자의 부호를 제거하고 무조건 양수인 절댓값으로 만들어 반환한다.

- `빅오 표기법(Big-O Notation)`: 알고리즘이 얼마나 효율적인지 나타내는 표기법이며, 빠른 순서는 아래와 같다.
  ```
  O(1) < O(log n) < O(n) < O(n log n) < O(n²) < O(2ⁿ)
  빠름 ◀─────────────────────────────────────────▶ 느림
  ```

  - `O(1)`: 상수 시간 복잡도 → 입력값($n$)이 아무리 커지더라도 문제를 해결하는 데 걸리는 시간이 항상 일정한 경우.
  
  - `O(n)`: 선형 시간 복잡도 → 데이터 양($n$)에 따라 시간이 '직선(선) 모양'으로 늘어나는 경우.
