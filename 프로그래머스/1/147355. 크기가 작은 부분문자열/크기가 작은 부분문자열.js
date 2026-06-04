function solution(t, p) {
    let answer = 0;
    const pNum = Number(p);
    for (let i = 0; i < t.length - p.length + 1; i++) {
        if (pNum >= Number(t.slice(i, i + p.length))) answer++;
    }
    return answer;
}