function solution(s) {
    return s.split(" ").map((arr, _) => {
        return arr.split("").map((alp, i) => {
            return (i % 2 === 0) ? alp.toUpperCase() : alp.toLowerCase()
        }).join("");
    }).join(" ");
}