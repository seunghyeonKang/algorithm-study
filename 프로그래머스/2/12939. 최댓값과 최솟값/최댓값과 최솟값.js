function solution(s) {
    let arr = s.split(" ");
    let min = Math.min(...arr);
    let max = Math.max(...arr);
    return `${min} ${max}`;
}