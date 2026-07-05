function solution(n,a,b)
{
    let round = 1;
    let aNum = a;
    let bNum = b;
    
    while (2 ** round <= n) {
        aNum = Math.ceil(aNum / 2);
        bNum = Math.ceil(bNum / 2);
        if (aNum === bNum) return round;
        round++;
    }
    
    return "exception";
}