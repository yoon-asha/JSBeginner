/**
성격 유형 검사하기
https://school.programmers.co.kr/learn/courses/30/lessons/118666
*/

const indicators = ["RT", "CF", "JM", "AN"];

function solution(survey, choices) {
    let scores = getScores(survey, choices);
    let answer = "";

    for (let indicator of indicators) {
        let firstScore = scores[indicator[0]] || 0;
        let secondScore = scores[indicator[1]] || 0;
        answer += firstScore >= secondScore ? indicator[0] : indicator[1];
    }
    return answer;
}

function getScores(survey, choices) {
    let scores = {};
  
    for (let i = 0; i < survey.length; i++) {
        let n = choices[i];
        let indicator = n < 4 ? survey[i][0] : survey[i][survey[i].length - 1];
        let score = n < 4 ? 4 - (n % 4) : n % 4;
    
        if (scores[indicator]) {
            scores[indicator] += score;
        } else {
            scores[indicator] = score;
        }
    }
    return scores;
}
