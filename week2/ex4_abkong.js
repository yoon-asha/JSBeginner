/**
덧칠하기
https://school.programmers.co.kr/learn/courses/30/lessons/161989
*/

function solution(n, m, section) {
    let answer = 0;
    let wall = initializeWall(n, section);

    while (wall.includes(1)) {
        answer++;
        if (answer % 2 !== 0) {
            let index = wall.indexOf(1);

            for (let i = index; i < index + m; i++) {
                wall[i] = 0;

                if (i >= n - 1) {
                    break;
                }
            }
        } else {
            let index = wall.lastIndexOf(1);

            for (let j = index; j > index - m; j--) {
                wall[j] = 0;

                if (j < 1) {
                    break;
                }
            }
        }
    }
    return answer;
}

function initializeWall(n, section) {
    let array = Array(n).fill(0);

    for (let i of section) {
        array[i - 1] = 1;
    }
    return array;
}
