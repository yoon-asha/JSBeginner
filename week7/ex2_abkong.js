/**
문자열 나누기
https://school.programmers.co.kr/learn/courses/30/lessons/140108
*/

function solution(s) {
    let array = [];
    let sb = "";

    for (let i = 0; i < s.length; i++) {
        let c = s.charAt(i);
        let subString = sb + c;

        if (sb.trim().length != 0 && getGroupingMap(subString)[sb.charAt(0)].length == subString.replaceAll(sb.charAt(0), "").length) {
            sb = "";
            
            array.push(subString);
        } else {
            sb += c;
        }
    }
    return array.length + (sb.length === 0 ? 0 : 1);
}

function getGroupingMap(s) {
    let groupingMap = {};
    
    s.split("").forEach((char) => {
        if (!groupingMap[char]) {
            groupingMap[char] = [];
        }
        groupingMap[char].push(char);
    });
    return groupingMap;
}
