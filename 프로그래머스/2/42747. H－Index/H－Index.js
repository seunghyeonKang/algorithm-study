function solution(citations) {
    const sortedArr = citations.sort((a, b) => b - a);
    
    for (let i = 0; i < sortedArr.length; i++) {
        if (sortedArr[i] < i + 1) {
            return i;
        }
    }
    
    return sortedArr.length;
}