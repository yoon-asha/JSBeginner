/**
크기가 작은 부분 문자열
https://school.programmers.co.kr/learn/courses/30/lessons/147355
*/

function solution(t, p) {
    return Array.from(Array(t.length - p.length + 1))
        .map((_, index) => parseInt(t.substring(index, index + p.length)) || 0)
        .filter(number => parseInt(p) >= number)
        .length;
}
