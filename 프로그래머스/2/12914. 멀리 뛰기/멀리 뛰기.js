function solution(n) {
    let firstNum = 1;
    let secondNum = 1;
    
    for (let i = 2; i <= n; i++) {
        const temp = firstNum + secondNum;
        firstNum = secondNum;
        secondNum = temp % 1234567;
    }
    
    return secondNum;
}