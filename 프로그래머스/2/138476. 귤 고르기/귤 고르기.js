function solution(k, tangerine) {
    let sizeNumObj = {};
    for (const size of tangerine) {
        if (sizeNumObj[size] > 0) sizeNumObj[size]++;
        else sizeNumObj[size] = 1;
    }
    
    let numList = [];
    for (const size in sizeNumObj) {
        numList.push(sizeNumObj[size]);
    }
    numList.sort((a, b) => b - a);
    
    let total = 0;
    let answer;
    for (let i = 0; i < numList.length; i++) {
        total += numList[i];
        
        if (total >= k ) {
            answer = i + 1;
            break;
        }
    }
    return answer;
}