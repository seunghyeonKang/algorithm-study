# [level 2] 구명보트 - 42885 

[문제 링크](https://school.programmers.co.kr/learn/courses/30/lessons/42885) 

### 성능 요약

메모리: 51.3 MB, 시간: 15.12 ms

### 구분

코딩테스트 연습 > 탐욕법（Greedy）

### 채점결과

정확성: 81.5<br/>효율성: 18.5<br/>합계: 100.0 / 100.0

### 제출 일자

2026년 06월 27일 16:52:32

### 문제 설명

<p>무인도에 갇힌 사람들을 구명보트를 이용하여 구출하려고 합니다. 구명보트는 작아서 한 번에 최대 <strong>2명</strong>씩 밖에 탈 수 없고, 무게 제한도 있습니다.</p>

<p>예를 들어, 사람들의 몸무게가 [70kg, 50kg, 80kg, 50kg]이고 구명보트의 무게 제한이 100kg이라면 2번째 사람과 4번째 사람은 같이 탈 수 있지만 1번째 사람과 3번째 사람의 무게의 합은 150kg이므로 구명보트의 무게 제한을 초과하여 같이 탈 수 없습니다.</p>

<p>구명보트를 최대한 적게 사용하여 모든 사람을 구출하려고 합니다.</p>

<p>사람들의 몸무게를 담은 배열 people과 구명보트의 무게 제한 limit가 매개변수로 주어질 때, 모든 사람을 구출하기 위해 필요한 구명보트 개수의 최솟값을 return 하도록 solution 함수를 작성해주세요.</p>

<h5>제한사항</h5>

<ul>
<li>무인도에 갇힌 사람은 1명 이상 50,000명 이하입니다.</li>
<li>각 사람의 몸무게는 40kg 이상 240kg 이하입니다.</li>
<li>구명보트의 무게 제한은 40kg 이상 240kg 이하입니다.</li>
<li>구명보트의 무게 제한은 항상 사람들의 몸무게 중 최댓값보다 크게 주어지므로 사람들을 구출할 수 없는 경우는 없습니다.</li>
</ul>

<h5>입출력 예</h5>
<table class="table">
        <thead><tr>
<th>people</th>
<th>limit</th>
<th>return</th>
</tr>
</thead>
        <tbody><tr>
<td>[70, 50, 80, 50]</td>
<td>100</td>
<td>3</td>
</tr>
<tr>
<td>[70, 80, 50]</td>
<td>100</td>
<td>3</td>
</tr>
</tbody>
      </table>
<hr>

<p>※ 2023년 07월 31일 테스트 케이스가 추가되었습니다. 기존에 제출한 코드가 통과하지 못할 수 있습니다.</p>


> 출처: 프로그래머스 코딩 테스트 연습, https://school.programmers.co.kr/learn/challenges

## 📌 Code Review 📌

### 00. 기존 풀이: 효율성  테스트 실패
```javascript
function solution(people, limit) {
    let temp = [...people].sort((a, b) => b - a);
    let answer = 0;
    
    for (answer = 0; temp.length > 0; answer++) {
        // 맨 앞과 맨 뒤 조합 -> 안 되면 맨 앞 한 명만 탈출
        if (temp[0] + temp[temp.length - 1] <= limit) {
            temp = temp.slice(1);
            temp.pop();
        } else {
            temp = temp.slice(1);
        }
    }
    
    return answer;
}
```
- `slice()`나 `shift()`는 $O(N)$이며, `for`문이 최대 $N$번 반복되므로, 전체 시간 복잡도는 $O(N^2)$이 된다.

### 01. 기존 풀이: 효율성  테스트 통과
```javascript
function solution(people, limit) {
    people.sort((a, b) => b - a);
    let answer = 0;
    let left = 0;
    let right = people.length - 1;
    
    while (left <= right) {
        if (people[left] + people[right] <= limit) {
            right--; 
        }
        left++;
        answer++;
    }
    
    return answer;
}
```
- `if - else` 문의 공통 연산은 밖으로 빼자.
- `a`, `b` 대신 `left`, `right`나 `light`, `heavy`로 변수명을 바꾸면 더 직관적이다.

### 02. 개선 방향: 기존 코드 리팩토링
```javascript
function solution(people, limit) {
    people.sort((a, b) => a - b);
    
    let answer = 0;
    let left = 0;
    let right = people.length - 1;
    
    while (left <= right) {
        if (people[left] + people[right] <= limit) {
            left++;
        }
        
        right--; 
        answer++;
    }
    
    return answer;
}
```
