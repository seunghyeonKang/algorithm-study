function solution(s) {
    let numArr = [];
    let temp = s;
    
    while (temp !== "") {
        if (Number(temp[0]) >= 0) { // 숫자인 경우
            numArr.push(temp[0]);
            temp = temp.slice(1);
        } else if (temp[0] === "z") {
            numArr.push("0");
            temp = temp.slice(4);
        } else if (temp[0] === "o") {
            numArr.push("1");
            temp = temp.slice(3);
        } else if (temp[0] === "t") {
            if (temp[1] === "w") {
                numArr.push("2");
                temp = temp.slice(3);
            } else {
                numArr.push("3");
                temp = temp.slice(5);
            }
        } else if (temp[0] === "f") {
            if (temp[1] === "o") {
                numArr.push("4");
                temp = temp.slice(4);
            } else {
                numArr.push("5");
                temp = temp.slice(4);
            }
        } else if (temp[0] === "s") {
            if (temp[1] === "i") {
                numArr.push("6");
                temp = temp.slice(3);
            } else {
                numArr.push("7");
                temp = temp.slice(5);
            }
        } else if (temp[0] === "e") {
            numArr.push("8");
            temp = temp.slice(5);
        } else {
            numArr.push("9");
            temp = temp.slice(4);
        }
    }
    
    return Number(numArr.join(""));
}