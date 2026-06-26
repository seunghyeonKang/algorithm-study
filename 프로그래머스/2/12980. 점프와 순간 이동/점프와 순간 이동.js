function solution(n) {
    let countOne = 0;
    
    while (n > 0) {
        if (n % 2 !== 0) countOne++;
        n = Math.floor(n / 2);
    }

    return countOne;
}