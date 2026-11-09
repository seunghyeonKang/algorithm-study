function solution(babbling) {
    let count = 0;
    const possibleWords = [ "aya", "ye", "woo", "ma" ];
    const impossibleWords = [ "ayaaya", "yeye", "woowoo", "mama" ];
    
    for (let i = 0; i < babbling.length; i++) {
        let word = babbling[i];
        for (const possibleWord of possibleWords) {
            word = word.split(possibleWord).join(" ");
        }
        if (word.trim() === "") {
            word = babbling[i];
            let isInclude = false;
            for (const possibleWord of impossibleWords) {
                if (word.includes(possibleWord)) {
                    isInclude = true;
                    break;
                }
            }
            
            if (!isInclude) count++;
        }
    }
    
    return count;
}