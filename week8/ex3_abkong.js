/**
이진 변환 반복하기
https://school.programmers.co.kr/learn/courses/30/lessons/70129
*/

function solution(s) {
    var copiedS = s;
    var removedZero = 0;
    var count = 0;
    
    while (copiedS != "1") {
        removedZero += copiedS.replaceAll('1', '').length;
        copiedS = copiedS.replaceAll("0", "").length.toString(2);
        count++;
    }
    return [count, removedZero];
}
