function solution(word) {
    let wordsArray = [];
    const alp = ["A", "E", "I", "O", "U"];
    
    const pushWords = (str) => {
        // 단어 추가
        if (str.length >= 1 && str.length <= 5) wordsArray.push(str);
        
        // 단어 길이가 4 이하 -> 그 단어에 5개 단어를 추가한 함수 호출
        if (str.length <= 4) {
            for (let i = 0; i < 5; i++) {
                pushWords(str + alp[i]);
            }
        }
    }
    
    pushWords("");
    
    return wordsArray.sort().indexOf(word) + 1;
}