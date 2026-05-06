# [level 1] 자릿수 더하기 - 12931 

[문제 링크](https://school.programmers.co.kr/learn/courses/30/lessons/12931) 

### 성능 요약

메모리: 33.6 MB, 시간: 0.19 ms

### 구분

코딩테스트 연습 > 연습문제

### 채점결과

정확성: 100.0<br/>합계: 100.0 / 100.0

### 제출 일자

2026년 05월 06일 14:52:27

### 문제 설명

<p>자연수 N이 주어지면, N의 각 자릿수의 합을 구해서 return 하는 solution 함수를 만들어 주세요.<br>
예를들어 N = 123이면 1 + 2 + 3 = 6을 return 하면 됩니다.</p>

<h5>제한사항</h5>

<ul>
<li>N의 범위 : 100,000,000 이하의 자연수</li>
</ul>

<hr>

<h5>입출력 예</h5>
<table class="table">
        <thead><tr>
<th>N</th>
<th>answer</th>
</tr>
</thead>
        <tbody><tr>
<td>123</td>
<td>6</td>
</tr>
<tr>
<td>987</td>
<td>24</td>
</tr>
</tbody>
      </table>
<h5>입출력 예 설명</h5>

<p>입출력 예 #1<br>
문제의 예시와 같습니다.</p>

<p>입출력 예 #2<br>
9 + 8 + 7 = 24이므로 24를 return 하면 됩니다.</p>


> 출처: 프로그래머스 코딩 테스트 연습, https://school.programmers.co.kr/learn/challenges

## 📌풀이 메모

### 01. 기존 풀이
```
function solution(n)
{
    var answer = 0;
    
    for (let i = 0; i < 9; i++) {
        answer += (n % (10 ** (i + 1)) - n % (10 ** i)) / (10 ** i);
    }

    return answer;
}
```
- 불필요한 고정 반복 (로직 오류 가능성)
- 가독성이 낮음

### 02. 개선 방향: 나머지 연산 반복
```
function solution(n) {
    var answer = 0;

    while (n > 0) {
        answer += n % 10; // 마지막 자릿수 추출
        n = Math.floor(n / 10); // 마지막 자릿수 제거
    }

    return answer;
}
```

### 03. 개선 방향: 문자열 변환
```
function solution(n) {
    return String(n)
        .split('')
        .reduce((acc, curr) => acc + Number(curr), 0);
}
```
- `String(n)` → `"123"`
- `.split('')` → `["1", "2", "3"]`
- `.reduce(...)` → `1 + 2 + 3 = 6`

### 04. 사전 지식
- **String()**: 값을 문자열로 변환하는 함수
- **split()**: 문자열을 특정 구분자(separator) 기준으로 잘라서 배열로 반환하는 메서드
- **reduce()**: 배열의 각 요소를 순서대로 순회하면서 하나의 누적 값으로 줄여나가는 고차 함수(배열 메서드)
  ```
  배열.reduce((누적값, 현재값) => 누적값 + 현재값, 초기값)
  ```
- **Number()**: 값을 숫자로 변환하는 함수
- **Math.floor()**: 소수점 이하를 버리고 정수를 반환하는 Math 객체의 정적 메서드
