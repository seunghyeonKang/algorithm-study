function solution(arr) {
    return arr.filter((num, i) => i === 0 || arr[i] !== arr[i - 1]);
}