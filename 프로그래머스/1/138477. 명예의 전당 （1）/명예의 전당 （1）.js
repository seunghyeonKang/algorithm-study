function solution(k, score) {
    let tops = []; // 명예의 전당 k명의 배열
    let lastTops = []; // 최하위 점수의 기록 배열
    
    for (let num of score) {
        if (tops.length < k) {
            tops.push(num);
            tops.sort((a, b) => b - a);
            lastTops.push(tops[tops.length - 1]);
        } else if (tops[k - 1] < num) {
            tops[k - 1] = num;
            tops.sort((a, b) => b - a);
            lastTops.push(tops[k - 1]);
        } else {
            lastTops.push(tops[k - 1]);
        }
    }
    
    return lastTops;
}