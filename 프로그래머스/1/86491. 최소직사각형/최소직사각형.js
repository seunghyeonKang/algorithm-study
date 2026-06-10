function solution(sizes) {
    let sortedSizes = sizes.map((size) => size.sort((a, b) => a - b));
    
    let { height, width } = sortedSizes.reduce((acc, curr) => {
        let h = acc.height <= curr[0] ? curr[0] : acc.height;
        let w = acc.width <= curr[1] ? curr[1] : acc.width;
        return { height: h, width: w };
    }, { height: 0, width: 0 })
    
    return height * width;
}