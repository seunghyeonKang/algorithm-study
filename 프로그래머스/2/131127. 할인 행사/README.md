# [level 2] 할인 행사 - 131127 

[문제 링크](https://school.programmers.co.kr/learn/courses/30/lessons/131127) 

### 성능 요약

메모리: 50.8 MB, 시간: 7.80 ms

### 구분

코딩테스트 연습 > 연습문제

### 채점결과

정확성: 100.0<br/>합계: 100.0 / 100.0

### 제출 일자

2026년 07월 06일 16:37:26

### 문제 설명

<p>XYZ 마트는 일정한 금액을 지불하면 10일 동안 회원 자격을 부여합니다. XYZ 마트에서는 회원을 대상으로 매일 한 가지 제품을 할인하는 행사를 합니다. 할인하는 제품은 하루에 하나씩만 구매할 수 있습니다. 알뜰한 정현이는 자신이 원하는 제품과 수량이 할인하는 날짜와 10일 연속으로 일치할 경우에 맞춰서 회원가입을 하려 합니다.</p>

<p>예를 들어, 정현이가 원하는 제품이 바나나 3개, 사과 2개, 쌀 2개, 돼지고기 2개, 냄비 1개이며, XYZ 마트에서 14일간 회원을 대상으로 할인하는 제품이 날짜 순서대로 치킨, 사과, 사과, 바나나, 쌀, 사과, 돼지고기, 바나나, 돼지고기, 쌀, 냄비, 바나나, 사과, 바나나인 경우에 대해 알아봅시다. 첫째 날부터 열흘 간에는 냄비가 할인하지 않기 때문에 첫째 날에는 회원가입을 하지 않습니다. 둘째 날부터 열흘 간에는 바나나를 원하는 만큼 할인구매할 수 없기 때문에 둘째 날에도 회원가입을 하지 않습니다. 셋째 날, 넷째 날, 다섯째 날부터 각각 열흘은 원하는 제품과 수량이 일치하기 때문에 셋 중 하루에 회원가입을 하려 합니다.</p>

<p>정현이가 원하는 제품을 나타내는 문자열 배열 <code>want</code>와 정현이가 원하는 제품의 수량을 나타내는 정수 배열 <code>number</code>, XYZ 마트에서 할인하는 제품을 나타내는 문자열 배열 <code>discount</code>가 주어졌을 때, 회원등록시 정현이가 원하는 제품을 모두 할인 받을 수 있는 회원등록 날짜의 총 일수를 return 하는 solution 함수를 완성하시오. 가능한 날이 없으면 0을 return 합니다.</p>

<hr>

<h5>제한사항</h5>

<ul>
<li>1 ≤ <code>want</code>의 길이 = <code>number</code>의 길이 ≤ 10

<ul>
<li>1 ≤ <code>number</code>의 원소 ≤ 10</li>
<li><code>number[i]</code>는 <code>want[i]</code>의 수량을 의미하며, <code>number</code>의 원소의 합은 10입니다.</li>
</ul></li>
<li>10 ≤ <code>discount</code>의 길이 ≤ 100,000</li>
<li><code>want</code>와 <code>discount</code>의 원소들은 알파벳 소문자로 이루어진 문자열입니다.

<ul>
<li>1 ≤ <code>want</code>의 원소의 길이, <code>discount</code>의 원소의 길이 ≤ 12</li>
</ul></li>
</ul>

<hr>

<h5>입출력 예</h5>
<table class="table">
        <thead><tr>
<th>want</th>
<th>number</th>
<th>discount</th>
<th>result</th>
</tr>
</thead>
        <tbody><tr>
<td>["banana", "apple", "rice", "pork", "pot"]</td>
<td>[3, 2, 2, 2, 1]</td>
<td>["chicken", "apple", "apple", "banana", "rice", "apple", "pork", "banana", "pork", "rice", "pot", "banana", "apple", "banana"]</td>
<td>3</td>
</tr>
<tr>
<td>["apple"]</td>
<td>[10]</td>
<td>["banana", "banana", "banana", "banana", "banana", "banana", "banana", "banana", "banana", "banana"]</td>
<td>0</td>
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
<li>사과가 할인하는 날이 없으므로 0을 return 합니다.</li>
</ul>

<hr>

<p>※ 공지 - 2024년 1월 26일 문제 지문의 오탈자가 수정되었습니다.</p>


> 출처: 프로그래머스 코딩 테스트 연습, https://school.programmers.co.kr/learn/challenges

## 📌 Code Review 📌

### 01. 기존 풀이
```javascript
function solution(want, number, discount) {
    const wantNumObj = {};
    for (let i = 0; i < want.length; i++) {
        wantNumObj[want[i]] = number[i];
    }
    
    const discountNumObj = {};
    let dayCount = 0;
    
    discount.forEach((disThing, i) => {
        if (discountNumObj[disThing] || discountNumObj[disThing] === 0) {
            discountNumObj[disThing]++;
        } else {
            discountNumObj[disThing] = 1;
        }
        if (i >= 10) {
            discountNumObj[discount[i - 10]]--;
        }
        if (i >= 9) {
            let isMatch = true;
            
            for (const wantThing in wantNumObj) {
                if (!discountNumObj[wantThing] || wantNumObj[wantThing] > discountNumObj[wantThing]) {
                    isMatch = false;
                    break;
                }
            }
            
            if (isMatch) dayCount++;
        }
    })
    
    return dayCount;
}
```

### 02. 개선 방향: 기존 코드 리팩토링
```javascript
function solution(want, number, discount) {
    const wantNumObj = {};
    for (let i = 0; i < want.length; i++) {
        wantNumObj[want[i]] = number[i];
    }
    
    const discountNumObj = {};
    let dayCount = 0;
    
    discount.forEach((disThing, i) => {
        // [개선] || 0 을 활용하면 undefined나 0일 때의 예외 처리를 한 줄로 안전하게 끝낼 수 있습니다.
        discountNumObj[disThing] = (discountNumObj[disThing] || 0) + 1;
        
        // 10일 기준 범위를 벗어난 첫 번째 원소 제거
        if (i >= 10) {
            discountNumObj[discount[i - 10]]--;
        }
        
        // 딱 10일째(인덱스 9)부터 검사 시작
        if (i >= 9) {
            let isMatch = true;
            
            for (const wantThing in wantNumObj) {
                // [개선] 원하는 수량과 할인 수량이 정확히 일치하는지 확인
                if (wantNumObj[wantThing] !== discountNumObj[wantThing]) {
                    isMatch = false;
                    break;
                }
            }
            
            if (isMatch) dayCount++;
        }
    });
    
    return dayCount;
}
```

### 03. 다른 풀이: `slice` 활용
```javascript
function solution(want, number, discount) {
    let dayCount = 0;
    
    // discount 배열을 0번째부터 끝까지 10개씩 슬라이싱하며 확인
    for (let i = 0; i <= discount.length - 10; i++) {
        const sliceSection = discount.slice(i, i + 10);
        
        // 원하는 제품들이 다 10개 안에 원하는 수량만큼 들어있는지 확인
        const isMatch = want.every((wantThing, idx) => {
            // sliceSection 안에 wantThing이 몇 개 있는지 필터링해서 개수 비교
            return sliceSection.filter(item => item === wantThing).length === number[idx];
        });
        
        if (isMatch) dayCount++;
    }
    
    return dayCount;
}
```

### 04. 사전 지식
- `forEach()`는 배열(Array)의 메서드이기 때문에 일반 객체에는 사용할 수 없다.
- 객체에 값을 더할 때 복잡하게 `if-else`를 쓰기보다, `obj[key] = (obj[key] || 0) + 1` 같은 패턴을 외워두고 사용하면 예외 케이스를 원천 차단할 수 있다.
- `Array.prototype.every()`: 모두 만족해야 `true`를 반환한다.
- `Array.prototype.some()`: 하나만 만족해도 `true`를 반환한다.
- `Map`: 키(Key)와 값(Value)의 쌍을 저장하며, 일반 객체와 달리 키의 타입에 제한이 없고 삽입된 순서가 보장되는 구조이다.
  
  ```
  const wantNumMap = new Map();
  wantNumMap.set("banana", 3);
  wantNumMap.set("apple", 2);
  
  console.log(wantNumMap.get("banana")); // 3

  for (const [key, value] of wantNumMap) {
      console.log(key, value);
  }
  ```
  일반 객체는 내부적으로 `Object.prototype`을 상속받고 있어서, 아주 드물게 `toString`, `constructor` 같은 이름이 데이터로 들어오면 예상치 못한 값과 충돌할 가능성이 있다. `Map`은 이런 상속 관계가 없어서 순수하게 내가 넣은 키-값만 존재한다는 점이 장점이다.
