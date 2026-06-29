function solution(arr) {
    let numList = [...arr].sort((a, b) => b - a);
    let max = numList[0];
    
    let answer = 0;
    let i = 1;
    while (answer === 0) {
        for (let j = 1; j < numList.length ; j++) {
            if (max * i % numList[j] !== 0) break;
            if (j === numList.length - 1) answer = max * i;
        }
        i++;
    }
    
    return answer;
}