function solution(park, routes) {
  let start = []

  for (let i = 0; i < park.length; i++) {
    for (let j = 0; j < park[0].length; j++) {
      if (park[i][j] === 'S') start = [i, j]
    }
  }
  const dr = {
    N: [-1, 0],
    S: [1, 0],
    W: [0, -1],
    E: [0, 1],
  }
  for (let k of routes) {
    const op = k.split(' ')[0]
    const n = Number(k.split(' ')[1])

    let [nx, ny] = start
    let cnt = 0

    while (cnt < n) {
      nx += dr[op][0]
      ny += dr[op][1]

      if (
        nx < 0 ||
        ny < 0 ||
        park.length <= nx ||
        park[0].length <= ny ||
        park[nx][ny] === 'X'
      )
        break
      cnt++
    }
    if (cnt === n) start = [nx, ny]
  }

  return start
}
