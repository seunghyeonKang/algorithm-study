function solution(elements) {
    let combineSet = new Set();
    let loopElements = [...elements, ...elements];
    
    for (let arrLength = 1; arrLength <= elements.length; arrLength++) { // 부분 수열의 길이
        for (let startIdx = 0; startIdx < elements.length; startIdx++) { // 부분 수열의 시작점
            let sum = 0;
            for (let i = 0; i < arrLength; i++) { // 부분 수열의 합 구하는 루프
                sum += loopElements[startIdx + i];
            }
            combineSet.add(sum);
        }
    }
    
    return combineSet.size;
}