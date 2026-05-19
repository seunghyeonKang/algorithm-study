function solution(seoul) {
    let x = 0;
    for (let char of seoul) {
        if (char === "Kim") return `김서방은 ${x}에 있다`
        x++;
    }
}