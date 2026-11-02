# [level 2] 롤케이크 자르기 - 132265 

[문제 링크](https://school.programmers.co.kr/learn/courses/30/lessons/132265) 

### 성능 요약

메모리: 107 MB, 시간: 126.31 ms

### 구분

코딩테스트 연습 > 연습문제

### 채점결과

정확성: 100.0<br/>합계: 100.0 / 100.0

### 제출 일자

2026년 11월 02일 20:42:44

### 문제 설명

<p>철수는 롤케이크를 두 조각으로 잘라서 동생과 한 조각씩 나눠 먹으려고 합니다. 이 롤케이크에는 여러가지 토핑들이 일렬로 올려져 있습니다. 철수와 동생은 롤케이크를 공평하게 나눠먹으려 하는데, 그들은 롤케이크의 크기보다 롤케이크 위에 올려진 토핑들의 종류에 더 관심이 많습니다. 그래서 잘린 조각들의 크기와 올려진 토핑의 개수에 상관없이 각 조각에 동일한 가짓수의 토핑이 올라가면 공평하게 롤케이크가 나누어진 것으로 생각합니다.</p>

<p>예를 들어, 롤케이크에 4가지 종류의 토핑이 올려져 있다고 합시다. 토핑들을 1, 2, 3, 4와 같이 번호로 표시했을 때, 케이크 위에 토핑들이 [1, 2, 1, 3, 1, 4, 1, 2] 순서로 올려져 있습니다. 만약 세 번째 토핑(1)과 네 번째 토핑(3) 사이를 자르면 롤케이크의 토핑은 [1, 2, 1], [3, 1, 4, 1, 2]로 나뉘게 됩니다. 철수가 [1, 2, 1]이 놓인 조각을, 동생이 [3, 1, 4, 1, 2]가 놓인 조각을 먹게 되면 철수는 두 가지 토핑(1, 2)을 맛볼 수 있지만, 동생은 네 가지 토핑(1, 2, 3, 4)을 맛볼 수 있으므로, 이는 공평하게 나누어진 것이 아닙니다. 만약 롤케이크의 네 번째 토핑(3)과 다섯 번째 토핑(1) 사이를 자르면 [1, 2, 1, 3], [1, 4, 1, 2]로 나뉘게 됩니다. 이 경우 철수는 세 가지 토핑(1, 2, 3)을, 동생도 세 가지 토핑(1, 2, 4)을 맛볼 수 있으므로, 이는 공평하게 나누어진 것입니다. 공평하게 롤케이크를 자르는 방법은 여러가지 일 수 있습니다. 위의 롤케이크를 [1, 2, 1, 3, 1], [4, 1, 2]으로 잘라도 공평하게 나뉩니다. 어떤 경우에는 롤케이크를 공평하게 나누지 못할 수도 있습니다.</p>

<p>롤케이크에 올려진 토핑들의 번호를 저장한 정수 배열 <code>topping</code>이 매개변수로 주어질 때, 롤케이크를 공평하게 자르는 방법의 수를 return 하도록 solution 함수를 완성해주세요.</p>

<hr>

<h5>제한사항</h5>

<ul>
<li>1 ≤ <code>topping</code>의 길이 ≤ 1,000,000

<ul>
<li>1 ≤ <code>topping</code>의 원소 ≤ 10,000</li>
</ul></li>
</ul>

<hr>

<h5>입출력 예</h5>
<table class="table">
        <thead><tr>
<th>topping</th>
<th>result</th>
</tr>
</thead>
        <tbody><tr>
<td>[1, 2, 1, 3, 1, 4, 1, 2]</td>
<td>2</td>
</tr>
<tr>
<td>[1, 2, 3, 1, 4]</td>
<td>0</td>
</tr>
</tbody>
      </table>
<hr>

<h5>입출력 예 설명</h5>

<p><strong>입출력 예 #1</strong></p>

<ul>
<li>롤케이크를 [1, 2, 1, 3], [1, 4, 1, 2] 또는 [1, 2, 1, 3, 1], [4, 1, 2]와 같이 자르면 철수와 동생은 각각 세 가지 토핑을 맛볼 수 있습니다. 이 경우 공평하게 롤케이크를 나누는 방법은 위의 두 가지만 존재합니다.</li>
</ul>

<p><strong>입출력 예 #2</strong></p>

<ul>
<li>롤케이크를 공평하게 나눌 수 없습니다.</li>
</ul>


> 출처: 프로그래머스 코딩 테스트 연습, https://school.programmers.co.kr/learn/challenges

# 📌 Code Review 📌

## 00. 틀린 풀이: 시간초과
```javascript
function solution(topping) {
    let answer = 0;
    
    const getNumOfKinds = (arr) => {
        const set = new Set(arr);
        return set.size;
    }
    
    for (let i = 1; i < topping.length; i++) {
        if (getNumOfKinds(topping.slice(0, i)) === getNumOfKinds(topping.slice(i, topping.length))) answer++;
    }
    
    return answer;
}
```

## 01. 기존 풀이
```javascript
function solution(topping) {
    let answer = 0;
    const cakeLength = topping.length;
    const leftKindsCountArr = []; // 0부터 (i+1)까지의 원소가짓수(토핑 종류)
    const rightKindsCountArr = []; // (length-i-1)부터 length까지의 원소가짓수(토핑 종류)
    let leftKindsCount = 0;
    let rightKindsCount = 0;
    const leftSet = new Set();
    const rightSet = new Set();
    
    for (let i = 0; i < cakeLength; i++) {
        if (!leftSet.has(topping[i])) {
            leftSet.add(topping[i]);
            leftKindsCount++;
        }
        if (!rightSet.has(topping[cakeLength - i - 1])) {
            rightSet.add(topping[cakeLength - i - 1]);
            rightKindsCount++;
        }
        leftKindsCountArr.push(leftKindsCount);
        rightKindsCountArr.push(rightKindsCount);
    }
    
    for (let i = 0; i < cakeLength - 1; i++) {
        if (leftKindsCountArr[i] === rightKindsCountArr[cakeLength - i - 2]) answer++;
    }
    
    return answer;
}
```

## 02. AI 피드백 & 사전지식
- 첫 번째 풀이는 `slice()`와 `Set`을 매 반복마다 생성했기 때문에 $O(N^2)$ 에 가까운 시간 복잡도를 가졌다.
- 두 번째 풀이는 누적 합 개념을 사용하여 $O(N)$의 시간 복잡도로 최적화했다.
- 다만, `Map`과 `Set`을 하나씩만 사용하면서, 배열 전체를 순회하며 동적으로 자르는 위치를 옮겨가는 방식을 쓰면 배열을 미리 만들지 않고도 $O(N)$에 해결할 수 있다.

## 03. 개선 풀이: `Map` + `Set` 활용
```javascript
function solution(topping) {
    let answer = 0;
    
    // 1. 오른쪽 조각에 있는 토핑들의 종류와 개수를 기록할 Map
    const rightMap = new Map();
    for (const t of topping) {
        rightMap.set(t, (rightMap.get(t) || 0) + 1);
    }
    
    // 2. 왼쪽 조각에 있는 토핑 종류를 기록할 Set
    const leftSet = new Set();
    
    // 3. 롤케이크를 한 칸씩 잘라가며 확인
    for (let i = 0; i < topping.length - 1; i++) {
        const t = topping[i];
        
        // 왼쪽 조각에 토핑 추가
        leftSet.add(t);
        
        // 오른쪽 조각에서 토핑 개수 감소 및 소진 시 제거
        rightMap.set(t, rightMap.get(t) - 1);
        if (rightMap.get(t) === 0) {
            rightMap.delete(t);
        }
        
        // 철수(왼쪽)와 동생(오른쪽)의 토핑 종류 개수가 같으면 정답 증가
        if (leftSet.size === rightMap.size) {
            answer++;
        }
    }
    
    return answer;
}
```
- 공간 복잡도 최적화: 별도의 누적 배열(`leftKindsCountArr` 등)을 선언할 필요 없이, `Map` 하나와 `Set` 하나만으로 상태를 관리하므로 메모리 사용량이 줄어든다.
- 코드 가독성 향상: 오른쪽 토핑을 미리 세팅한 뒤 한 번의 순회로 결과를 도출할 수 있어 직관적이다.
