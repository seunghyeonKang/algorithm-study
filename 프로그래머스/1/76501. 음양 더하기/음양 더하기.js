function solution(absolutes, signs) {
    for (let i in absolutes) {
        if (signs[i] === false) absolutes[i] = -absolutes[i];
    }
    
    return absolutes.reduce((acc, curr) => acc + curr);
}