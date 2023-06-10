function solution(k, m, score) {
    var answer = 0;
    
    score.sort();
    for (let i = score.length - m; i >= score.length % m; i -= m) {
        answer += score[i] * m;
    }
    return answer;
}
