function solution(arr) {
    if (arr.length === 1) return [-1];
    
    let min = arr[0];
    
    for (let num of arr) {
        if (min > num) min = num
    }
    
    return arr.filter((n) => n !== min);
}