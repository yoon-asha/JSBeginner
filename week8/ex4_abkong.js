/**
게임 맵 최단거리
https://school.programmers.co.kr/learn/courses/30/lessons/1844
*/

function solution(maps) {
    const array = initArray(maps);
    const queue = [[1, 1, 1]]

    while (queue.length > 0) {
        const [x, y, level] = queue.shift();
        array[x][y] = 2;

        if (x == maps.length && y == maps[0].length) return level;
        for (let [nextX, nextY] of [[x - 1, y], [x, y + 1], [x + 1, y], [x, y - 1]]) {
            if (array[nextX][nextY] === 1) {
                array[nextX][nextY] = 2;

                queue.push([nextX, nextY, level + 1]);
            }
        }
    }
    return -1;
}

function initArray(maps) {
    const array = new Array(maps.length + 2).fill(0).map(() => new Array(maps[0].length + 2).fill(0));

    for (let i = 1; i <= maps.length; i++) {
        for (let j = 1; j <= maps[0].length; j++) {
            array[i][j] = maps[i - 1][j - 1]
        }
    }
    return array;
}
