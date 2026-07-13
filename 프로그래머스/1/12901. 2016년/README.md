# [level 1] 2016년 - 12901 

[문제 링크](https://school.programmers.co.kr/learn/courses/30/lessons/12901) 

### 성능 요약

메모리: 44 MB, 시간: 0.07 ms

### 구분

코딩테스트 연습 > 연습문제

### 채점결과

정확성: 100.0<br/>합계: 100.0 / 100.0

### 제출 일자

2026년 07월 13일 23:47:44

### 문제 설명

<p>2016년 1월 1일은 금요일입니다. 2016년 a월 b일은 무슨 요일일까요? 두 수 a ,b를 입력받아 2016년 a월 b일이 무슨 요일인지 리턴하는 함수, solution을 완성하세요. 요일의 이름은 일요일부터  토요일까지 각각 <code>SUN,MON,TUE,WED,THU,FRI,SAT</code></p>

<p>입니다. 예를 들어 a=5, b=24라면 5월 24일은 화요일이므로 문자열 "TUE"를 반환하세요.</p>

<h5>제한 조건</h5>

<ul>
<li>2016년은 윤년입니다.</li>
<li>2016년 a월 b일은 실제로 있는 날입니다. (13월 26일이나 2월 45일같은 날짜는 주어지지 않습니다)</li>
</ul>

<h4>입출력 예</h4>
<table class="table">
        <thead><tr>
<th>a</th>
<th>b</th>
<th>result</th>
</tr>
</thead>
        <tbody><tr>
<td>5</td>
<td>24</td>
<td>"TUE"</td>
</tr>
</tbody>
      </table>

> 출처: 프로그래머스 코딩 테스트 연습, https://school.programmers.co.kr/learn/challenges

## 📌 Code Review 📌

### 01. 기존 풀이
```javascript
function solution(a, b) {
    // const monthDays = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    // let accDays = 0;
    // let monthAccDays = {};
    // for (let i = 0; i < 12; i++) {
    //     monthAccDays[i + 1] = accDays;
    //     accDays += monthDays[i];
    // }
    
    const monthAccDays = {
        "1":0,"2":31,"3":60,"4":91,"5":121,"6":152,"7":182,"8":213,"9":244,"10":274,"11":305,"12":335
    };
    const weekDays = {
        1:"FRI",2:"SAT",3:"SUN",4:"MON",5:"TUE",6:"WED",0:"THU"
    };
    
    return weekDays[(monthAccDays[a] + b) % 7];
}
```
- 객체 대신 배열을 활용하면 가독성과 메모리 효율성이 좋아진다.

### 02. 개선 방향: 배열 활용 (하드코딩)
```javascript
function solution(a, b) {
    const monthAccDays = [0, 31, 60, 91, 121, 152, 182, 213, 244, 274, 305, 335];
    const weekDays = ["THU", "FRI", "SAT", "SUN", "MON", "TUE", "WED"];
    
    return weekDays[(monthAccDays[a - 1] + b) % 7];
}
```

### 03. 개선 방향: 반복문으로 누적 일수 계산
```javascript
function solution(a, b) {
    const monthDays = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    const weekDays = ["THU", "FRI", "SAT", "SUN", "MON", "TUE", "WED"];
    
    let totalDays = b;
    for (let i = 0; i < a - 1; i++) {
        totalDays += monthDays[i];
    }
    
    return weekDays[totalDays % 7];
}
```

### 04. 다른 풀이: `Date` 활용
```javascript
function solution(a, b) {
    const weekDays = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
    // Date 객체의 Month는 0부터 시작하므로 a - 1을 한다.
    const date = new Date(2016, a - 1, b);
    
    return weekDays[date.getDay()];
}
```

### 05. 사전 지식
- `new Date()`: 현재 날짜와 시간 정보를 담은 객체를 생성하고 관리하는 자바스크립트 내장 함수이다.
- `getDay()`: 0(일요일) ~ 6(토요일)을 반환한다.
- JS에서 숫자를 키로 사용하는 경우, 배열이 객체보다 메모리를 훨씬 적게 쓰고 속도도 더 빠르다.
