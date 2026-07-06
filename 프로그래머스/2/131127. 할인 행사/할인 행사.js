function solution(want, number, discount) {
    const wantNumObj = {};
    for (let i = 0; i < want.length; i++) {
        wantNumObj[want[i]] = number[i];
    }
    // const wantLeng = want.length;
    
    const discountNumObj = {};
    let dayCount = 0; // 모두 할인 받을 수 있는 날짜의 총 일수
    
    discount.forEach((disThing, i) => {
        if (discountNumObj[disThing] || discountNumObj[disThing] === 0) {
            discountNumObj[disThing]++;
        } else { // 객체에 요소가 없을 때
            discountNumObj[disThing] = 1;
        }
        if (i >= 10) {
            discountNumObj[discount[i - 10]]--;
        }
        if (i >= 9) {
            let isMatch = true;
            
            for (const wantThing in wantNumObj) {
                if (!discountNumObj[wantThing] || wantNumObj[wantThing] > discountNumObj[wantThing]) {
                    isMatch = false;
                    break;
                }
            }
            
            if (isMatch) dayCount++;
        }
    })
    
    return dayCount;
}

// 0. want와 number의 객체 'wantNumObj'
// 1. discount를 돌면서 요소 합이 10개짜리 객체 'discountNumObj'
// 2. wantNumObj[i] <= discountNumObj[i]이면 dayCount++;하고 계속 이어하기