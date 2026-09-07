# [level 3] 자동차 대여 기록에서 대여중 / 대여 가능 여부 구분하기 - 157340 

[문제 링크](https://school.programmers.co.kr/learn/courses/30/lessons/157340?language=mysql) 

### 성능 요약

메모리: undefined, 시간: 

### 구분

코딩테스트 연습 > GROUP BY

### 채점결과

합계: 100.0 / 100.0

### 제출 일자

2026년 09월 07일 23:52:07

### 문제 설명

<p>다음은 어느 자동차 대여 회사의 자동차 대여 기록 정보를 담은 <code>CAR_RENTAL_COMPANY_RENTAL_HISTORY</code> 테이블입니다. <code>CAR_RENTAL_COMPANY_RENTAL_HISTORY</code> 테이블은 아래와 같은 구조로 되어있으며, <code>HISTORY_ID</code>, <code>CAR_ID</code>, <code>START_DATE</code>, <code>END_DATE</code> 는 각각 자동차 대여 기록 ID, 자동차 ID, 대여 시작일, 대여 종료일을 나타냅니다.</p>
<table class="table">
        <thead><tr>
<th>Column name</th>
<th>Type</th>
<th>Nullable</th>
</tr>
</thead>
        <tbody><tr>
<td>HISTORY_ID</td>
<td>INTEGER</td>
<td>FALSE</td>
</tr>
<tr>
<td>CAR_ID</td>
<td>INTEGER</td>
<td>FALSE</td>
</tr>
<tr>
<td>START_DATE</td>
<td>DATE</td>
<td>FALSE</td>
</tr>
<tr>
<td>END_DATE</td>
<td>DATE</td>
<td>FALSE</td>
</tr>
</tbody>
      </table>
<hr>

<h5>문제</h5>

<p><code>CAR_RENTAL_COMPANY_RENTAL_HISTORY</code> 테이블에서 2022년 10월 16일에 대여 중인 자동차인 경우 '대여중' 이라고 표시하고, 대여 중이지 않은 자동차인 경우 '대여 가능'을 표시하는 컬럼(컬럼명: <code>AVAILABILITY</code>)을 추가하여 자동차 ID와 <code>AVAILABILITY</code> 리스트를 출력하는 SQL문을 작성해주세요. 이때 반납 날짜가 2022년 10월 16일인 경우에도 '대여중'으로 표시해주시고 결과는 자동차 ID를 기준으로 내림차순 정렬해주세요.</p>

<hr>

<h5>예시</h5>

<p>예를 들어 <code>CAR_RENTAL_COMPANY_RENTAL_HISTORY</code> 테이블이 다음과 같다면</p>
<table class="table">
        <thead><tr>
<th>HISTORY_ID</th>
<th>CAR_ID</th>
<th>START_DATE</th>
<th>END_DATE</th>
</tr>
</thead>
        <tbody><tr>
<td>1</td>
<td>4</td>
<td>2022-09-27</td>
<td>2022-09-27</td>
</tr>
<tr>
<td>2</td>
<td>3</td>
<td>2022-10-03</td>
<td>2022-10-04</td>
</tr>
<tr>
<td>3</td>
<td>2</td>
<td>2022-10-05</td>
<td>2022-10-05</td>
</tr>
<tr>
<td>4</td>
<td>1</td>
<td>2022-10-11</td>
<td>2022-10-16</td>
</tr>
<tr>
<td>5</td>
<td>3</td>
<td>2022-10-13</td>
<td>2022-10-15</td>
</tr>
<tr>
<td>6</td>
<td>2</td>
<td>2022-10-15</td>
<td>2022-10-17</td>
</tr>
</tbody>
      </table>
<p>2022년 10월 16일에 대여 중인 자동차는 자동차 ID가 1, 2인 자동차이고, 대여 가능한 자동차는 자동차 ID가 3, 4이므로, '대여중' 또는 '대여 가능' 을 표시하는 컬럼을 추가하고, 자동차 ID를 기준으로 내림차순 정렬하면 다음과 같이 나와야 합니다.</p>
<table class="table">
        <thead><tr>
<th>CAR_ID</th>
<th>AVAILABILITY</th>
</tr>
</thead>
        <tbody><tr>
<td>4</td>
<td>대여 가능</td>
</tr>
<tr>
<td>3</td>
<td>대여 가능</td>
</tr>
<tr>
<td>2</td>
<td>대여중</td>
</tr>
<tr>
<td>1</td>
<td>대여중</td>
</tr>
</tbody>
      </table>

> 출처: 프로그래머스 코딩 테스트 연습, https://school.programmers.co.kr/learn/challenges

## 📌 SQL Code Review 📌

### 01. 정답 쿼리
```sql
SELECT 
    CAR_ID,
    CASE 
        WHEN MAX(CASE WHEN '2022-10-16' BETWEEN START_DATE AND END_DATE THEN 1 ELSE 0 END) = 1 
        THEN '대여중'
        ELSE '대여 가능'
    END AS AVAILABILITY
FROM CAR_RENTAL_COMPANY_RENTAL_HISTORY
GROUP BY CAR_ID
ORDER BY CAR_ID DESC;
```

### 02. 사전 지식 & SQL 개념
- `CASE` 문은 `SELECT` 절 내부에서 새로운 컬럼을 만들 때 사용되어야 한다.
1. 차랑별 그룹화
   - `GROUP BY CAR_ID`: 동일한 차량의 기록을 하나의 그룹으로 묶는다.
2. 개별 기록의 대여 여부 판별
   - `CASE WHEN '2022-10-16' BETWEEN START_DATE AND END_DATE THEN 1 ELSE 0 END`
   - 각 대여 기록(행)마다 2022년 10월 16일이 대여 기간(START_DATE ~ END_DATE) 사이에 있는지를 확인한다.
3. 그룹 내 대여 여부 합산 및 판별
   - `MAX(...)`: `GROUP BY`로 묶인 특정 차량의 여러 대여 기록들 중, 위에서 계산된 결과값(1 또는 0)의 최댓값(MAX)을 구한다.
4. 최종 문자열 출력
   - 바깥쪽 `CASE WHEN`: MAX의 결과값이 1인지 비교하여 최종 결과값을 문자열로 치환한다.
