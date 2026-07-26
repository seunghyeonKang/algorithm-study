function solution(n) {
    if (n % 2 === 1) n -= 1;
    
    return (n + 2) * n / 4;
}