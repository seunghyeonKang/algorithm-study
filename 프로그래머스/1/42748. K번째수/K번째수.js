function solution(array, commands) {
    let answer = [];
    
    for (let command of commands) {
        const sortedArray = array.slice(command[0] - 1, command[1]).sort((a, b) => a - b);
        answer.push(sortedArray[command[2] - 1]);
    }
    
    return answer;
}