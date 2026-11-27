# [level 1] 가운데 글자 가져오기 - 12903 

[문제 링크](https://school.programmers.co.kr/learn/courses/30/lessons/12903) 

### 성능 요약

메모리: 11.3 MB, 시간: 0.00 ms

### 구분

코딩테스트 연습 > 연습문제

### 채점결과

정확성: 100.0<br/>합계: 100.0 / 100.0

### 제출 일자

2026년 11월 27일 23:11:07

### 문제 설명

<p>단어 s의 가운데 글자를 반환하는 함수, solution을 만들어 보세요. 단어의 길이가 짝수라면 가운데 두글자를 반환하면 됩니다.</p>

<h6>재한사항</h6>

<ul>
<li>s는 길이가 1 이상, 100이하인 스트링입니다.</li>
</ul>

<h5>입출력 예</h5>
<table class="table">
        <thead><tr>
<th>s</th>
<th>return</th>
</tr>
</thead>
        <tbody><tr>
<td>"abcde"</td>
<td>"c"</td>
</tr>
<tr>
<td>"qwer"</td>
<td>"we"</td>
</tr>
</tbody>
      </table>

> 출처: 프로그래머스 코딩 테스트 연습, https://school.programmers.co.kr/learn/challenges

# 📌 Code Review 📌

## 01. 기존 풀이
```python
def solution(s):
    answer = ""
    if (len(s) % 2 == 1): answer = s[int((len(s) - 1) / 2)]
    if (len(s) % 2 != 1):
        for i in range(int((len(s) - 1) / 2), int((len(s) - 1) / 2) + 2):
            answer += s[i]
    return answer
```

## 02. AI 피드백 & 사전지식
- 홀수가 아닌 조건은 무조건 짝수이므로 두 번째 `if (len(s) % 2 != 1):` 대신 `else:`를 사용한다.
- 실수 나눗셈 `/` 후 `int(...)`로 감싸지 말고 정수 나눗셈 연산자 `//`를 사용해 `(len(s) - 1) // 2`로 바로 정수를 구한다.
- 짝수 길이에서 `for`문과 `+=`로 문자를 이어 붙이는 대신 `mid = len(s) // 2`를 구한 뒤 슬라이싱 `s[mid - 1 : mid + 1]`으로 가운데 두 글자를 한 번에 잘라낸다.

## 03. 개선 풀이
```python
def solution(s):
    mid = len(s) // 2
    if len(s) % 2 == 1:
        return s[mid]
    else:
        return s[mid - 1 : mid + 1]
```
