function solution(n)
{
    var answer = 0;
    
    for (let i = 0; i < 9; i++) {
        answer += (n % (10 ** (i + 1)) - n % (10 ** i)) / (10 ** i);
    }

    return answer;
}