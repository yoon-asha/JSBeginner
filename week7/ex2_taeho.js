function solution(s) {
    const start = s[0];
    let countSame = 0;
    let countDiff = 0;
    for (let i = 0; i < s.length; i++){
        if (s[i] === start){
            countSame++;
        } else {
            countDiff++;
        }
        if (countSame === countDiff){
            if (i < s.length - 1){
                return 1 + solution(s.slice(i+1));
            } else {
                return 1;
            }
        }
    }
    return 1;
}