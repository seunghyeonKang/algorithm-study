function solution(n, computers) {
    let countNetwork = 0;
    const isCheckedComputers = new Array(n).fill(false);
    
    const checkNetwork = (currentIdx) => {
        isCheckedComputers[currentIdx] = true;
        
        for (let connectedIdx = 0; connectedIdx < n; connectedIdx++) {
            if (computers[currentIdx][connectedIdx] === 1
                && currentIdx !== connectedIdx
                && !isCheckedComputers[connectedIdx]) {
                checkNetwork(connectedIdx);
            }
        }
    }
    
    for (let i = 0; i < n; i++) {
        if (!isCheckedComputers[i]) {
            countNetwork++;
            checkNetwork(i);
        }
    }
    return countNetwork;
}