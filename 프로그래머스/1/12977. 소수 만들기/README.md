# [level 1] 소수 만들기 - 12977 

[문제 링크](https://school.programmers.co.kr/learn/courses/30/lessons/12977) 

### 성능 요약

메모리: 50.5 MB, 시간: 41.23 ms

### 구분

코딩테스트 연습 > Summer／Winter Coding（～2018）

### 채점결과

정확성: 100.0<br/>합계: 100.0 / 100.0

### 제출 일자

2026년 11월 05일 22:10:16

### 문제 설명

<p>주어진 숫자 중 3개의 수를 더했을 때 소수가 되는 경우의 개수를 구하려고 합니다. 숫자들이 들어있는 배열 nums가 매개변수로 주어질 때, nums에 있는 숫자들 중 서로 다른 3개를 골라 더했을 때 소수가 되는 경우의 개수를 return 하도록 solution 함수를 완성해주세요.</p>

<h5>제한사항</h5>

<ul>
<li>nums에 들어있는 숫자의 개수는 3개 이상 50개 이하입니다.</li>
<li>nums의 각 원소는 1 이상 1,000 이하의 자연수이며, 중복된 숫자가 들어있지 않습니다.</li>
</ul>

<hr>

<h5>입출력 예</h5>
<table class="table">
        <thead><tr>
<th>nums</th>
<th>result</th>
</tr>
</thead>
        <tbody><tr>
<td>[1,2,3,4]</td>
<td>1</td>
</tr>
<tr>
<td>[1,2,7,6,4]</td>
<td>4</td>
</tr>
</tbody>
      </table>
<h5>입출력 예 설명</h5>

<p>입출력 예 #1<br>
[1,2,4]를 이용해서 7을 만들 수 있습니다.</p>

<p>입출력 예 #2<br>
[1,2,4]를 이용해서 7을 만들 수 있습니다.<br>
[1,4,6]을 이용해서 11을 만들 수 있습니다.<br>
[2,4,7]을 이용해서 13을 만들 수 있습니다.<br>
[4,6,7]을 이용해서 17을 만들 수 있습니다.</p>


> 출처: 프로그래머스 코딩 테스트 연습, https://school.programmers.co.kr/learn/challenges

# 📌 Code Review 📌

## 01. 기존 풀이
```javascript
function solution(nums) {
    const sumArr = [];
    
    for (let i = 0; i < nums.length - 2; i++) {
        for (let j = i + 1; j < nums.length - 1; j++) {
            for (let k = j + 1; k < nums.length; k++) {
                sumArr.push(nums[i] + nums[j] + nums[k]);
            }
        }
    }
    
    let count = 0;
    for (const n of sumArr) {
        let isPrime = true;
        for (let i = 2; i <= Math.sqrt(n); i++) {
            if (n % i === 0) isPrime = false;
        }
        if (isPrime) count++;
    }
    
    return count;
}
```

## 02. AI 피드백 & 사전지식
- 소수 판별 루프의 최적화: `break` 추가
- 불필요한 배열 생성 제거: 조합의 개수가 약 19,600개 정도로 적어 메모리 부담은 크지 않지만, 3중 루프 안에서 합을 구함과 동시에 소수 판별을 수행하고 `count`를 증가시키면 배열을 만들지 않아도 된다.

## 03. 개선 풀이
```javascript
function solution(nums) {
    let count = 0;

    // 소수 판별 함수
    const isPrime = (n) => {
        for (let i = 2; i <= Math.sqrt(n); i++) {
            if (n % i === 0) return false; // 약수가 발견되면 즉시 false 반환
        }
        return true;
    };

    // 3개의 수를 고르는 조합
    for (let i = 0; i < nums.length - 2; i++) {
        for (let j = i + 1; j < nums.length - 1; j++) {
            for (let k = j + 1; k < nums.length; k++) {
                const sum = nums[i] + nums[j] + nums[k];
                
                // 합이 소수인지 확인 후 카운트 증가
                if (isPrime(sum)) {
                    count++;
                }
            }
        }
    }

    return count;
}
```
