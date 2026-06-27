function solution(people, limit) {
    people.sort((a, b) => b - a);
    let answer = 0;
    let a = 0;
    let b = people.length - 1;
    
    while (a <= b) {
        if (people[a] + people[b] <= limit) {
            a++;
            b--;
        } else a++;
        answer++;
    }
    
    return answer;
}