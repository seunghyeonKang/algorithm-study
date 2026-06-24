# [level 1] 숫자 문자열과 영단어 - 81301 

[문제 링크](https://school.programmers.co.kr/learn/courses/30/lessons/81301) 

### 성능 요약

메모리: 43.9 MB, 시간: 0.13 ms

### 구분

코딩테스트 연습 > 2021 카카오 채용연계형 인턴십

### 채점결과

정확성: 100.0<br/>합계: 100.0 / 100.0

### 제출 일자

2026년 06월 24일 15:49:17

### 문제 설명

<p><img src="https://asset.programmers.co.kr/files/production/d31cb063-4025-4412-8cbc-6ac6909cf93e/img1.png" title="" alt="img1.png"></p>

<p>네오와 프로도가 숫자놀이를 하고 있습니다. 네오가 프로도에게 숫자를 건넬 때 일부 자릿수를 영단어로 바꾼 카드를 건네주면 프로도는 원래 숫자를 찾는 게임입니다.<br><br>
다음은 숫자의 일부 자릿수를 영단어로 바꾸는 예시입니다.</p>

<ul>
<li>1478 → "one4seveneight"</li>
<li>234567 → "23four5six7"</li>
<li>10203 → "1zerotwozero3"</li>
</ul>

<p>이렇게 숫자의 일부 자릿수가 영단어로 바뀌어졌거나, 혹은 바뀌지 않고 그대로인 문자열 <code>s</code>가 매개변수로 주어집니다. <code>s</code>가 의미하는 원래 숫자를 return 하도록 solution 함수를 완성해주세요.</p>

<p>참고로 각 숫자에 대응되는 영단어는 다음 표와 같습니다.</p>
<table class="table">
        <thead><tr>
<th>숫자</th>
<th>영단어</th>
</tr>
</thead>
        <tbody><tr>
<td>0</td>
<td>zero</td>
</tr>
<tr>
<td>1</td>
<td>one</td>
</tr>
<tr>
<td>2</td>
<td>two</td>
</tr>
<tr>
<td>3</td>
<td>three</td>
</tr>
<tr>
<td>4</td>
<td>four</td>
</tr>
<tr>
<td>5</td>
<td>five</td>
</tr>
<tr>
<td>6</td>
<td>six</td>
</tr>
<tr>
<td>7</td>
<td>seven</td>
</tr>
<tr>
<td>8</td>
<td>eight</td>
</tr>
<tr>
<td>9</td>
<td>nine</td>
</tr>
</tbody>
      </table>
<hr>

<h5>제한사항</h5>

<ul>
<li>1 ≤ <code>s</code>의 길이 ≤ 50</li>
<li><code>s</code>가 "zero" 또는 "0"으로 시작하는 경우는 주어지지 않습니다.</li>
<li>return 값이 1 이상 2,000,000,000 이하의 정수가 되는 올바른 입력만 <code>s</code>로 주어집니다.</li>
</ul>

<hr>

<h5>입출력 예</h5>
<table class="table">
        <thead><tr>
<th>s</th>
<th>result</th>
</tr>
</thead>
        <tbody><tr>
<td><code>"one4seveneight"</code></td>
<td>1478</td>
</tr>
<tr>
<td><code>"23four5six7"</code></td>
<td>234567</td>
</tr>
<tr>
<td><code>"2three45sixseven"</code></td>
<td>234567</td>
</tr>
<tr>
<td><code>"123"</code></td>
<td>123</td>
</tr>
</tbody>
      </table>
<hr>

<h5>입출력 예 설명</h5>

<p><strong>입출력 예 #1</strong></p>

<ul>
<li>문제 예시와 같습니다.</li>
</ul>

<p><strong>입출력 예 #2</strong></p>

<ul>
<li>문제 예시와 같습니다.</li>
</ul>

<p><strong>입출력 예 #3</strong></p>

<ul>
<li>"three"는 3, "six"는 6, "seven"은 7에 대응되기 때문에 정답은 입출력 예 #2와 같은 234567이 됩니다.</li>
<li>입출력 예 #2와 #3과 같이 같은 정답을 가리키는 문자열이 여러 가지가 나올 수 있습니다.</li>
</ul>

<p><strong>입출력 예 #4</strong></p>

<ul>
<li><code>s</code>에는 영단어로 바뀐 부분이 없습니다.</li>
</ul>

<hr>

<h5>제한시간 안내</h5>

<ul>
<li>정확성 테스트 : 10초</li>
</ul>


> 출처: 프로그래머스 코딩 테스트 연습, https://school.programmers.co.kr/learn/challenges

## 📌 Code Review 📌

### 01. 기존 풀이
```javascript
function solution(s) {
    let numArr = [];
    let temp = s;
    
    while (temp !== "") {
        if (Number(temp[0]) >= 0) { // 숫자인 경우
            numArr.push(temp[0]);
            temp = temp.slice(1);
        } else if (temp[0] === "z") {
            numArr.push("0");
            temp = temp.slice(4);
        } else if (temp[0] === "o") {
            numArr.push("1");
            temp = temp.slice(3);
        } else if (temp[0] === "t") {
            if (temp[1] === "w") {
                numArr.push("2");
                temp = temp.slice(3);
            } else {
                numArr.push("3");
                temp = temp.slice(5);
            }
        } else if (temp[0] === "f") {
            if (temp[1] === "o") {
                numArr.push("4");
                temp = temp.slice(4);
            } else {
                numArr.push("5");
                temp = temp.slice(4);
            }
        } else if (temp[0] === "s") {
            if (temp[1] === "i") {
                numArr.push("6");
                temp = temp.slice(3);
            } else {
                numArr.push("7");
                temp = temp.slice(5);
            }
        } else if (temp[0] === "e") {
            numArr.push("8");
            temp = temp.slice(5);
        } else {
            numArr.push("9");
            temp = temp.slice(4);
        }
    }
    
    return Number(numArr.join(""));
}
```

### 02. 개선 방향: `startsWith()` 활용
```javascript
function solution(s) {
    const wordToNum = {
        zero: '0', one: '1', two: '2', three: '3', four: '4',
        five: '5', six: '6', seven: '7', eight: '8', nine: '9'
    };
    
    let result = '';
    let i = 0;
    
    while (i < s.length) {
        if (s[i] >= '0' && s[i] <= '9') {
            result += s[i];
            i += 1;
        } else {
            for (const word in wordToNum) {
                if (s.startsWith(word, i)) {
                    result += wordToNum[word];
                    i += word.length;
                    break;
                }
            }
        }
    }
    
    return Number(result);
}
```

### 03. 다른 풀이: `forEach`, `split`, `join` 활용
```javascript
function solution(s) {
    const words = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    
    words.forEach((word, index) => {
        s = s.split(word).join(index);
    });
    
    return Number(s);
}
```

### 04. 다른 풀이: `replace`, 정규표현식과 객체 활용
```javascript
function solution(s) {
    const charMap = {
        "zero": 0, "one": 1, "two": 2, "three": 3, "four": 4,
        "five": 5, "six": 6, "seven": 7, "eight": 8, "nine": 9
    };
    
    for (let word in charMap) {
        s = s.replace(new RegExp(word, 'g'), charMap[word]);
    }
    
    return Number(s);
}
```

### 05. 사전 지식
- `str.startsWith(searchString, position)`: 문자열이 특정 문자열로 시작하는지 확인해서 `true` 또는 `false`를 반환하는 메서드
- `RegExp`: 문자열에서 특정 패턴을 찾거나, 검사하거나, 치환할 때 사용하는 정규표현식(정규식)을 다루는 객체
- `match()`: 문자열에서 정규표현식과 일치하는 부분을 찾아 그 결과를 배열로 반환하는 메서드
- `forEach()`: 배열의 각 요소에 대해 주어진 함수를 순서대로 한 번씩 실행하는 메서드
- `replace()`: 문자열에서 특정 패턴이나 문자열을 찾아 다른 문자열로 바꿔주는 메서드
