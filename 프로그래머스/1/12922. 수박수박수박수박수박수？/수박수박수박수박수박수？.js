function solution(n) {
    let arr = [];
    
    for (let i = 0; i < n; i++) {
        arr.push(i % 2 === 0 ? "수" : "박");
    }
    
    return arr.reduce((arr,curr) => arr + curr, "");
}