function solution(n) {
  const answer = new Array(n).fill().map((v, i) => new Array(i + 1))
  let [cnt, x, y] = [1, -1, 0]

  for (let i = 0; i < n; i++) {
    for (let j = i; j < n; j++) {
      if (i % 3 === 0) {
        // console.log('i % 3 === 0 ', i)
        x += 1
      } else if (i % 3 === 1) {
        // console.log('i % 3 === 1 ', i)
        y += 1
      } else {
        // console.log('else ', i, j)
        x -= 1
        y -= 1
      }
      answer[x][y] = cnt++
      // console.log(x, y, ' cnt =', cnt, answer)
    }
  }
  return answer.flatMap((v) => v)
}

/* 깔끔해서 신기했던 정답
function solution(n) {
  const answer = new Array(n).fill().map((v, i) => new Array(i + 1))

  let cnt = 0
  let x = -1
  let y = 0

  while (n > 0) {
    for (let i = 0; i < n; i++) answer[++x][y] = ++cnt
    for (let i = 0; i < n - 1; i++) answer[x][++y] = ++cnt
    for (let i = 0; i < n - 2; i++) answer[--x][--y] = ++cnt
    console.log(answer)

    n -= 3
  }
  return answer.flatMap((e) => e)
}
*/
