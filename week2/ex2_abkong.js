/**
둘만의 암호
https://school.programmers.co.kr/learn/courses/30/lessons/155652
*/

function solution(s, skip, index) {
    let alphabets = getfilteredAlphabets(skip);
    return Array.from(s).map(c => alphabets[alphabets.indexOf(c) + index]).join("");
}

function getfilteredAlphabets(skip) {
    var alphabet = "abcdefghijklmnopqrstuvwxyz";

    for (let c of skip) {
        alphabet = alphabet.replace(c, "");
    }
    return alphabet + alphabet + alphabet;
}
