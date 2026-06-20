function solution(brown, yellow) {
    let h = 1;
    while (true) {
        const w = (brown + 4) / 2 - h;
        if (yellow === (w - 2) * (h - 2)) break;
        h++;
    }
    return [(brown + 4) / 2 - h, h];
}

// w, h
// brown = (w + h) * 2 - 4      // (brown + 4) / 2 = w + h
// yellow = (w-2) * (h-2)
