function solution(board, moves) {
  let stack = []
  let cnt = 0
  for (let j = 0; j < moves.length; j++) {
    for (let i = 0; i < board.length; i++) {
      let num = moves[j] - 1

      if (board[i][num] === 0) {
        continue
      }
      if (board[i][num] !== 0 && board[i][num] !== undefined) {
        if (board[i][num] === stack.at(-1)) {
          stack.pop()
          cnt += 2
        } else {
          stack.push(board[i][num])
        }
        board[i][num] = 0
        break
      }
    }
  }
  return cnt
}
