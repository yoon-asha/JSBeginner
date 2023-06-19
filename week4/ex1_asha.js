function solution(board) {
  let [o, x] = [0, 0]
  let [owin, xwin] = [false, false]
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board.length; j++) {
      if (board[i][j] === 'O') {
        owin = bingo(i, j, board) || owin
        o++
      }
      if (board[i][j] === 'X') {
        xwin = bingo(i, j, board) || xwin
        x++
      }
    }
  }

  return check(o, x, owin, xwin) ? 1 : 0
}

function check(o, x, owin, xwin) {
  if (o === x) {
    // x가 이길 때만 맞음
    if (owin === false) return true
  } else if (o === x + 1) {
    // o가 이길 때만 맞음
    if (xwin === false) return true
  }
  return false
}

function bingo(i, j, board) {
  // \ 빙고
  if (i === 0 && j === 0) {
    if (
      board[i][j] === board[i + 1][j + 1] &&
      board[i][j] === board[i + 2][j + 2]
    ) {
      return true
    }
  }
  // / 빙고
  if (i === 0 && j === 2) {
    if (
      board[i][j] === board[i + 1][j - 1] &&
      board[i][j] === board[i + 2][j - 2]
    ) {
      return true
    }
  }
  // - 빙고
  if (
    j === 0 &&
    board[i][j] === board[i][j + 1] &&
    board[i][j] === board[i][j + 2]
  ) {
    return true
  }
  // | 빙고
  if (
    i === 0 &&
    board[i][j] === board[i + 1][j] &&
    board[i][j] === board[i + 2][j]
  ) {
    return true
  }

  return false
}
