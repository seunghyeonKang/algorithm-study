# [level 2] 귤 고르기 - 138476 

[문제 링크](https://school.programmers.co.kr/learn/courses/30/lessons/138476) 

### 성능 요약

메모리: 70.4 MB, 시간: 57.84 ms

### 구분

코딩테스트 연습 > 연습문제

### 채점결과

정확성: 100.0<br/>합계: 100.0 / 100.0

### 제출 일자

2026년 06월 25일 23:57:19

### 문제 설명

<p>경화는 과수원에서 귤을 수확했습니다. 경화는 수확한 귤 중 'k'개를 골라 상자 하나에 담아 판매하려고 합니다. 그런데 수확한 귤의 크기가 일정하지 않아 보기에 좋지 않다고 생각한 경화는 귤을 크기별로 분류했을 때 서로 다른 종류의 수를 최소화하고 싶습니다.</p>

<p>예를 들어, 경화가 수확한 귤 8개의 크기가 [1, 3, 2, 5, 4, 5, 2, 3] 이라고 합시다. 경화가 귤 6개를 판매하고 싶다면, 크기가 1, 4인 귤을 제외한 여섯 개의 귤을 상자에 담으면, 귤의 크기의 종류가 2, 3, 5로 총 3가지가 되며 이때가 서로 다른 종류가 최소일 때입니다.</p>

<p>경화가 한 상자에 담으려는 귤의 개수 <code>k</code>와 귤의 크기를 담은 배열 <code>tangerine</code>이 매개변수로 주어집니다. 경화가 귤 k개를 고를 때 크기가 서로 다른 종류의 수의 최솟값을 return 하도록 solution 함수를 작성해주세요.</p>

<hr>

<h5>제한사항</h5>

<ul>
<li>1 ≤ <code>k</code> ≤ <code>tangerine</code>의 길이 ≤ 100,000</li>
<li>1 ≤ <code>tangerine</code>의 원소 ≤ 10,000,000</li>
</ul>

<hr>

<h5>입출력 예</h5>
<table class="table">
        <thead><tr>
<th>k</th>
<th>tangerine</th>
<th>result</th>
</tr>
</thead>
        <tbody><tr>
<td>6</td>
<td>[1, 3, 2, 5, 4, 5, 2, 3]</td>
<td>3</td>
</tr>
<tr>
<td>4</td>
<td>[1, 3, 2, 5, 4, 5, 2, 3]</td>
<td>2</td>
</tr>
<tr>
<td>2</td>
<td>[1, 1, 1, 1, 2, 2, 2, 3]</td>
<td>1</td>
</tr>
</tbody>
      </table>
<hr>

<h5>입출력 예 설명</h5>

<p><strong>입출력 예 #1</strong></p>

<ul>
<li>본문에서 설명한 예시입니다.</li>
</ul>

<p><strong>입출력 예 #2</strong></p>

<ul>
<li>경화는 크기가 2인 귤 2개와 3인 귤 2개 또는 2인 귤 2개와 5인 귤 2개 또는 3인 귤 2개와 5인 귤 2개로 귤을 판매할 수 있습니다. 이때의 크기 종류는 2가지로 이 값이 최소가 됩니다.</li>
</ul>

<p><strong>입출력 예 #3</strong></p>

<ul>
<li>경화는 크기가 1인 귤 2개를 판매하거나 2인 귤 2개를 판매할 수 있습니다. 이때의 크기 종류는 1가지로, 이 값이 최소가 됩니다.</li>
</ul>


> 출처: 프로그래머스 코딩 테스트 연습, https://school.programmers.co.kr/learn/challenges

## 📌 Code Review 📌

### 01. 기존 풀이
```javascript
function solution(k, tangerine) {
    let sizeNumObj = {};
    for (const size of tangerine) {
        if (sizeNumObj[size] > 0) sizeNumObj[size]++;
        else sizeNumObj[size] = 1;
    }
    
    let numList = [];
    for (const size in sizeNumObj) {
        numList.push(sizeNumObj[size]);
    }
    numList.sort((a, b) => b - a);
    
    let total = 0;
    let answer;
    for (let i = 0; i < numList.length; i++) {
        total += numList[i];
        
        if (total >= k ) {
            answer = i + 1;
            break;
        }
    }
    return answer;
}
```
- `Object.values()`로 가독성을 높이자.
- `answer` 변수를 만들지 말고 반복문 안에서 바로 `return`하자.

### 02. 개선 방향: 기존 코드 리팩토링
```javascript
function solution(k, tangerine) {
    // 1. 크기별 귤의 개수 세기
    let sizeNumObj = {};
    for (const size of tangerine) {
        sizeNumObj[size] = (sizeNumObj[size] || 0) + 1;
    }
    
    // 2. 귤의 개수만 뽑아서 내림차순 정렬하기
    let numList = Object.values(sizeNumObj).sort((a, b) => b - a);
    
    // 3. 가장 많은 귤부터 박스에 담기
    let total = 0;
    for (let i = 0; i < numList.length; i++) {
        total += numList[i];
        
        // k개를 채우는 순간, 사용된 귤 종류의 수(인덱스 + 1)를 바로 반환
        if (total >= k) {
            return i + 1;
        }
    }
}
```

### 03. 다른 풀이: `Map` 자료구조 활용
```javascript
function solution(k, tangerine) {
    const sizeMap = new Map();
    
    // 1. Map을 사용해 귤 개수 세기 (일반 객체보다 미세하게 빠름)
    for (const size of tangerine) {
        sizeMap.set(size, (sizeMap.get(size) || 0) + 1);
    }
    
    // 2. 값(개수)들만 모아서 내림차순 정렬
    const sortedCounts = [...sizeMap.values()].sort((a, b) => b - a);
    
    // 3. k에서 가장 많은 귤 개수를 빼나가는 방식
    let answer = 0;
    for (const count of sortedCounts) {
        k -= count;
        answer++;
        if (k <= 0) break; // k를 모두 채웠다면(0 이하가 되면) 종료
    }
    
    return answer;
}
```

### 04. 다른 풀이: 데이터가 많아 속도가 중요할 경우 계수 정렬(Counting Sort) 개념 도입
```javascript
function solution(k, tangerine) {
    const sizeMap = new Map();
    let maxCount = 0;

    // 1. 빈도수를 구하면서, 한 종류가 가질 수 있는 최대 개수(maxCount)를 찾는다.
    for (const size of tangerine) {
        const count = (sizeMap.get(size) || 0) + 1;
        sizeMap.set(size, count);
        if (count > maxCount) maxCount = count;
    }

    // 2. '귤의 개수'를 인덱스로 하는 빈도수 배열 생성 (Counting Array)
    // 귤 개수가 많은 것부터 접근하기 위해 maxCount + 1 크기로 만든다.
    const freq = new Array(maxCount + 1).fill(0);
    for (const count of sizeMap.values()) {
        freq[count]++;
    }

    // 3. 역방향으로 순회하며 k를 채운다. (정렬을 안 하므로 O(N) 가능)
    let answer = 0;
    for (let c = maxCount; c > 0; c--) {
        if (freq[c] === 0) continue;

        // c개를 가진 귤 종류가 여러 개(freq[c]개) 있을 수 있으므로 반복 처리
        while (freq[c] > 0 && k > 0) {
            k -= c;
            freq[c]--;
            answer++;
        }
        
        if (k <= 0) break;
    }

    return answer;
}
```

### 05. 사전 지식
- `Object.values(obj)`: 객체의 값(value)들만 모아서 배열로 반환하는 메서드
- `new Map()`: 키-값 쌍을 저장하는 자료구조로, 일반 객체(`{}`)와 비슷하지만 키로 어떤 타입이든 쓸 수 있고 입력한 순서가 보장되는 컬렉션
