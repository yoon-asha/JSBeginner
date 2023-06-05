/**
공원 산책
https://school.programmers.co.kr/learn/courses/30/lessons/172928
*/

function solution(park, routes) {
    let strings = park.map((str) => Array.from(str));
    let x = 0;
    let y = 0;

    for (let i = 0; i < strings.length; i++) {
        for (let j = 0; j < strings[0].length; j++) {
            if (strings[i][j] === 'S') {
                x = j;
                y = i;
                break;
            }
        }
    }
    for (let s of routes) {
        let array = s.split(' ');
        let dir = array[0];
        let count = parseInt(array[1]) || 0;

        loop: for (let k = 0; k < count; k++) {
            switch (dir) {
            case 'N':
                if (y <= 0 || strings[y - 1][x] === 'X') {
                    y += k;
                    break loop;
                }
                y -= 1;
                break;
            case 'S':
                if (y >= strings.length - 1 || strings[y + 1][x] === 'X') {
                    y -= k;
                    break loop;
                }
                y += 1;
                break;
            case 'E':
                if (x >= strings[0].length - 1 || strings[y][x + 1] === 'X') {
                    x -= k;
                    break loop;
                }
                x += 1;
                break;
            case 'W':
                if (x <= 0 || strings[y][x - 1] === 'X') {
                    x += k;
                    break loop;
                }
                x -= 1;
                break;
            default:
                break;
            }
        }
    }
    return [y, x];
}
