function solution(food) {
    const foodList = []; // 각 음식별 배치 개수
    
    for (let i = 1; i < food.length; i++) {
        foodList[i - 1] = Math.floor(food[i] / 2);
    }
    
    const answerList = []; // 배치된 음식 배열
    for (let i = 0; i < foodList.length; i++) {
        for (let j = 0; j < foodList[i]; j++) {
            answerList.push(i + 1);
        }
    }
    const leftString = answerList.join("");
    const rightString = answerList.reverse().join("");
    
    return `${leftString}0${rightString}`;
}