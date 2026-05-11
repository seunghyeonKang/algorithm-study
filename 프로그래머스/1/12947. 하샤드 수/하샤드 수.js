function solution(x) {
    if(x % String(x).split("").reduce((acc,curr) => acc + Number(curr) , 0) === 0) return true;
    return false;
}