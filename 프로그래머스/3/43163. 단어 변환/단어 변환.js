function solution(begin, target, words) {
    const isVisitedWord = Array(words.length).fill(false);
    let currWords = [begin];
    let count = 0;
    
    while (currWords.length !== 0) {
        const nextWords = [];
        
        for (let j = 0; j < currWords.length; j++) {
            if (currWords[j] === target) return count;
            
            for (let i = 0; i < words.length; i++) {
                let differentCharCount = 0;
                for (let k = 0; k < begin.length; k++) {
                    if (words[i][k] !== currWords[j][k]) differentCharCount++;
                }
                if (differentCharCount === 1 && !isVisitedWord[i]) {
                    nextWords.push(words[i]);
                    isVisitedWord[i] = true;
                }
            }
        }
        
        currWords = nextWords;
        count++;
    }
    
    return 0;
}