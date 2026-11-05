function solution(nums) {
    const sumArr = [];
    
    for (let i = 0; i < nums.length - 2; i++) {
        for (let j = i + 1; j < nums.length - 1; j++) {
            for (let k = j + 1; k < nums.length; k++) {
                sumArr.push(nums[i] + nums[j] + nums[k]);
            }
        }
    }
    
    let count = 0;
    for (const n of sumArr) {
        let isPrime = true;
        for (let i = 2; i <= Math.sqrt(n); i++) {
            if (n % i === 0) isPrime = false;
        }
        if (isPrime) count++;
    }
    
    return count;
}