function solution(s) {
    const twiceStrArr = [...s, ...s];
    const openSymbol = new Set(['(', '[', '{']);
    const changeSymbolToOpen = { ')': '(', ']': '[', '}': '{' };
    
    let symbolStack = [];
    let checkStrLength = 0; // 문자열 길이
    let countCorrectStr = 0; // '올바른 괄호 문자열'의 총 개수
    
    for (let i = 0; i < twiceStrArr.length - 1; i++) {
        const currChar = twiceStrArr[i];
        const popChar = symbolStack.pop();
        
        if (openSymbol.has(currChar)) { // 괄호가 열리면 +1
            popChar && symbolStack.push(popChar);
            symbolStack.push(currChar);
            checkStrLength++;
        } else if (popChar === changeSymbolToOpen[currChar]) { // 괄호가 닫히면 -1
            checkStrLength++;
            
            // '올바른 괄호 문자열'의 개수 세기
            symbolStack.length === 0 && countCorrectStr++;
        } else { // 문자열이 올바르지 않다면 초기화
            symbolStack = [];
            checkStrLength = 0;
            countCorrectStr = 0;
        }
        
        if (checkStrLength === s.length) return countCorrectStr; // 문자열 수만큼 돌면 반환
    }
    
    return 0;
}