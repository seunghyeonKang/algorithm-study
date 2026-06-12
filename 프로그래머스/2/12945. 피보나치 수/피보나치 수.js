function solution(n) {
    let funcArr = [0, 1];
    for (let i = 2; i <= n; i++) {
        funcArr.push((funcArr[i-1] + funcArr[i-2]) % 1234567);
    }
    return funcArr[n] % 1234567;
}