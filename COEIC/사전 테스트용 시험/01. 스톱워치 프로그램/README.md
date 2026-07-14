**스톱워치 프로그램**

운동장에서 Sam은 한 바퀴 뛸 때마다 랩타임으로 시간을 기록하고 있습니다. n 바퀴를 돈다고 했을 때, 각 바퀴마다 도는데 걸린 시간을 초로 나타낸 값 t1, t2, ..., tn이 주어집니다. 총 걸린 시간을 시, 분, 초로 나타내어 출력하는 프로그램을 작성하세요.

**Input**

첫 번째 줄에는 정수 n이 주어집니다.

그 다음 줄에는 정수 t1, t2, ..., tn이 공백으로 구분되어 주어집니다. ti는 각 바퀴를 도는 데 걸린 시간을 초 단위로 나타낸 값입니다.

**Constraints**

- 1 ≤ n ≤ 100
- 0 ≤ ti ≤ 999

**Output**

첫 번째 줄에 총 걸린 시간을 시, 분, 초로 바꿔 공백을 사이에 두고 출력합니다.

**I/O Examples**

Example 1

Input
```
5
13 35 64 46 7
```

Output
```
0 2 45
```


## 📌 Code Review 📌

### 00. 기존 풀이 (실패 코드)
```javascript
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let sec = input[1].split(' ').map(Number).reduce((acc, curr) => acc + curr, 0);
const min = Math.floor(sec / 60);
const hour = Math.floor(sec / 60 / 60);

console.log(`${hour} ${min} ${sec % 60}`);
```
- 정확성 실패...
- COEIC 사전 테스트용 시험에서 20분 안에 통과 실패...

### 01. 정답 코드
```javascript
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const times = input[1].split(' ').map(Number);
const totalSeconds = times.reduce((acc, cur) => acc + cur, 0);

const hours = Math.floor(totalSeconds / 3600);
const minutes = Math.floor((totalSeconds % 3600) / 60);
const seconds = totalSeconds % 60;

console.log(hours, minutes, seconds);
```

### 02 사전 지식
- 프로그래머스의 경우, 기본 틀을 주며 매개변수로 값을 직접 넘겨주기 때문에 입력을 직접 읽을 필요가 없었다. 반면 COEIC에서는 콘솔에 입력된 텍스트 전체를 코드가 직접 읽어와서, 원하는 형태로 가공하는 과정이 필요했다.
- `readFileSync('/dev/stdin')`의 의미
  - `/dev/stdin`: "표준입력"을 가리키는 특수 경로이다. 사용자가 입력창에 입력한 텍스트 전체가 여기로 들어온다.
  - `readFileSync`: 이 내용을 통째로 읽어온 뒤, 문자열로 바꾸고(`.toString()`) 앞뒤 공백을 제거(`.trim()`)하는 과정이 표준적인 시작 패턴이다.
- 입력이 여러 줄일 때는 `\n`으로 먼저 나눈다.
- `.map(Number)`: 배열의 각 원소를 숫자로 한 번에 변환해준다.
- 초 단위를 시/분/초로 변환
  - 시간: `Math.floor(totalSeconds / 3600)` — 전체 초를 3600(1시간)으로 나눈 몫
  - 분: `Math.floor((totalSeconds % 3600) / 60)` — 시간을 뺀 나머지 초를 60으로 나눈 몫
  - 초: `totalSeconds % 60 — 60`으로 나눈 나머지
