# [level 1] 추억 점수 - 176963 

[문제 링크](https://school.programmers.co.kr/learn/courses/30/lessons/176963) 

### 성능 요약

메모리: 49.7 MB, 시간: 2.95 ms

### 구분

코딩테스트 연습 > 연습문제

### 채점결과

정확성: 100.0<br/>합계: 100.0 / 100.0

### 제출 일자

2026년 07월 03일 12:49:11

### 문제 설명

<p>사진들을 보며 추억에 젖어 있던 루는 사진별로 추억 점수를 매길려고 합니다. 사진 속에 나오는 인물의 그리움 점수를 모두 합산한 값이 해당 사진의 추억 점수가 됩니다. 예를 들어 사진 속 인물의 이름이 ["may", "kein", "kain"]이고 각 인물의 그리움 점수가 [5점, 10점, 1점]일 때 해당 사진의 추억 점수는 16(5 + 10 + 1)점이 됩니다. 다른 사진 속 인물의 이름이 ["kali", "mari", "don", "tony"]이고 ["kali", "mari", "don"]의 그리움 점수가 각각 [11점, 1점, 55점]]이고, "tony"는 그리움 점수가 없을 때, 이 사진의 추억 점수는 3명의 그리움 점수를 합한 67(11 + 1 + 55)점입니다.</p>

<p>그리워하는 사람의 이름을 담은 문자열 배열 <code>name</code>, 각 사람별 그리움 점수를 담은 정수 배열 <code>yearning</code>, 각 사진에 찍힌 인물의 이름을 담은 이차원 문자열 배열 <code>photo</code>가 매개변수로 주어질 때, 사진들의 추억 점수를 <code>photo</code>에 주어진 순서대로 배열에 담아 return하는 solution 함수를 완성해주세요.</p>

<hr>

<h5>제한사항</h5>

<ul>
<li>3 ≤ <code>name</code>의 길이 = <code>yearning</code>의 길이≤ 100

<ul>
<li>3 ≤ <code>name</code>의 원소의 길이 ≤ 7</li>
<li><code>name</code>의 원소들은 알파벳 소문자로만 이루어져 있습니다.</li>
<li><code>name</code>에는 중복된 값이 들어가지 않습니다.</li>
<li>1 ≤ <code>yearning[i]</code> ≤ 100</li>
<li><code>yearning[i]</code>는 i번째 사람의 그리움 점수입니다.</li>
</ul></li>
<li>3 ≤ <code>photo</code>의 길이 ≤ 100

<ul>
<li>1 ≤ <code>photo[i]</code>의 길이 ≤ 100</li>
<li>3 ≤ <code>photo[i]</code>의 원소(문자열)의 길이 ≤ 7</li>
<li><code>photo[i]</code>의 원소들은 알파벳 소문자로만 이루어져 있습니다.</li>
<li><code>photo[i]</code>의 원소들은 중복된 값이 들어가지 않습니다.</li>
</ul></li>
</ul>

<hr>

<h5>입출력 예</h5>
<table class="table">
        <thead><tr>
<th>name</th>
<th>yearning</th>
<th>photo</th>
<th>result</th>
</tr>
</thead>
        <tbody><tr>
<td>["may", "kein", "kain", "radi"]</td>
<td>[5, 10, 1, 3]</td>
<td>[["may", "kein", "kain", "radi"],["may", "kein", "brin", "deny"], ["kon", "kain", "may", "coni"]]</td>
<td>[19, 15, 6]</td>
</tr>
<tr>
<td>["kali", "mari", "don"]</td>
<td>[11, 1, 55]</td>
<td>[["kali", "mari", "don"], ["pony", "tom", "teddy"], ["con", "mona", "don"]]</td>
<td>[67, 0, 55]</td>
</tr>
<tr>
<td>["may", "kein", "kain", "radi"]</td>
<td>[5, 10, 1, 3]</td>
<td>[["may"],["kein", "deny", "may"], ["kon", "coni"]]</td>
<td>[5, 15, 0]</td>
</tr>
</tbody>
      </table>
<hr>

<h5>입출력 예 설명</h5>

<p>입출력 예 #1</p>

<p>첫 번째 사진 속 "may", "kein", "kain", "radi"의 그리움 점수를 합치면 19(5 + 10 + 1 + 3)점 입니다. 두 번째 사진 속 그리워하는 사람들인 "may"와 "kein"의 그리움 점수를 합치면 15(5 + 10)점입니다. 세 번째 사진의 경우 "kain"과 "may"만 그리워하므로 둘의 그리움 점수를 합한 6(1 + 5)점이 사진의 추억 점수입니다. 따라서 [19, 15, 6]을 반환합니다.</p>

<p>입출력 예 #2</p>

<p>첫 번째 사진 속 그리워하는 사람들인 "kali", "mari", "don"의 그리움 점수를 합치면 67(11 + 1 + 55)점입니다. 두 번째 사진 속엔 그리워하는 인물이 없으므로 0점입니다. 세 번째 사진 속 그리워하는 사람은 "don"만 있으므로 55점입니다. 따라서 [67, 0, 55]를 반환합니다.</p>

<p>입출력 예 #3</p>

<p>설명 생략</p>


> 출처: 프로그래머스 코딩 테스트 연습, https://school.programmers.co.kr/learn/challenges

## 📌 Code Review 📌

### 00. 기존 풀이: 정확성에서 실패
```javascript
function solution(name, yearning, photo) {
    const nameYearnObj = {};
    name.forEach((oneName, i) => nameYearnObj[oneName] = yearning[i]);
    
    const photoScoreArr = [];
    
    photo.forEach((photoNameArr) => { // 사진 하나의 이름들
        let regex = new RegExp(name.join("|"), "gi");
        let yearningSum = 0; // 사진 하나의 점수의 합
        
        photoNameArr.forEach((onePhotoName, i) => {
            let matchResult = onePhotoName.match(regex);
            if (matchResult) yearningSum += nameYearnObj[matchResult[0]];
        })
        
        photoScoreArr.push(yearningSum);
    })
    
    return photoScoreArr;
}
```
- 객체(Object) 생성에 대한 접근은 좋았지만, 정규식 도입으로 복잡해졌다.
- 정규식은 '규칙이나 패턴'을 찾을 때 사용하고, 단어 대 단어의 100% 정확한 일치를 비교할 때는 지양하자.

### 01. 기존 풀이: 정확성 성공
```javascript
function solution(name, yearning, photo) {
    const photoScoreArr = []; // 결과 점수 배열
    
    photo.forEach((photoNameArr) => { // 사진 한 장의 이름들
        let yearningSum = 0;
        
        photoNameArr.forEach((onePhotoName) => {
            name.forEach((oneYearningName, i) => {
                if (oneYearningName === onePhotoName) yearningSum += yearning[i];
            })
        })
        
        photoScoreArr.push(yearningSum);
    })
    
    return photoScoreArr;
}
```
- 정규식의 허점을 파악하고 단순 반복문으로 풀었다.
- 정확성을 통과했지만 시간복잡도가 $O(P \times M \times N)$이기에 효율성이 좋지 않다.

### 02. 개선 방향: `Map` 함수와 객체 활용
```javascript
function solution(name, yearning, photo) {
    // 1. 이름과 점수를 매핑한 매핑 테이블(객체) 만들기
    const scoreMap = {};
    name.forEach((oneName, i) => {
        scoreMap[oneName] = yearning[i];
    });
    
    // 2. map 메서드를 사용해 각 사진의 점수를 바로 반환하기
    return photo.map((photoNameArr) => {
        let yearningSum = 0;
        
        photoNameArr.forEach((onePhotoName) => {
            // 객체 안에 이름이 있으면(점수가 있으면) 더하고, 없으면 0을 더함
            yearningSum += scoreMap[onePhotoName] || 0;
        });
        
        return yearningSum;
    });
}
```
- 정규식 없이 사진 속 이름이 객체에 존재하면 점수를 더하는 방식으로 하면 시간 복잡도가 $O(N \times M)$로 빨라진다.

### 03. 사전 지식
- '100% 일치하는 데이터를 찾을 때나 `1:1` 변환할 때는 객체(Key-Value)나 `map()`을 활용하자.
- `g` (Global): 전체 검색. 문자열 전체에서 일치하는 걸 전부 찾는다. (이게 없으면 첫 번째 하나만 찾고 끝난다.)
- `i` (Ignore Case): 대소문자 무시. 대문자 A와 소문자 a를 구별하지 않고 똑같이 취급한다.
- `new RegExp()`: 변수 안에 담긴 문자열을 정규식 패턴으로 쓰고 싶을 때는 반드시 `new RegExp()` 객체를 사용한다. (정규식 리터럴 방식에서는 변수를 사용하지 못한다.)
  ```
  const keywords = ['사과', '바나나', '포도'];
  const regex = new RegExp(keywords.join('|'), 'gi');

  const text = "마트에서 사과랑 포도를 샀는데, 바나나는 깜빡했어.";
  const matches = text.match(regex);
  // 출력 결과: ['사과', '포도', '바나나']
  ```
