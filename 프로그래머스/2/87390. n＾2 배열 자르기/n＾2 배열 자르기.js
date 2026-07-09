function solution(n, left, right) {
    let answer = [];
    
    for (let i = left; i <= right; i++) {
        let row = i % n + 1;
        let hang = Math.floor(i / n) + 1;
        answer.push(hang > row ? hang : row);
    }
    
    return answer;
}

// 1 2 3 4 5 6  // i/n < 1
// 2 2 3 4 5 6  // 1 <= i/n < 2
// 3 3 3 4 5 6  // 2 <= i/n < 3
// 4 4 4 4 5 6
// 5 5 5 5 5 6
// 6 6 6 6 6 6