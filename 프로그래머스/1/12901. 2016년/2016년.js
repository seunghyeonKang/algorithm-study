function solution(a, b) {
    // const monthDays = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    // let accDays = 0;
    // let monthAccDays = {};
    // for (let i = 0; i < 12; i++) {
    //     monthAccDays[i + 1] = accDays;
    //     accDays += monthDays[i];
    // }
    
    const monthAccDays = {
        "1":0,"2":31,"3":60,"4":91,"5":121,"6":152,"7":182,"8":213,"9":244,"10":274,"11":305,"12":335
    };
    const weekDays = {
        1:"FRI",2:"SAT",3:"SUN",4:"MON",5:"TUE",6:"WED",0:"THU"
    };
    
    return weekDays[(monthAccDays[a] + b) % 7];
}