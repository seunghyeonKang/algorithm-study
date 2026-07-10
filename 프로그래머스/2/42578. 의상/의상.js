function solution(clothes) {
    const clothTypeObj = {};
    
    for (let i = 0; i < clothes.length; i++) {
        const clothType = clothes[i][1];
        
        if (clothTypeObj[clothType]) clothTypeObj[clothType]++;
        else clothTypeObj[clothType] = 1;
    }
    
    let answer = 1;
    for (let type in clothTypeObj) {
        answer *= clothTypeObj[type] + 1;
    }
    
    return answer - 1; // (종류의 개수 + 1)의 곱 - 1
}