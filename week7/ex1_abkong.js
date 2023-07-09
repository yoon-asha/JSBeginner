/**
JadenCase 문자열 만들기
https://school.programmers.co.kr/learn/courses/30/lessons/12951
*/

function solution(s) {
    return s.split(" ").map(s1 => s1.isEmpty ? s1 : s1.substring(0, 1).toUpperCase() + s1.substring(1).toLowerCase()).join(" ");
}
