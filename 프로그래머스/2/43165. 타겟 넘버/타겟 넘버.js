function solution(numbers, target) {
    let count = 0;
    
    const checkValidCalculation = (idx, acc) => {
        // idx: 현재 배열의 인덱스, acc: 누적값
        
        // 탈출 조건
        // 현재_인덱스가 numbers의 길이까지 채우면 빠져나오기
        // 누적값이 0이면 count ++
        if (idx >= numbers.length) {
            if (acc === 0) count++;
            return 0;
        }
        
        // 갈림길
        // 다음 인덱스를 +하는 함수 호출
        checkValidCalculation(idx + 1, acc + numbers[idx]);
        // 다음 인덱스를 -하는 함수 호출
        checkValidCalculation(idx + 1, acc - numbers[idx]);
    }
    
    checkValidCalculation(0, target);
    return count;
}