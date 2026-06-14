function solution(s) {
    let sArr = s.split("");
    return sArr.map((char, i) => {
        if (sArr.indexOf(char) === i) return -1;
        let temp = sArr.indexOf(char);
        sArr[temp] = 0;
        return i - temp;
    })
}