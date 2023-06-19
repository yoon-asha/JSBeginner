function solution(board) {
  let [o, x] = [0, 0]
  let [owin, xwin] = [false, false]
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board.length; j++) {
      console.log('i j  ', i, j, board[i][j])
      if (board[i][j] === 'O') {
        owin = bingo(i, j, board)
        o++
      }
      if (board[i][j] === 'X') {
        xwin = bingo(i, j, board)
        x++
      }
    }
  }

  console.log('check', o, x, owin, xwin)
  return check(o, x, owin, xwin) ? 1 : 0
}

function check(o, x, owin, xwin) {
  if (o === x) {
    // x가 이길 때만 맞음
    if (owin === false && xwin === false) return true
    if (owin === false && xwin === true) return true
  } else if (o === x + 1) {
    // o가 이길 때만 맞음
    if (!owin && xwin === false) return true
    if (owin && xwin === false) return true
  }
  return false
}

function bingo(i, j, board) {
  console.log('bingo ', i, j)
  // \ 빙고
  if (i === 0 && j === 0) {
    if (
      board[i][j] === board[i + 1][j + 1] &&
      board[i][j] === board[i + 2][j + 2]
    ) {
      console.log('1 ')
      return true
    }
  }
  // / 빙고
  if (i === 0 && j === 2 && i + 2 < board.length) {
    if (
      board[i][j] === board[i + 1][j - 1] &&
      board[i][j] === board[i + 2][j - 2]
    ) {
      console.log('2')
      return true
    }
  }
  // - 빙고
  if (
    board[i][j] === board[i][j + 1] &&
    board[i][j] === board[i][j + 2] &&
    j === 0
  ) {
    console.log('3')
    return true
  }
  // | 빙고
  if (
    board[i][j] === board[i + 1][j] &&
    board[i][j] === board[i + 2][j] &&
    i === 0
  ) {
    console.log('4')
    return true
  } else {
    console.log('h!!!!! ', i, j)
    return false
  }
}

// console.log(solution(["O.X", ".O.", "..X"])) //	1
console.log(solution(['OOO', '...', 'XXX'])) //	0
// console.log(solution(["...", ".X.", "..."])) //	0
// console.log(solution(["...", "...", "..."])) //	1
