function solution(a, b, n) {
    let left = n;
    let countGet = 0;
    
    while (true) {
        if (left / a < 1) break;
        
        if (left % a === 0) {
            countGet += (left / a) * b;
            left = left / a * b;
        } else {
            countGet += Math.floor(left / a) * b;
            left = left - Math.floor(left / a) * a + Math.floor(left / a) * b;
        }
    }
    
    return countGet;
}