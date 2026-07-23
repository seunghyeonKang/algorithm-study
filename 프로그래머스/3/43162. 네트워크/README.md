# [level 3] 네트워크 - 43162 

[문제 링크](https://school.programmers.co.kr/learn/courses/30/lessons/43162) 

### 성능 요약

메모리: 44.2 MB, 시간: 0.41 ms

### 구분

코딩테스트 연습 > 깊이／너비 우선 탐색（DFS／BFS）

### 채점결과

정확성: 100.0<br/>합계: 100.0 / 100.0

### 제출 일자

2026년 07월 23일 12:22:36

### 문제 설명

<p>네트워크란 컴퓨터 상호 간에 정보를 교환할 수 있도록 연결된 형태를 의미합니다. 예를 들어, 컴퓨터 A와 컴퓨터 B가 직접적으로 연결되어있고, 컴퓨터 B와 컴퓨터 C가 직접적으로 연결되어 있을 때 컴퓨터 A와 컴퓨터 C도 간접적으로 연결되어 정보를 교환할 수 있습니다. 따라서 컴퓨터 A, B, C는 모두 같은 네트워크 상에 있다고 할 수 있습니다.</p>

<p>컴퓨터의 개수 n, 연결에 대한 정보가 담긴 2차원 배열 computers가 매개변수로 주어질 때, 네트워크의 개수를 return 하도록 solution 함수를 작성하시오.</p>

<h5>제한사항</h5>

<ul>
<li>컴퓨터의 개수 n은 1 이상 200 이하인 자연수입니다.</li>
<li>각 컴퓨터는 0부터 <code>n-1</code>인 정수로 표현합니다.</li>
<li>i번 컴퓨터와 j번 컴퓨터가 연결되어 있으면 computers[i][j]를 1로 표현합니다.</li>
<li>computer[i][i]는 항상 1입니다.</li>
</ul>

<h5>입출력 예</h5>
<table class="table">
        <thead><tr>
<th>n</th>
<th>computers</th>
<th>return</th>
</tr>
</thead>
        <tbody><tr>
<td>3</td>
<td>[[1, 1, 0], [1, 1, 0], [0, 0, 1]]</td>
<td>2</td>
</tr>
<tr>
<td>3</td>
<td>[[1, 1, 0], [1, 1, 1], [0, 1, 1]]</td>
<td>1</td>
</tr>
</tbody>
      </table>
<h5>입출력 예 설명</h5>

<p>예제 #1<br>
아래와 같이 2개의 네트워크가 있습니다.<br>
  <img src="https://asset.programmers.co.kr/files/ybm/5b61d6ca97/cc1e7816-b6d7-4649-98e0-e95ea2007fd7.png" title="" alt="image0.png"></p>

<p>예제 #2<br>
아래와 같이 1개의 네트워크가 있습니다.<br>
  <img src="https://asset.programmers.co.kr/files/ybm/7554746da2/edb61632-59f4-4799-9154-de9ca98c9e55.png" title="" alt="image1.png"></p>


> 출처: 프로그래머스 코딩 테스트 연습, https://school.programmers.co.kr/learn/challenges

## 📌 Code Review 📌

### 01. 기존 풀이
```javascript
function solution(n, computers) {
    let countNetwork = 0;
    const isCheckedComputers = new Array(n).fill(false);
    
    const checkNetwork = (currentIdx) => {
        isCheckedComputers[currentIdx] = true;
        
        for (let connectedIdx = 0; connectedIdx < n; connectedIdx++) {
            if (computers[currentIdx][connectedIdx] === 1
                && currentIdx !== connectedIdx
                && !isCheckedComputers[connectedIdx]) {
                checkNetwork(connectedIdx);
            }
        }
    }
    
    for (let i = 0; i < n; i++) {
        if (!isCheckedComputers[i]) {
            countNetwork++;
            checkNetwork(i);
        }
    }
    return countNetwork;
}
```
- 명확한 방문 체크 배열 `isCheckedComputers`을 통해 중복 탐색하지 않도록 하여, 공간복잡도 $O(N)$로 효율적으로 관리했다.
- 변수명이 직관적이어서 코드의 의도를 파악하기 좋다.
- 자기 자신 비교 조건(`currentIdx !== connectedIdx`)은 `!isCheckedComputers[connectedIdx]` 검사 단계에서 걸러지므로 생략 가능하다.
- 조건문 하나에 `&&` 연결이 3개 들어가면 복잡해보일 수 있기에, Early Return 패턴을 통해 조건을 분리해도 좋다.
- 인접행렬을 순회하는 방식이기에 전체 시간복잡도는 $O(n²)$이다. n ≤ 200이라는 제약 안에서 충분히 효율적이다.

### 02. 개선 방향: 기존 코드 리팩토링
```javascript
function solution(n, computers) {
    let countNetwork = 0;
    const isVisited = new Array(n).fill(false);

    const dfs = (current) => {
        isVisited[current] = true;

        for (let next = 0; next < n; next++) {
            // 연결되어 있고, 아직 방문하지 않은 컴퓨터라면 탐색 진행
            if (computers[current][next] === 1 && !isVisited[next]) {
                dfs(next);
            }
        }
    };

    for (let i = 0; i < n; i++) {
        if (!isVisited[i]) {
            countNetwork++;
            dfs(i); // 새로운 네트워크 발견 시 해당 네트워크 내부를 모두 방문 처리
        }
    }

    return countNetwork;
}
```

### 03. 다른 풀이: Union-Find(분리 집합) 자료구조 방식
```javascript
function solution(n, computers) {
    const parent = new Array(n).fill(0).map((_, i) => i); // 처음엔 각자가 자기 자신의 대표

    // Find: x의 최종 대표(루트)를 찾기
    const find = (x) => {
        if (parent[x] === x) return x;
        return parent[x] = find(parent[x]); // 경로 압축
    };

    // Union: x와 y를 같은 그룹으로 합치기
    const union = (x, y) => {
        const rootX = find(x);
        const rootY = find(y);
        if (rootX !== rootY) {
            parent[rootX] = rootY;
        }
    };

    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            if (computers[i][j] === 1) {
                union(i, j);
            }
        }
    }

    // 루트가 자기 자신인 원소의 개수 = 그룹(네트워크) 개수
    const roots = new Set();
    for (let i = 0; i < n; i++) {
        roots.add(find(i));
    }
    return roots.size;
}
```

### 04. 사전 지식
- **Union-Find** (분리 집합, Disjoint Set): 여러 원소들을 여러 그룹으로 묶어서 관리하는 자료구조이다. 핵심 질문은 "이 두 원소가 같은 그룹에 속해 있는가?"이다.
  - 지금 네트워크 문제 정도의 규모(n ≤ 200)에서는 DFS든 Union-Find든 성능 차이가 거의 없다.

  **DFS/BFS 대비 유리한 경우:**
  - 경로 압축 덕분에 `Find` 연산이 거의 $O(1)$에 가깝기 때문에, 연결 여부만 자주 확인해야할 때 유리하다.
  - 그래프가 실시간으로 계혹 추가/변경될 때, `Union`만 계속 호출하면 되므로 효율적이다.
  - `Union`하기 전에 이미 같은 그룹인지 확인하면 사이클 판별이 바로 가능하다.
