function solution(answers) {
    const studentArr1 = [1, 2, 3, 4, 5];
    const studentArr2 = [2, 1, 2, 3, 2, 4, 2, 5];
    const studentArr3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
    let countScore1 = 0;
    let countScore2 = 0;
    let countScore3 = 0;
    
    for (let i = 0; i < answers.length; i++) {
        const answer = answers[i];
        if (studentArr1[i % 5] === answer) countScore1++;
        if (studentArr2[i % 8] === answer) countScore2++;
        if (studentArr3[i % 10] === answer) countScore3++;
    }
    
    const maxScore = Math.max(countScore1, countScore2, countScore3);
    const maxStudents = [];
    
    if (countScore1 === maxScore) maxStudents.push(1);
    if (countScore2 === maxScore) maxStudents.push(2);
    if (countScore3 === maxScore) maxStudents.push(3);
    
    return maxStudents;
}