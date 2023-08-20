/**
할인 행사
https://school.programmers.co.kr/learn/courses/30/lessons/131127
*/

function solution(want, number, discount) {
    let answer = 0;
    let wantList = getWantList(want, number);

    for (let i = 0; i < discount.length - wantList.length + 1; i++) {
        let newList = discount.slice(i, i + wantList.length);

        newList.sort();
        if (compareList(newList, wantList)) {
            answer++;
        }
    }
    return answer;
}

function getWantList(want, number) {
    let list = [];

    for (let i = 0; i < number.length; i++) {
        for (let j = 0; j < number[i]; j++) {
            list.push(want[i]);
        }
    }
    list.sort();
    return list;
}

function compareList(l1, l2) {
    let result = true;

    for (let i = 0; i < l1.length; i++) {
        if (l1[i] !== l2[i]) {
            result = false;
            break;
        }
    }
    return result;
}
