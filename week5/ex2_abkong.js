/**
명예의 전당 (1)
https://school.programmers.co.kr/learn/courses/30/lessons/138477
*/

function solution(k, score) {
    return score.map((_, idx) => score.slice(0, idx + 1).reduce((acc, i) => [...acc, i].sort((a, b) => b - a).slice(0, k), []).pop());
}
