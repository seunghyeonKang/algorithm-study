# [level 2] 다음 큰 숫자 - 12911 

[문제 링크](https://school.programmers.co.kr/learn/courses/30/lessons/12911) 

### 성능 요약

메모리: 43.7 MB, 시간: 0.42 ms

### 구분

코딩테스트 연습 > 연습문제

### 채점결과

정확성: 70.0<br/>효율성: 30.0<br/>합계: 100.0 / 100.0

### 제출 일자

2026년 06월 12일 00:05:26

### 문제 설명

<p>자연수 n이 주어졌을 때, n의 다음 큰 숫자는 다음과 같이 정의 합니다.</p>

<ul>
<li>조건 1. n의 다음 큰 숫자는 n보다 큰 자연수 입니다.</li>
<li>조건 2. n의 다음 큰 숫자와 n은 2진수로 변환했을 때 1의 갯수가 같습니다.</li>
<li>조건 3. n의 다음 큰 숫자는 조건 1, 2를 만족하는 수 중 가장 작은 수 입니다.</li>
</ul>

<p>예를 들어서 78(1001110)의 다음 큰 숫자는 83(1010011)입니다.</p>

<p>자연수 n이 매개변수로 주어질 때, n의 다음 큰 숫자를 return 하는 solution 함수를 완성해주세요.</p>

<h5>제한 사항</h5>

<ul>
<li>n은 1,000,000 이하의 자연수 입니다.</li>
</ul>

<hr>

<h5>입출력 예</h5>
<table class="table">
        <thead><tr>
<th>n</th>
<th>result</th>
</tr>
</thead>
        <tbody><tr>
<td>78</td>
<td>83</td>
</tr>
<tr>
<td>15</td>
<td>23</td>
</tr>
</tbody>
      </table>
<h5>입출력 예 설명</h5>

<p>입출력 예#1<br>
문제 예시와 같습니다.<br>
입출력 예#2<br>
15(1111)의 다음 큰 숫자는 23(10111)입니다.</p>


> 출처: 프로그래머스 코딩 테스트 연습, https://school.programmers.co.kr/learn/challenges

## 📌 Code Review 📌

### 01. 기존 풀이
```javascript
function solution(n) {
    let answer = n;
    let i = n + 1;
    
    while (answer === n) {
        const numN = n.toString(2).split("").filter((c) => c === "1").length;
        const numI = i.toString(2).split("").filter((c) => c === "1").length;
        if (numN === numI) answer = i;
        i++;
    }
    
    return answer;
}
```
- 불필요한 반복 계산: `n의 2진수 1의 개수`는 `while`문 밖으로 빼자.
- 가독성과 무한 루프 위험성: `while`문의 조건을 `true`로 넣고 조건이 맞을 때 반환하자.
- 문자열 변환 및 배열 생성 비용: 정규표현식을 활용하거나 비트 연산을 활용해보자.

### 02. 개선 방향: 기존 코드 개선
```javascript
function solution(n) {
    const targetCount = n.toString(2).split("").filter(c => c === "1").length;
    
    let nextNum = n + 1;
    
    while (true) {
        const currentCount = nextNum.toString(2).split("").filter(c => c === "1").length;
        
        if (targetCount === currentCount) {
            return nextNum;
        }
        
        nextNum++;
    }
}
```

### 03. 다른 풀이1: 정규표현식 활용
```javascript
function solution(n) {
    const getOnesCount = (num) => (num.toString(2).match(/1/g) || []).length;
    
    const targetCount = getOnesCount(n);
    let nextNum = n + 1;
    
    while (getOnesCount(nextNum) !== targetCount) {
        nextNum++;
    }
    
    return nextNum;
}
```

### 04. 다른 풀이2: 비트 연산 활용
```javascript
function solution(n) {
    const countOnes = (num) => {
        let count = 0;
        while (num > 0) {
            if (num & 1) count++;
            num >>>= 1;
        }
        return count;
    };

    const targetCount = countOnes(n);
    let nextNum = n + 1;

    while (countOnes(nextNum) !== targetCount) {
        nextNum++;
    }

    return nextNum;
}
```

### 05. 사전 지식
- `.match()`의 활용
  ```
  const str = "Banana, banana, BANANA";
  
  // 1. 문자열만 사용 -> 첫 번째 일치하는 것만 상세히 찾음
  str.match("banana"); // ['banana', index: 8, ...]
  
  // 2. 정규표현식 기본 -> 첫 번째 일치하는 것만 상세히 찾음 (1번과 동일)
  str.match(/banana/); // ['banana', index: 8, ...]
  
  // 3. 정규표현식 + 플래그 -> 대소문자 구분 없이(i) 전체(g)에서 다 찾음
  str.match(/banana/gi); // ['Banana', 'banana', 'BANANA']

  // 문자열을 단 하나도 찾지 못하면 null 반환
  ```

- 정규표현식 활용
  - `/ (슬래시)`: 정규표현식의 시작과 끝을 나타낸다.
  - `g (플래그)`: Global(전체)의 약자. 이 플래그가 없으면 첫 번째로 일치하는 문자 하나만 찾고 종료하지만, `g`를 붙이면 문자열 처음부터 끝까지 일치하는 모든 것을 다 찾는다.
- 비트 연산 (Bitwise Operation): 0과 1을 비트 단위로 직접 조작하는 연산
  - `&` : 두 비트가 모두 1일 때만 1 → 특정 비트 확인에 사용
  - `|` : 하나라도 1이면 1 → 비트를 켤 때 사용
  - `^` : 서로 다르면 1 → 같은 값끼리 XOR하면 0이 됨
  - `~` : 비트 전체 반전 → JavaScript에서는 음수가 나와 주의 필요
  - `<<` : 왼쪽으로 n칸 이동 → `n << 1`은 `n × 2`와 동일
  - `>>` : 오른쪽으로 n칸 이동 → `n >> 1`은 `n ÷ 2` (소수점 버림)와 동일
