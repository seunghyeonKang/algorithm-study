function solution(n) {
    let answer = n;
    let i = n + 1;
    
    while (answer === n) {
        const numN = n.toString(2).split("").filter((c) => c === "1").length;
        const numI = i.toString(2).split("").filter((c) => c === "1").length;
        if (numN === numI) answer = i;
        i++;
    }
    
    return answer;
}