/**
기사단원의 무기
https://school.programmers.co.kr/learn/courses/30/lessons/136798
*/

function solution(number, limit, power) {
    var array = Array(number).fill(0);
    var answer = 0;

    for (var i = 0; i < array.length; i++) {
        var mutableI = i;

        while (mutableI < number) {
            array[mutableI]++;
            mutableI += i + 1;
        }
        if (array[i] > limit) {
            array[i] = power;
        }
        if (array[i] != 0) {
            answer += array[i];
        }
    }
    return answer;
}
