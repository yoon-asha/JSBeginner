function solution(wallpaper) {
    var answer = [];
    const x_points = [];
    const y_points = [];
    for (let i = 0; i < wallpaper.length; i++) {
        for (let j = 0;  j < wallpaper[i].length; j++){
            if ( wallpaper[i][j] === "#") {
                x_points.push(i)
                y_points.push(j)
            }
        }    
    }
    
    answer = [
        Math.min(...x_points),
        Math.min(...y_points),
        Math.max(...x_points)+1,
        Math.max(...y_points)+1,
    ]

    return answer
}