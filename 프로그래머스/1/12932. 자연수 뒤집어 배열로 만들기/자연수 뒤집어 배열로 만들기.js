function solution(n) {
    let str = n + "";
    let answer = [];
    
    for (let i = 0; i < str.length; i++) {
        answer[i] = Math.floor(str[str.length - i - 1]);
    }
    
    return answer;
}