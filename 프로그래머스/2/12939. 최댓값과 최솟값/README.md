# [level 2] 최댓값과 최솟값 - 12939 

[문제 링크](https://school.programmers.co.kr/learn/courses/30/lessons/12939) 

### 성능 요약

메모리: 32.6 MB, 시간: 0.06 ms

### 구분

코딩테스트 연습 > 연습문제

### 채점결과

정확성: 100.0<br/>합계: 100.0 / 100.0

### 제출 일자

2026년 05월 28일 19:24:48

### 문제 설명

<p>문자열 s에는 공백으로 구분된 숫자들이 저장되어 있습니다. str에 나타나는 숫자 중 최소값과 최대값을 찾아 이를 "(최소값) (최대값)"형태의 문자열을 반환하는 함수, solution을 완성하세요.<br>
예를들어 s가 "1 2 3 4"라면 "1 4"를 리턴하고, "-1 -2 -3 -4"라면 "-4 -1"을 리턴하면 됩니다.</p>

<h5>제한 조건</h5>

<ul>
<li>s에는 둘 이상의 정수가 공백으로 구분되어 있습니다.</li>
</ul>

<h5>입출력 예</h5>
<table class="table">
        <thead><tr>
<th>s</th>
<th style="text-align: center">return</th>
</tr>
</thead>
        <tbody><tr>
<td>"1 2 3 4"</td>
<td style="text-align: center">"1 4"</td>
</tr>
<tr>
<td>"-1 -2 -3 -4"</td>
<td style="text-align: center">"-4 -1"</td>
</tr>
<tr>
<td>"-1 -1"</td>
<td style="text-align: center">"-1 -1"</td>
</tr>
</tbody>
      </table>

> 출처: 프로그래머스 코딩 테스트 연습, https://school.programmers.co.kr/learn/challenges

## 📌 Code Review 📌

### 01. 기존 풀이
```
function solution(s) {
    let arr = s.split(" ");
    let min = Math.min(...arr);
    let max = Math.max(...arr);
    return `${min} ${max}`;
}
```
- 타입 변환 누락
- `let` → `const`
- 스프레드 연산자 주의사항

### 02. 개선 방향: 기존 코드 리팩토링
```
function solution(s) {
    const arr = s.split(" ").map(Number);
    const min = Math.min(...arr);
    const max = Math.max(...arr);
    return `${min} ${max}`;
}
```

### 03. 개선 방향: 대용량 데이터 안전 버전
```
function solution(s) {
    const numbers = s.split(" ").map(Number);
    
    let min = Infinity;
    let max = -Infinity;
    
    for (const num of numbers) {
        if (num < min) min = num;
        if (num > max) max = num;
    }
    
    return `${min} ${max}`;
}
```

### 04. 사전 지식
- `.map(Number)`: `.map((x) => Number(x))`의 축약형
- `Infinity`: JavaScript에서 무한대를 나타내는 값
- 객체와 구조 분해 할당

  ```
  const result = { min: 1, max: 4 };
  const { min, max } = result;

  // → 아래와 동일
  
  const min = result.min;
  const max = result.max;
  ```
- `Math.min(...arr)`의 치명적인 약점

  함수에 전달할 수 있는 인자(Arguments)의 개수 제한이 보통 약 6만 개 ~ 12만 개 정도이다. 만약 문자열 `s`에 포함된 숫자가 그 이상이라면 `RangeError: Maximum call stack size exceeded` 에러가 나며 프로그램이 뻗는다.
- 가비지 컬렉션(Garbage Collector) - `reduce`

  ```
  // 방식 A: reduce 두 번
  const min = numbers.reduce((a, b) => a < b ? a : b);
  const max = numbers.reduce((a, b) => a > b ? a : b);
  ```
  → 순회 횟수: 2n, 객체 생성 없음, 대용량에서 유리

  ```
  // 방식 B: reduce 한 번 (객체 생성)
  const { min, max } = numbers.reduce(
      (acc, cur) => ({
          min: Math.min(acc.min, cur),
          max: Math.max(acc.max, cur),
      }),
      { min: Infinity, max: -Infinity }
  );
  ```
  → 순회 횟수: n, 객체 생성 n개, 이론상 빠르나 GC 부담 있음
