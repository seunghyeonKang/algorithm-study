function solution(n, words) {
    const leng = words.length;
    let wrongTurn = 0;
    
    for (let i = 0; i < leng - 1; i++) {
        const wordsSliced = words.slice(0, i + 1);
        let isMatch = wordsSliced.reduce((acc, curr) => words[i + 1] === curr ? 1 : acc, 0);
        
        if (words[i][words[i].length - 1] !== words[i + 1][0] || isMatch) {
            wrongTurn = i + 2;
            break;
        }
    }
    
    if (wrongTurn === 0) return [0, 0];
    else return [wrongTurn % n ? wrongTurn % n : n, Math.ceil(wrongTurn / n)]
}