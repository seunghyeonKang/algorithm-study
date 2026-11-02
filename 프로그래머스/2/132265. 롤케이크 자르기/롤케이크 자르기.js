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
