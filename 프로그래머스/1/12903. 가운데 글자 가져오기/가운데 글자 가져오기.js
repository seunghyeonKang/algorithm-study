function solution(s) {
    const l = s.length;
    return (l % 2 === 0 ? s[l / 2 - 1] + s[l / 2] : s[(l - 1) / 2]);
}