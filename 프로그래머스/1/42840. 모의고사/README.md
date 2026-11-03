# [level 1] 모의고사 - 42840 

[문제 링크](https://school.programmers.co.kr/learn/courses/30/lessons/42840) 

### 성능 요약

메모리: 48.9 MB, 시간: 16.87 ms

### 구분

코딩테스트 연습 > 완전탐색

### 채점결과

정확성: 100.0<br/>합계: 100.0 / 100.0

### 제출 일자

2026년 11월 03일 19:21:15

### 문제 설명

<p>수포자는 수학을 포기한 사람의 준말입니다. 수포자 삼인방은 모의고사에 수학 문제를 전부 찍으려 합니다. 수포자는 1번 문제부터 마지막 문제까지 다음과 같이 찍습니다.</p>

<p>1번 수포자가 찍는 방식: 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, ...<br>
2번 수포자가 찍는 방식: 2, 1, 2, 3, 2, 4, 2, 5, 2, 1, 2, 3, 2, 4, 2, 5, ...<br>
3번 수포자가 찍는 방식: 3, 3, 1, 1, 2, 2, 4, 4, 5, 5, 3, 3, 1, 1, 2, 2, 4, 4, 5, 5, ...</p>

<p>1번 문제부터 마지막 문제까지의 정답이 순서대로 들은 배열 answers가 주어졌을 때, 가장 많은 문제를 맞힌 사람이 누구인지 배열에 담아 return 하도록 solution 함수를 작성해주세요.</p>

<h5>제한 조건</h5>

<ul>
<li>시험은 최대 10,000 문제로 구성되어있습니다.</li>
<li>문제의 정답은 1, 2, 3, 4, 5중 하나입니다.</li>
<li>가장 높은 점수를 받은 사람이 여럿일 경우, return하는 값을 오름차순 정렬해주세요.</li>
</ul>

<h5>입출력 예</h5>
<table class="table">
        <thead><tr>
<th>answers</th>
<th>return</th>
</tr>
</thead>
        <tbody><tr>
<td>[1,2,3,4,5]</td>
<td>[1]</td>
</tr>
<tr>
<td>[1,3,2,4,2]</td>
<td>[1,2,3]</td>
</tr>
</tbody>
      </table>
<h5>입출력 예 설명</h5>

<p>입출력 예 #1</p>

<ul>
<li>수포자 1은 모든 문제를 맞혔습니다.</li>
<li>수포자 2는 모든 문제를 틀렸습니다.</li>
<li>수포자 3은 모든 문제를 틀렸습니다.</li>
</ul>

<p>따라서 가장 문제를 많이 맞힌 사람은 수포자 1입니다.</p>

<p>입출력 예 #2</p>

<ul>
<li>모든 사람이 2문제씩을 맞췄습니다.</li>
</ul>


> 출처: 프로그래머스 코딩 테스트 연습, https://school.programmers.co.kr/learn/challenges

# 📌 Code Review 📌

## 01. 기존 풀이
```javascript
function solution(answers) {
    const studentArr1 = [1, 2, 3, 4, 5];
    const studentArr2 = [2, 1, 2, 3, 2, 4, 2, 5];
    const studentArr3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
    let countScore1 = 0;
    let countScore2 = 0;
    let countScore3 = 0;
    
    for (let i = 0; i < answers.length; i++) {
        const answer = answers[i];
        if (studentArr1[i % 5] === answer) countScore1++;
        if (studentArr2[i % 8] === answer) countScore2++;
        if (studentArr3[i % 10] === answer) countScore3++;
    }
    
    const maxScore = Math.max(countScore1, countScore2, countScore3);
    const maxStudents = [];
    
    if (countScore1 === maxScore) maxStudents.push(1);
    if (countScore2 === maxScore) maxStudents.push(2);
    if (countScore3 === maxScore) maxStudents.push(3);
    
    return maxStudents;
}
```

## 02. AI 피드백 & 사전지식
- 배열과 반복문을 활용해 코드를 조금 더 간결하고 확장성 있게 리팩토링할 수 있다.

## 03. 다른 풀이: 확장성있는 버전
```javascript
function solution(answers) {
    // 각 수포자의 패턴 정의
    const patterns = [
        [1, 2, 3, 4, 5],
        [2, 1, 2, 3, 2, 4, 2, 5],
        [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]
    ];
    
    // 각 수포자의 점수를 저장할 배열
    const scores = [0, 0, 0];
    
    // 점수 채점
    for (let i = 0; i < answers.length; i++) {
        const answer = answers[i];
        if (patterns[0][i % patterns[0].length] === answer) scores[0]++;
        if (patterns[1][i % patterns[1].length] === answer) scores[1]++;
        if (patterns[2][i % patterns[2].length] === answer) scores[2]++;
    }
    
    // 최고 점수 구하기
    const maxScore = Math.max(...scores);
    
    // 최고 점수를 받은 사람들을 찾아 배열에 담기 (1번부터 시작하므로 인덱스 + 1)
    const maxStudents = [];
    for (let i = 0; i < scores.length; i++) {
        if (scores[i] === maxScore) {
            maxStudents.push(i + 1);
        }
    }
    
    return maxStudents;
}
```
