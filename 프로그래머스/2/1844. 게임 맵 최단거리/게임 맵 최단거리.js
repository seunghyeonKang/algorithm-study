function solution(maps) {
    const n = maps[0].length;
    const m = maps.length;
    const isValidMap = structuredClone(maps); // 갈 수 있는 곳은 1
    let currentLocations = [[0, 0]];
    
    const bfs = (stepCount) => {
        const nextLoactions = [];
        
        // 동서남북 갈림길
        for (let i = 0; i < currentLocations.length; i++) {
            const [x, y] = currentLocations[i];
            
            // 탈출 조건
            // (n, m)에 도착했을 때
            if (x === n - 1 && y === m - 1) return stepCount;
            
            // isValidMap가 1이어야 갈 수 있음
            // 지나면 0으로 수정
            const ways = ["right", "left", "down", "up"];
            for (const way of ways) {
                if (way === "right") {
                    if (x + 1 < n && isValidMap[y][x + 1]) {
                        nextLoactions.push([x + 1, y]);
                        isValidMap[y][x + 1] = 0;
                    }
                } else if (way === "left") {
                    if (x - 1 >= 0 && isValidMap[y][x - 1]) {
                        nextLoactions.push([x - 1, y]);
                        isValidMap[y][x - 1] = 0;
                    }
                } else if (way === "down") {
                    if (y + 1 < m && isValidMap[y + 1][x]) {
                        nextLoactions.push([x, y + 1]);
                        isValidMap[y + 1][x] = 0;
                    }
                } else if (way === "up") {
                    if (y - 1 >= 0 && isValidMap[y - 1][x]) {
                        nextLoactions.push([x, y - 1]);
                        isValidMap[y - 1][x] = 0;
                    }
                }
            }
        }
        if (nextLoactions.length === 0) {
            return -1;
        } else {
            currentLocations = [...nextLoactions];
            return bfs(stepCount + 1);
        }
    }
    
    return bfs(1);
}