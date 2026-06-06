# [level 1] 직사각형 별찍기 - 12969 

[문제 링크](https://school.programmers.co.kr/learn/courses/30/lessons/12969) 

### 성능 요약

메모리: 35.4 MB, 시간: 43.77 ms

### 구분

코딩테스트 연습 > 연습문제

### 채점결과

정확성: 100.0<br/>합계: 100.0 / 100.0

### 제출 일자

2026년 06월 06일 16:57:59

### 문제 설명

<p>이 문제에는 표준 입력으로 두 개의 정수 n과 m이 주어집니다.<br>
별(*) 문자를 이용해 가로의 길이가 n, 세로의 길이가 m인 직사각형 형태를 출력해보세요.</p>

<hr>

<h5>제한 조건</h5>

<ul>
<li>n과 m은 각각 1000 이하인 자연수입니다.</li>
</ul>

<hr>

<h5>예시</h5>

<p>입력</p>
<div class="highlight"><pre class="codehilite"><code>5 3
</code></pre></div>
<p>출력</p>
<div class="highlight"><pre class="codehilite"><code>*****
*****
*****
</code></pre></div>

> 출처: 프로그래머스 코딩 테스트 연습, https://school.programmers.co.kr/learn/challenges

## 📌 Code Review 📌

### 01. 기존 풀이
```
process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
    const n = data.split(" ");
    const a = Number(n[0]), b = Number(n[1]);
    for (let i = 0; i < b; i++) {
        let arr = [];
        for (let j = 0; j < a; j++) {
            arr.push("*");
        }
        console.log(arr.join(""));
    }
});
```

### 02. 개선 방향: `repeat()`, `map()` 활용
```
process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
    const [n, m] = data.split(" ").map(Number); // 구조 분해 할당과 map 활용
    
    const row = '*'.repeat(n);
    for (let i = 0; i < m; i++) {
        console.log(row);
    }
});
```
- `map()`을 활용해 가독성 개선
- `.repeat()`을 활용하여, 배열을 만들고 합치는 연산(`push`, `join`) 생략

### 03. 사전 지식
- `process.stdin`: Node.js의 내장 객체로, 표준 입력 스트림(Standard Input Stream)을 나타낸다.
  - `process.stdin.setEncoding('utf8');`: 입력으로 들어오는 이진 데이터(Buffer)를 우리가 읽을 수 있는 일반 텍스트(`utf8` 문자열)로 변환하겠다고 선언한다.
  - `process.stdin.on('data', data => { ... });`: 이벤트 리스너(Event Listener)이다. 콘솔에 데이터 입력이 완료(엔터 등)되어 데이터가 들어오는 '이벤트(`data`)'가 발생하면, 화살표 함수를 실행하라는 의미이다.
- `map(Number)`을 활용한 구조 분해 할당: 입력된 공백 기준의 문자열 배열을 숫자로 일괄 변환한 뒤, `[n, m]`과 같이 각각의 변수에 순서대로 직관적으로 대입하는 방식이다.
- `repeat(n)`: 반복문 없이 지정된 문자열을 `n`번 연속으로 연결한 새로운 문자열을 효율적으로 생성해 주는 메서드이다.
