function solution(strings, n) {
    let stringsObjs = [];
    for (let i = 0; i < strings.length; i++) {
        stringsObjs.push({
            word: strings[i],
            char: strings[i][n]
        })
    } // [{word: "sun", char: "u"}, {}, ...]
    
    stringsObjs.sort((a, b) => {
        if (a.char.localeCompare(b.char) === 0) return a.word.localeCompare(b.word);
        else return a.char.localeCompare(b.char);
    }); // 정렬
    
    let sortedStrings = [];
    for (let i = 0; i < stringsObjs.length; i++) {
        sortedStrings.push(stringsObjs[i].word)
    }
    return sortedStrings;
}