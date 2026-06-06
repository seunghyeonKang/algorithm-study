function solution(s) {
    let numZero = 0;
    let funNum = 0;
    
    const ParseArr = (arr) => {
        let len = arr.split("").filter((n) => n === "1").length;
        numZero += s.length - len;
        funNum++;
        return len.toString(2);
    }
    
    while (s !== "1") {
        s = ParseArr(s);
        console.log(s);
    }
    
    return [funNum, numZero];
}