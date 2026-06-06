function solution(n, m) {
    let max = Math.max(n, m);
    let min = Math.min(n, m);
    let a;
    for (let i = min; i > 0; i--) {
        if (max % i === 0 && min % i === 0) {
            a = i;
            break;
        }
    }
    let answer = [];
    answer.push(a);
    answer.push(max * min / a);
    return answer;
}