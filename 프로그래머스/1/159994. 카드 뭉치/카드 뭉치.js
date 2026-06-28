function solution(cards1, cards2, goal) {
    let temp1 = 0;
    let temp2 = 0;
    
    for (let i = 0; i < goal.length; i++) {
        if (goal[i] === cards1[temp1]) temp1++;
        else if (goal[i] === cards2[temp2]) temp2++;
        else return "No";
    }
    return "Yes";
}