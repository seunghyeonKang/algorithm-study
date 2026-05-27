function solution(s){
    let i = 0;
    for (let char of s) {
        if (i < 0) return false;
        char === "(" ? i++ : i--
    }

    return i === 0 ? true : false;
}