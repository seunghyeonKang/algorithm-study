function solution(name, yearning, photo) {
    const photoScoreArr = []; // 결과 점수 배열
    
    photo.forEach((photoNameArr) => { // 사진 한 장의 이름들
        let yearningSum = 0;
        
        photoNameArr.forEach((onePhotoName) => {
            name.forEach((oneYearningName, i) => {
                if (oneYearningName === onePhotoName) yearningSum += yearning[i];
            })
        })
        
        photoScoreArr.push(yearningSum);
    })
    
    return photoScoreArr;
}