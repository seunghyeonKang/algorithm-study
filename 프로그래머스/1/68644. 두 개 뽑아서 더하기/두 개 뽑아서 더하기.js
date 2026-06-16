function solution(numbers) {
    numbers.sort((a, b) => a - b);
    
    const sumArr = [];
    for (let i = 0; i < numbers.length - 1; i++) {
        for (let j = i + 1; j < numbers.length; j++) {
            sumArr.push(numbers[i] + numbers[j]);
        }
    }
    sumArr.sort((a, b) => a - b);
    
    const answer = [];
    let temp = -1;
    for (let char of sumArr) {
        if (char !== temp) answer.push(char);
        temp = char;
    }
    return answer;
}