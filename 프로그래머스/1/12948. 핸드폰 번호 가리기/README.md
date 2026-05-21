# [level 1] 핸드폰 번호 가리기 - 12948 

[문제 링크](https://school.programmers.co.kr/learn/courses/30/lessons/12948) 

### 성능 요약

메모리: 32.3 MB, 시간: 0.05 ms

### 구분

코딩테스트 연습 > 연습문제

### 채점결과

정확성: 100.0<br/>합계: 100.0 / 100.0

### 제출 일자

2026년 05월 21일 11:22:05

### 문제 설명

<p>프로그래머스 모바일은 개인정보 보호를 위해 고지서를 보낼 때 고객들의 전화번호의 일부를 가립니다.<br>
전화번호가 문자열 phone_number로 주어졌을 때, 전화번호의 뒷 4자리를 제외한 나머지 숫자를 전부 <code>*</code>으로 가린 문자열을 리턴하는 함수, solution을 완성해주세요.</p>

<h5>제한 조건</h5>

<ul>
<li>phone_number는 길이 4 이상,  20이하인 문자열입니다.</li>
</ul>

<h5>입출력 예</h5>
<table class="table">
        <thead><tr>
<th>phone_number</th>
<th>return</th>
</tr>
</thead>
        <tbody><tr>
<td>"01033334444"</td>
<td>"*******4444"</td>
</tr>
<tr>
<td>"027778888"</td>
<td>"*****8888"</td>
</tr>
</tbody>
      </table>

> 출처: 프로그래머스 코딩 테스트 연습, https://school.programmers.co.kr/learn/challenges

## 📌 Code Review 📌

### 01. 기존 풀이
```
function solution(phone_number) {
    let forNum = "";
    let lastNum = "";
    for (let i = 0; i < phone_number.length - 4; i ++) {
        forNum += "*";
    }
    for (let i = phone_number.length - 4; i < phone_number.length; i++) {
        lastNum += phone_number[i];
    }
    return forNum + lastNum;
}
```

### 02. 개선 방향: `repeat()`와 `slice()` 활용
```
function solution(phone_number) {
    return "*".repeat(phone_number.length - 4) + phone_number.slice(-4);
}
```

### 03. 개선 방향: `replace()`와 정규표현식 활용
```
function solution(phone_number) {
    return phone_number.replace(/\d(?=\d{4})/g, '*');
}
```
→ 뒤의 4자리를 제외한(`?!.{4}$`) 모든 숫자(`\d`)를 `*`로 바꾼다.

### 04. 사전 지식
- `String.prototype.repeat(n)`: 문자열을 n번 반복한 새 문자열을 반환한다.
- `문자열.slice(start, end)`: 문자열을 start 인덱스부터 end 인덱스 직전까지 잘라 반환한다.
- `String.prototype.replace(바꿀 대상, 바꿀 내용)`: 문자열에서 특정 문자나 패턴(정규식)을 찾아 원하는 다른 문자열로 바꿔주는 함수이다.
1. **일반 문자열을 바꿀 때** → 가장 처음 만나는 것 하나만 변경한다.
   ```
   // 문자열.replace("찾을 문자", "새로운 문자")
   
   let text = "Hello World";
   let result = text.replace("World", "JavaScript");
   console.log(result); // 출력: "Hello JavaScript"
   ```
  
2. **정규표현식을 바꿀 때** → 패턴을 지정하거나 전체를 변경한다.
   ```
   // 문자열.replace(/찾을 패턴/g, "새로운 문자")  (뒤에 붙는 g는 전체를 다 바꾸겠다는 뜻)
   
   let text = "apple, banana, apple";
   let result = text.replace(/apple/g, "grape");
   console.log(result); // 출력: "grape, banana, grape" (모든 apple이 변경됨)
   ```
