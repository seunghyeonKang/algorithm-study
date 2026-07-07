function solution(nums) {
    let monSet = new Set(nums);
    return nums.length / 2 > monSet.size ? monSet.size : nums.length / 2;
}