function solution(phone_number) {
    let forNum = "";
    let lastNum = "";
    for (let i = 0; i < phone_number.length - 4; i ++) {
        forNum += "*";
    }
    for (let i = phone_number.length - 4; i < phone_number.length; i++) {
        lastNum += phone_number[i];
    }
    return forNum + lastNum;
}