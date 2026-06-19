function solution(s) {
    const alpStack = [];
    
    for (let i = 0; i < s.length; i++) {
        const temp = alpStack.pop();
        if (temp === undefined) {
            alpStack.push(s[i]);
        } else if (temp !== s[i]) {
            alpStack.push(temp);
            alpStack.push(s[i]);
        }
    }
    
    if (alpStack.length === 0) return 1;
    else return 0;
}