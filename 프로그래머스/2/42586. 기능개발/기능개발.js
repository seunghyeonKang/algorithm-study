function solution(progresses, speeds) {
    // Math.ceil((100 - 각 진행도) / 스피드)일 뒤 개발 완료
    const completeDays = progresses.map((percent, i) => Math.ceil((100 - percent) / speeds[i]));
    
    let oneRelease = [];
    const answer = [];
    
    for (const completeDay of completeDays) {
        if (oneRelease.length !== 0) {
            if (oneRelease[0] >= completeDay) {
                oneRelease.push(completeDay);
            } else {
                answer.push(oneRelease.length);
                oneRelease = [completeDay];
            }
        } else {
            oneRelease.push(completeDay);
        }
    }
    answer.push(oneRelease.length);
    
    return answer;
}
