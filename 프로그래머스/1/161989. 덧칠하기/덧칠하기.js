function solution(n, m, section) {
    // 작은 숫자부터 +m까지 완료, 끝까지
    let tryNum = 0;
    let tryLength = 0;
    
    for (let i = 0; i < section.length; i++) {
        if (section[i] > tryLength || i === 0) {
            tryLength = section[i] + m - 1;
            tryNum++;
        }
    }
    
    return tryNum;
}