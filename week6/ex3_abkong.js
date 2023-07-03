/**
개인정보 수집 유효기간
https://school.programmers.co.kr/learn/courses/30/lessons/150370
*/

function solution(today, terms, privacies) {
    var answer = [];
    var termDick = {};
    var date = getDate(today);

    for (var i = 0; i < terms.length; i++) {
        var term = terms[i].split(" ");
        termDick[term[0]] = parseInt(term[1]);
    }
    for (var i = 0; i < privacies.length; i++) {
        var privacy = privacies[i].split(" ");
        
        if (getDate(privacy[0]) + (termDick[privacy[1]] || 0) * 28 <= date) {
            answer.push(i + 1);
        }
    }
    return answer;
}

function getDate(today) {
    var date = today.split(".");
    var year = parseInt(date[0]) || 0;
    var month = parseInt(date[1]) || 0;
    var day = parseInt(date[2]) || 0;
    return year * 12 * 28 + month * 28 + day;
}
