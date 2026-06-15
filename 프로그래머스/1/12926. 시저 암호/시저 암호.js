function solution(s, n) {
    const bigAlp = [ "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z" ];
    const smallAlp = [ "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z" ];
    let sArr = s.split("");
    
    return sArr.map((char) => {
        if (char === " ") return " ";
        let alpIndex = bigAlp.indexOf(char);
        if (alpIndex !== -1) {
            return bigAlp[(alpIndex + n) < 26 ? alpIndex + n : alpIndex + n - 26];
        } else {
            alpIndex = smallAlp.indexOf(char);
            console.log(alpIndex);
            return smallAlp[(alpIndex + n) < 26 ? alpIndex + n : alpIndex + n - 26];
        }
    }).join("");
}