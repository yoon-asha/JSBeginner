var answer = 0

function solution(n) {
  const board = Array(n).fill(0)
  put(board, 0, n)
  return answer
}
function put(board, row, n) {
  if (row === n) {
    answer++
    return
  } else {
    for (let i = 0; i < n; i++) {
      board[row] = i
      if (check(board, row)) put(board, row + 1, n)
    }
  }
}
function check(board, row) {
  for (let i = 0; i < row; i++) {
    if (board[i] === board[row] || Math.abs(board[row] - board[i]) === row - i) return false
  }
  return true
}
