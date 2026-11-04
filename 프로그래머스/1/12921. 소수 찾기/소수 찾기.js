function solution(n) {
    let count = 0;
    
    for (let i = 2; i <= n; i++) {
        let isComplete = true;
        for (let j = 2; j <= Math.sqrt(i); j++) {
            if (i % j === 0) {
                isComplete = false;
                break;
            }
        }
        if (isComplete) count++;
    }
    
    return count;
}