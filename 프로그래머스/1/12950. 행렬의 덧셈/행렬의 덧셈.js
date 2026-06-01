function solution(arr1, arr2) {
    let answer = [[]];
    answer = arr1.map((hang, i) => {
        let temp = [];
        for (let a = 0; a < hang.length; a++) {
            temp.push(hang[a] + arr2[i][a]);
        }
        return temp;
    })
    return answer;
}