# [level 1] 나누어 떨어지는 숫자 배열 - 12910 

[문제 링크](https://school.programmers.co.kr/learn/courses/30/lessons/12910) 

### 성능 요약

메모리: 37 MB, 시간: 1.48 ms

### 구분

코딩테스트 연습 > 연습문제

### 채점결과

정확성: 100.0<br/>합계: 100.0 / 100.0

### 제출 일자

2026년 05월 14일 14:07:41

### 문제 설명

<p>array의 각 element 중 divisor로 나누어 떨어지는 값을 오름차순으로 정렬한 배열을 반환하는 함수, solution을 작성해주세요.<br>
divisor로 나누어 떨어지는 element가 하나도 없다면 배열에 -1을 담아 반환하세요. </p>

<h5>제한사항</h5>

<ul>
<li>arr은 자연수를 담은 배열입니다.</li>
<li>정수 i, j에 대해 i ≠ j 이면 arr[i] ≠ arr[j] 입니다.</li>
<li>divisor는 자연수입니다.</li>
<li>array는 길이 1 이상인 배열입니다.</li>
</ul>

<h5>입출력 예</h5>
<table class="table">
        <thead><tr>
<th>arr</th>
<th>divisor</th>
<th>return</th>
</tr>
</thead>
        <tbody><tr>
<td>[5, 9, 7, 10]</td>
<td>5</td>
<td>[5, 10]</td>
</tr>
<tr>
<td>[2, 36, 1, 3]</td>
<td>1</td>
<td>[1, 2, 3, 36]</td>
</tr>
<tr>
<td>[3,2,6]</td>
<td>10</td>
<td>[-1]</td>
</tr>
</tbody>
      </table>
<h5>입출력 예 설명</h5>

<p>입출력 예#1<br>
arr의 원소 중 5로 나누어 떨어지는 원소는 5와 10입니다. 따라서 [5, 10]을 리턴합니다.</p>

<p>입출력 예#2<br>
arr의 모든 원소는 1으로 나누어 떨어집니다. 원소를 오름차순으로 정렬해 [1, 2, 3, 36]을 리턴합니다.</p>

<p>입출력 예#3<br>
3, 2, 6은 10으로 나누어 떨어지지 않습니다. 나누어 떨어지는 원소가 없으므로 [-1]을 리턴합니다.</p>


> 출처: 프로그래머스 코딩 테스트 연습, https://school.programmers.co.kr/learn/challenges

## 📌 Code Review 📌

### 01. 기존 풀이
```
function solution(arr, divisor) {
    let answer = [];
    
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % divisor === 0) answer.push(arr[i]);
    }
    
    if (answer.length === 0) {
        return [-1];
    } else {
        return answer.sort((a, b) => a - b);
    }
}
```
- `.filter` 메서드 활용하여 더 가독성 좋게 수정
- 삼항 연산자 활용하여 더 간결하게 수정

### 02. 개선 방향: 더 간결하고 가독성 좋게 리팩토링
```
function solution(arr, divisor) {
    const answer = arr.filter(n => n % divisor === 0);
    return answer.length === 0 ? [-1] : answer.sort((a, b) => a - b);
}
```

### 03. 사전 지식
- `.filter`: 배열을 순회하면서 조건이 `true`인 요소만 모아 새 배열을 반환한다. 원본 배열은 변경되지 않는다.

  ```
  const 새배열 = 원본배열.filter(요소 => 조건);
  ```
- `.sort`: 원본 배열 자체를 변경하며, 정렬된 배열을 반환한다.

  ```
  배열.sort((a, b) => a - b);  // 오름차순 - 콜백함수의 반환값이 음수이면 `a 다음 b` 순서로 정렬한다.
  배열.sort((a, b) => b - a);  // 내림차순
  ```

### 04. 추가 지식: `.sort`의 활용
- 문자열 정렬

  ```
  arr.sort((a, b) => b.localeCompare(a)); // 내림차순
  arr.sort((a, b) => a.localeCompare(b)); // 오름차순 (명시적으로 쓸 때)
  ```
- 객체 배열 정렬

  ```
  const arr = [
      { name: "Charlie", age: 30 },
      { name: "Alice", age: 25 },
      { name: "Bob", age: 28 }
  ];
  
  arr.sort((a, b) => a.age - b.age);
  // → Alice(25), Bob(28), Charlie(30)
  ```
- 숫자를 문자열처럼 이어붙여서 만든 수가 최대가 되도록 정렬

  ```
  const arr = [3, 30, 34, 5, 9];
  
  arr.sort((a, b) => {
      const ab = String(a) + String(b); // "330"
      const ba = String(b) + String(a); // "303"
      return ba - ab; // 문자열이지만 숫자로 변환되어 비교됨
  });
  // → [9, 5, 34, 3, 30] → 이어붙이면 "9534330"
  ```
