function solution(n_str) {
    let startIdx = 0;
    for (let i = 0; i < n_str.length; i++) {
        if (n_str[i] !== "0") break;
        else startIdx = i + 1;
    }
    return n_str.slice(startIdx);
}