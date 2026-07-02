# [level 2] 연속 부분 수열 합의 개수 - 131701 

[문제 링크](https://school.programmers.co.kr/learn/courses/30/lessons/131701) 

### 성능 요약

메모리: 70.1 MB, 시간: 484.53 ms

### 구분

코딩테스트 연습 > 연습문제

### 채점결과

정확성: 100.0<br/>합계: 100.0 / 100.0

### 제출 일자

2026년 07월 02일 08:29:59

### 문제 설명

<p>철호는 수열을 가지고 놀기 좋아합니다. 어느 날 철호는 어떤 자연수로 이루어진 원형 수열의 연속하는 부분 수열의 합으로 만들 수 있는 수가 모두 몇 가지인지 알아보고 싶어졌습니다. 원형 수열이란 일반적인 수열에서 처음과 끝이 연결된 형태의 수열을 말합니다. 예를 들어 수열 [7, 9, 1, 1, 4] 로 원형 수열을 만들면 다음과 같습니다.<br>
<img src="https://grepp-programmers.s3.ap-northeast-2.amazonaws.com/files/production/f207cd37-34dc-4cbd-96bb-83435bd6efd4/%EA%B7%B8%EB%A6%BC.png" title="" alt="그림.png"><br>
원형 수열은 처음과 끝이 연결되어 끊기는 부분이 없기 때문에 연속하는 부분 수열도 일반적인 수열보다 많아집니다.<br>
원형 수열의 모든 원소 <code>elements</code>가 순서대로 주어질 때, 원형 수열의 연속 부분 수열 합으로 만들 수 있는 수의 개수를 return 하도록 solution 함수를 완성해주세요.</p>

<hr>

<h5>제한사항</h5>

<ul>
<li>3 ≤ <code>elements</code>의 길이 ≤ 1,000</li>
<li>1 ≤ <code>elements</code>의 원소 ≤ 1,000</li>
</ul>

<hr>

<h5>입출력 예</h5>
<table class="table">
        <thead><tr>
<th>elements</th>
<th>result</th>
</tr>
</thead>
        <tbody><tr>
<td>[7,9,1,1,4]</td>
<td>18</td>
</tr>
</tbody>
      </table>
<hr>

<h5>입출력 예 설명</h5>

<p><br><br>
입출력 예 #1<br>
길이가 1인 연속 부분 수열로부터 [1, 4, 7, 9] 네 가지의 합이 나올 수 있습니다.<br>
길이가 2인 연속 부분 수열로부터 [2, 5, 10, 11, 16] 다섯 가지의 합이 나올 수 있습니다.<br>
길이가 3인 연속 부분 수열로부터 [6, 11, 12, 17, 20] 다섯 가지의 합이 나올 수 있습니다.<br>
길이가 4인 연속 부분 수열로부터 [13, 15, 18, 21] 네 가지의 합이 나올 수 있습니다.<br>
길이가 5인 연속 부분 수열로부터 [22] 한 가지의 합이 나올 수 있습니다.<br>
이들 중 중복되는 값을 제외하면 다음과 같은 18가지의 수들을 얻습니다.<br>
[1, 2, 4, 5, 6, 7, 9, 10, 11, 12, 13, 15, 16, 17, 18, 20, 21, 22]</p>


> 출처: 프로그래머스 코딩 테스트 연습, https://school.programmers.co.kr/learn/challenges

## 📌 Code Review 📌

### 01. 기존 풀이
```javascript
function solution(elements) {
    let combineSet = new Set();
    let loopElements = [...elements, ...elements];
    
    for (let arrLength = 1; arrLength <= elements.length; arrLength++) { // 부분 수열의 길이
        for (let startIdx = 0; startIdx < elements.length; startIdx++) { // 부분 수열의 시작점
            let sum = 0;
            for (let i = 0; i < arrLength; i++) { // 부분 수열의 합 구하는 루프
                sum += loopElements[startIdx + i];
            }
            combineSet.add(sum);
        }
    }
    
    return combineSet.size;
}
```
- 3중 반복문 사용으로 인해 시간 복잡도가 $O(N^3)$이다.
- '이전 길이에서 구한 합에 다음 원소 하나만 더하는 방식'으로 적용하면 2중 반복문으로 구현할 수 있다.

### 02. 개선 방향: 위 힌트를 보고 수정한 풀이
```javascript
function solution(elements) {
    let combineSet = new Set();
    let loopElements = [...elements, ...elements];
    
    for (let startIdx = 0; startIdx < elements.length; startIdx++) { // 부분 수열의 시작점
        let sum = 0;
        for (let sumIdx = 0; sumIdx < elements.length; sumIdx++) {
            // 해당 시작점의 모든 부분 수열의 합을 구하는 루프
            sum += loopElements[startIdx + sumIdx];
            combineSet.add(sum);
        }
    }
    
    return combineSet.size;
}
```
→ 최대 시간이 `484.53ms`에서 `58.05ms`로 개선되었다.

→ `const len = elements.length;`로 중복 코드를 없애보자.

### 03. 사전 지식
- `Set()`: 중복되지 않는 유일한 값들의 집합을 다루기 위한 특별한 객체
  
  ```javascript
  // 1. Set 생성
  const mySet = new Set();

  // 2. 값 추가 (add)
  mySet.add(1);
  mySet.add(5);
  mySet.add(5); // 중복된 값은 무시됨
  mySet.add('텍스트');

  console.log(mySet); // Set(3) { 1, 5, '텍스트' }

  // 3. 값 존재 여부 확인 (has) - 매우 빠름!
  console.log(mySet.has(5)); // true
  console.log(mySet.has(10)); // false

  // 4. 특정 값 삭제 (delete)
  mySet.delete(5);

  // 5. 총 요소 개수 확인 (size 프로퍼티 - length가 아님에 주의!)
  console.log(mySet.size); // 2

  // 6. 모든 값 제거 (clear)
  mySet.clear();
  console.log(mySet.size); // 0
  ```
