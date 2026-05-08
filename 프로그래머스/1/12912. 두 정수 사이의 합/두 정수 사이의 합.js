function solution(a, b) {
    let array = [];
    
    
    if (a === b) {
        array.push(a);
    } else if (a < b) {
        for (let i = a; i <= b; i++) {
            array.push(i);
        }
    } else if (a > b) {
        for (let i = b; i <= a; i++) {
            array.push(i);
        }
    }
    
    return array.reduce((arr, curr) => arr + curr, 0);
}