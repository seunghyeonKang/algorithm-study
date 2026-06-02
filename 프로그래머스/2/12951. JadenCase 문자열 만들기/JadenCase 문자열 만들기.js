function solution(s) {
    return s.split(" ").map((word, i) => {
        let charArr = word.split("");
        return charArr.map((char, i) => {
            if (i === 0) {
                return char.toUpperCase();
            } else {
                return char.toLowerCase();
            }
        }).join("");
    }).join(" ");
}