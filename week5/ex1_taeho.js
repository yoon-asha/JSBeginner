function solution(survey, choices) {

    let pointRCJA = [0,0,0,0];
    for (let i=0; i< survey.length; ++i) {
        const point = choices[i] - 4;
        if (["R","C","J","A"].includes(survey[i][0])){
            index = ["R","C","J","A"].indexOf(survey[i][0]);
            pointRCJA[index] -= point;
        } else {
            index = ["R","C","J","A"].indexOf(survey[i][1]);
            pointRCJA[index] += point;
        }       
    }
    console.log(pointRCJA);
    
    let answer = pointRCJA[0]>=0? "R":"T" 
    answer += pointRCJA[1]>=0? "C":"F"
    answer += pointRCJA[2]>=0? "J":"M"
    answer += pointRCJA[3]>=0? "A":"N"
    return answer

    
    
}