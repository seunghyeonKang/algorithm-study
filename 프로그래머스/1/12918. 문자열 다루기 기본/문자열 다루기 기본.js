function solution(s) {
    // return (s.length === 4 || s.length === 6) && Number(s) >= 0;
    
    let arr = s.split("");
    if (arr.length !== 4 && arr.length !== 6) return false;
    for (let char of arr) {
        let isNum = false;
        for (let num of ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]) {
            if (char === num) isNum = true;
        }
        if (isNum === false) return false;
    }
    return true;
}