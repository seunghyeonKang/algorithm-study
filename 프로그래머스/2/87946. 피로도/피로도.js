function solution(k, dungeons) {
    let maxCount = 0;
    const countValidDungeons = (arr, accK, accD) => {
        // arr: 돌아야하는 배열, accK: 피로도 누적값, accD: 던전 개수 누적값
        maxCount = Math.max(maxCount, accD);
        
        for (let i = 0; i < arr.length; i++) {
            if (accK >= arr[i][0]) {
                countValidDungeons([...arr.slice(0, i), ...arr.slice(i + 1)], accK - arr[i][1], accD + 1);
            }
        }
    }
    
    countValidDungeons([...dungeons], k, 0);
    return maxCount;
}