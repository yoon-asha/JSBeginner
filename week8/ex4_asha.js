// function solution(maps) {
//   const n = maps.length - 1
//   const m = maps[0].length - 1

//   const queue = []
//   queue.push([0, 0, 1])

//   while (queue.length) {
//     const [x, y, answer] = queue.shift()

//     if (x < 0 || x >= n + 1 || y < 0 || y >= m + 1) continue
//     if (maps[x][y] === 0) continue

//     if (x === n && y === m) {
//       return answer
//     }

//     maps[x][y] = 0

//     queue.push([x + 1, y, answer + 1])
//     queue.push([x - 1, y, answer + 1])
//     queue.push([x, y + 1, answer + 1])
//     queue.push([x, y - 1, answer + 1])
//   }
//   return -1
// }

function solution(maps) {
  const dx = [-1, 1, 0, 0]
  const dy = [0, 0, -1, 1] // 상 하 좌 우

  const n = maps.length - 1 // 세로
  const m = maps[0].length - 1 // 가로

  const queue = []
  queue.push([0, 0, 1]) // 세로 가로

  while (queue.length) {
    const [x, y, answer] = queue.shift()

    if (x === n && y === m) {
      return answer
    }

    for (let i = 0; i < 4; i++) {
      const nx = x + dx[i]
      const ny = y + dy[i]

      if (nx < 0 || nx >= n + 1 || ny < 0 || ny >= m + 1) continue
      if (maps[nx][ny] === 0) continue

      if (nx >= 0 && nx <= n && ny >= 0 && ny <= m && maps[nx][ny] === 1) {
        maps[nx][ny] = 0
        queue.push([nx, ny, answer + 1])
      }
      console.log(answer, queue, nx, ny, n, m)
    }
  }
  return -1
}
