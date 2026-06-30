function solution(n, arr1, arr2) {
    return Array(n).fill("").map((_, i) => {
        let solvedString = "";
        for (let j = 1; j <= n; j++) {
            if (arr1[i] % 2 || arr2[i] % 2) solvedString += "#";
            else solvedString += " ";
            arr1[i] >>= 1;
            arr2[i] >>= 1;
        }
        return solvedString.split("").reverse().join("");
    });
}