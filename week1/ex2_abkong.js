/**
바탕화며 정리
https://school.programmers.co.kr/learn/courses/30/lessons/161990
*/

function solution(wallpaper) {
    var minX = wallpaper.length;
    var minY = wallpaper[0].length;
    var maxX = 0;
    var maxY = 0;

    for (let i in wallpaper) {
        for (let j in wallpaper[i]) {
            if (wallpaper[i][j] == "#") {
                minX = Math.min(i, minX);
                minY = Math.min(j, minY);
                maxX = Math.max(i, maxX);
                maxY = Math.max(j, maxY);
            }
        }
    }
    return [minX, minY, maxX + 1, maxY + 1];
}
