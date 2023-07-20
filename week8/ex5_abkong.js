/**
모의고사
https://school.programmers.co.kr/learn/courses/30/lessons/42840
*/

function solution(answers) {
    var answer = [];
    var soopojaSubmits = [[1, 2, 3, 4, 5], [2, 1, 2, 3, 2, 4, 2, 5], [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]];
    var soopojaAnswers = [0, 0, 0];
    
    for (let i in answers) 
        for (let j in soopojaSubmits) 
            if (answers[i] == soopojaSubmits[j][i % soopojaSubmits[j].length]) soopojaAnswers[j]++;
    for (let k in soopojaAnswers) 
        if (soopojaAnswers[k] == Math.max(...soopojaAnswers)) answer.push(parseInt(k) + 1);
    return answer;
}
