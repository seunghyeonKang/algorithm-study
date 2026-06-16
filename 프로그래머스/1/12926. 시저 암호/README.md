# [level 1] 시저 암호 - 12926 

[문제 링크](https://school.programmers.co.kr/learn/courses/30/lessons/12926) 

### 성능 요약

메모리: 50.5 MB, 시간: 15.40 ms

### 구분

코딩테스트 연습 > 연습문제

### 채점결과

정확성: 100.0<br/>합계: 100.0 / 100.0

### 제출 일자

2026년 06월 15일 23:30:21

### 문제 설명

<p>어떤 문장의 각 알파벳을 일정한 거리만큼 밀어서 다른 알파벳으로 바꾸는 암호화 방식을 시저 암호라고 합니다.  예를 들어 "AB"는 1만큼 밀면 "BC"가 되고, 3만큼 밀면 "DE"가 됩니다. "z"는 1만큼 밀면 "a"가 됩니다. 문자열 s와 거리 n을 입력받아 s를 n만큼 민 암호문을 만드는 함수, solution을 완성해 보세요.</p>

<h5>제한 조건</h5>

<ul>
<li>공백은 아무리 밀어도 공백입니다.</li>
<li>s는 알파벳 소문자, 대문자, 공백으로만 이루어져 있습니다.</li>
<li>s의 길이는 8000이하입니다.</li>
<li>n은 1 이상, 25이하인 자연수입니다.</li>
</ul>

<h5>입출력 예</h5>
<table class="table">
        <thead><tr>
<th>s</th>
<th>n</th>
<th>result</th>
</tr>
</thead>
        <tbody><tr>
<td>"AB"</td>
<td>1</td>
<td>"BC"</td>
</tr>
<tr>
<td>"z"</td>
<td>1</td>
<td>"a"</td>
</tr>
<tr>
<td>"a B z"</td>
<td>4</td>
<td>"e F d"</td>
</tr>
</tbody>
      </table>

> 출처: 프로그래머스 코딩 테스트 연습, https://school.programmers.co.kr/learn/challenges

## 📌 Code Review 📌

### 01. 기존 풀이
```javascript
function solution(s, n) {
    const bigAlp = [ "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z" ];
    const smallAlp = [ "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z" ];
    let sArr = s.split("");
    
    return sArr.map((char) => {
        if (char === " ") return " ";
        let alpIndex = bigAlp.indexOf(char);
        if (alpIndex !== -1) {
            return bigAlp[(alpIndex + n) < 26 ? alpIndex + n : alpIndex + n - 26];
        } else {
            alpIndex = smallAlp.indexOf(char);
            console.log(alpIndex);
            return smallAlp[(alpIndex + n) < 26 ? alpIndex + n : alpIndex + n - 26];
        }
    }).join("");
}
```
- 삼항 연산자로 26을 넘었는지 확인하지 않고 나머지 연산자(`%`)로 간결하게 표현할 수 있다.
- 디버깅용 코드는 성능에 영향을 주니 지우자.
- 알파벳의 경우, 배열 메소드를 사용하지 않으니 배열 대신 문자열로 사용해도 된다.

### 02. 개선 방향: 기존 로직 리팩토링
```javascript
function solution(s, n) {
    const bigAlp = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const smallAlp = "abcdefghijklmnopqrstuvwxyz";
    
    return s.split("").map((char) => {
        if (char === " ") return " ";
        
        let alpIndex = bigAlp.indexOf(char);
        if (alpIndex !== -1) {
            return bigAlp[(alpIndex + n) % 26];
        }
        
        alpIndex = smallAlp.indexOf(char);
        return smallAlp[(alpIndex + n) % 26];
    }).join("");
}
```

### 03. 다른 풀이: 아스키코드 활용
```javascript
function solution(s, n) {
    return s.split("").map(char => {
        if (char === " ") return " ";
        
        const code = char.charCodeAt(0);
        
        // 대문자 처리 (65 ~ 90)
        if (code >= 65 && code <= 90) {
            return String.fromCharCode((code - 65 + n) % 26 + 65);
        }
        // 소문자 처리 (97 ~ 122)
        if (code >= 97 && code <= 122) {
            return String.fromCharCode((code - 97 + n) % 26 + 97);
        }
    }).join("");
}
```

### 04. 사전 지식
- `.charCodeAt(index)`: 문자열에서 지정한 위치(index)에 있는 문자의 아스키코드(ASCII) 또는 유니코드 숫자 값을 반환한다.
- `String.fromCharCode(num1, num2, ...)`: 컴퓨터가 인식하는 아스키코드(ASCII) 숫자를 다시 사람이 읽을 수 있는 문자로 변환해 준다.
