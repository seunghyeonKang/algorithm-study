# [level 1] 경기도에 위치한 식품창고 목록 출력하기 - 131114 

[문제 링크](https://school.programmers.co.kr/learn/courses/30/lessons/131114) 

### 성능 요약

메모리: undefined, 시간: 

### 구분

코딩테스트 연습 > IS NULL

### 채점결과

합계: 100.0 / 100.0

### 제출 일자

2026년 08월 04일 08:00:38

### 문제 설명

<p>다음은 식품창고의 정보를 담은 <code>FOOD_WAREHOUSE</code> 테이블입니다. <code>FOOD_WAREHOUSE</code> 테이블은 다음과 같으며 <code>WAREHOUSE_ID</code>, <code>WAREHOUSE_NAME</code>, <code>ADDRESS</code>, <code>TLNO</code>, <code>FREEZER_YN</code>는 창고 ID, 창고 이름, 창고 주소, 전화번호, 냉동시설 여부를 의미합니다.</p>
<table class="table">
        <thead><tr>
<th>Column name</th>
<th>Type</th>
<th>Nullable</th>
</tr>
</thead>
        <tbody><tr>
<td>WAREHOUSE_ID</td>
<td>VARCHAR(10)</td>
<td>FALSE</td>
</tr>
<tr>
<td>WAREHOUSE_NAME</td>
<td>VARCHAR(20)</td>
<td>FALSE</td>
</tr>
<tr>
<td>ADDRESS</td>
<td>VARCHAR(100)</td>
<td>TRUE</td>
</tr>
<tr>
<td>TLNO</td>
<td>VARCHAR(20)</td>
<td>TRUE</td>
</tr>
<tr>
<td>FREEZER_YN</td>
<td>VARCHAR(1)</td>
<td>TRUE</td>
</tr>
</tbody>
      </table>
<hr>

<h5>문제</h5>

<p><code>FOOD_WAREHOUSE</code> 테이블에서 경기도에 위치한 창고의 ID, 이름, 주소, 냉동시설 여부를 조회하는 SQL문을 작성해주세요. 이때 냉동시설 여부가 NULL인 경우, 'N'으로 출력시켜 주시고 결과는 창고 ID를 기준으로 오름차순 정렬해주세요.</p>

<hr>

<h5>예시</h5>

<p><code>FOOD_WAREHOUSE</code> 테이블이 다음과 같을 때</p>
<table class="table">
        <thead><tr>
<th>WAREHOUSE_ID</th>
<th>WAREHOUSE_NAME</th>
<th>ADDRESS</th>
<th>TLNO</th>
<th>FREEZER_YN</th>
</tr>
</thead>
        <tbody><tr>
<td>WH0001</td>
<td>창고_경기1</td>
<td>경기도 안산시 상록구 용담로 141</td>
<td>031-152-1332</td>
<td>Y</td>
</tr>
<tr>
<td>WH0002</td>
<td>창고_충북1</td>
<td>충청북도 진천군 진천읍 씨제이로 110</td>
<td>043-623-9900</td>
<td>Y</td>
</tr>
<tr>
<td>WH0003</td>
<td>창고_경기2</td>
<td>경기도 이천시 마장면 덕평로 811</td>
<td>031-221-7241</td>
<td>NULL</td>
</tr>
<tr>
<td>WH0004</td>
<td>창고_경기3</td>
<td>경기도 김포시 대곶면 율생중앙로205번길</td>
<td>031-671-1900</td>
<td>N</td>
</tr>
<tr>
<td>WH0005</td>
<td>창고_충남1</td>
<td>충청남도 천안시 동남구 광덕면 신덕리1길 9</td>
<td>041-876-5421</td>
<td>Y</td>
</tr>
</tbody>
      </table>
<p>SQL을 실행하면 다음과 같이 출력되어야 합니다.</p>
<table class="table">
        <thead><tr>
<th>WAREHOUSE_ID</th>
<th>WAREHOUSE_NAME</th>
<th>ADDRESS</th>
<th>FREEZER_YN</th>
</tr>
</thead>
        <tbody><tr>
<td>WH0001</td>
<td>창고_경기1</td>
<td>경기도 안산시 상록구 용담로 141</td>
<td>Y</td>
</tr>
<tr>
<td>WH0003</td>
<td>창고_경기2</td>
<td>경기도 이천시 마장면 덕평로 811</td>
<td>N</td>
</tr>
<tr>
<td>WH0004</td>
<td>창고_경기3</td>
<td>경기도 김포시 대곶면 율생중앙로205번길</td>
<td>N</td>
</tr>
</tbody>
      </table>

> 출처: 프로그래머스 코딩 테스트 연습, https://school.programmers.co.kr/learn/challenges

## 📌 SQL Code Review 📌

### 01. 작성한 쿼리
```sql
SELECT WAREHOUSE_ID, WAREHOUSE_NAME, ADDRESS, IFNULL(FREEZER_YN, 'N') AS FREEZER_YN
FROM FOOD_WAREHOUSE
WHERE ADDRESS LIKE '경기도%'
ORDER BY WAREHOUSE_ID ASC;
```

### 02. 사전 지식 & SQL 개념
- `WHERE ADDRESS LIKE '경기도%'`: 주소가 '경기도'로 시작하는 창고만 추출하기 위해 `LIKE '경기도%'` 조건문으로 필터링한다.
  - `경기도%`: '경기도'로 시작하는 문자열
  - `%경기도%`: 위치 상관없이 '경기도'가 포함된 문자열
- `IFNULL`: 별도의 줄이 아니라 `SELECT` 절의 컬럼명 자리에 들어가야 한다.
- 문자열 따옴표 규격: SQL 표준 및 데이터베이스 호환성을 위해 문자열 감싸기에는 쌍따옴표(`"`) 대신 단일 따옴표(`'`)를 사용하는 것이 안전하다.
  - 단일 따옴표 (`' '`): 문자열 리터럴 (데이터 값)
    - 예: `'경기도'`, `'N'`, `'홍길동'`, `'2026-08-04'`
  - 쌍따옴표 (`" "`): 식별자 (테이블명, 컬럼명)
    - 예: `SELECT "WAREHOUSE_ID" FROM "FOOD_WAREHOUSE"`
