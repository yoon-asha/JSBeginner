function solution(park, routes) {

    const W = park[0].length;
    const H = park.length;
    
    let obstacles = new Set();

    var x, y;
    for (let i = 0; i < H; i++) {
        for (let j = 0; j < W; j++) {
            let symbol = park[i][j];
            if (symbol === "S") {
                [x, y] = [i, j]
            } else if (symbol === "X") {
                obstacles.add(JSON.stringify([i, j]));
            }
        }
    }

    for (let i = -1; i <= H; i++) {
        obstacles.add(JSON.stringify([i, -1]));
        obstacles.add(JSON.stringify([i, W]));
    }

    for (let j = -1; j <= W; j++) {
        obstacles.add(JSON.stringify([-1, j]));
        obstacles.add(JSON.stringify([H, j]));
    }

    const move = {
        "E": [0, 1],
        "W": [0, -1],
        "N": [-1, 0],
        "S": [1, 0],
    };

    for (let route of routes) {
        let [x_, y_] = [x, y];
        let [direction, step] = route.split(" ");
        let [dx, dy] = move[direction];
        
        for (let i = 0; i < parseInt(step); i++) {
            x_ += dx;
            y_ += dy;
            if (obstacles.has(JSON.stringify([x_, y_]))) {
                [x_, y_] = [x, y];
                break;
            }
        }
        [x, y] = [x_, y_];
    }
    return [x, y];
}