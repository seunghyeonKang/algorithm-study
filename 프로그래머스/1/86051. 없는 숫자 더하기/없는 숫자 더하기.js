function solution(numbers) {
    const total = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].reduce((acc, curr) => acc + curr, 0);
    
    return total - numbers.reduce((acc, curr) => acc + curr, 0);
}