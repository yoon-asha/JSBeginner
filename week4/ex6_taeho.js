function solution(X, Y) {

    const countBoth = {};
    
    for (let i = 0; i < 10; i++) {
        const countX= X.split(String(i)).length - 1;
        const countY = Y.split(String(i)).length - 1;
        countBoth[i] = Math.min(countX, countY);
    }
    
    let answer = "";
    for (let i = 9; i >= 0; i--) {
        answer += String(i).repeat(countBoth[i]);
    }
    
    if (answer === "") {
        answer = "-1";
    }
    if (answer[0] === "0") {
        answer = "0";
    }
    return answer;
}