function solution(board) {
  
    let count_o = 0;
    let count_x = 0;

    for (let i = 0; i < 3; ++i){
      for (let j = 0; j < 3; ++j) {
        if (board[i][j] === "O") {
          count_o++;
        } else if (board[i][j] === "X") {
          count_x++;
        }
      }
    }
    
    const verticals = [
      board[0][0] + board[1][0] + board[2][0],
      board[0][1] + board[1][1] + board[2][1],
      board[0][2] + board[1][2] + board[2][2]
    ];
    const horizons = [
      board[0][0] + board[0][1] + board[0][2],
      board[1][0] + board[1][1] + board[1][2],
      board[2][0] + board[2][1] + board[2][2]
    ];
    const diagonals = [
      board[0][0] + board[1][1] + board[2][2],
      board[2][0] + board[1][1] + board[0][2]
    ];
    
    const lines = [...verticals, ...horizons, ...diagonals];  
    
    let count_ooo = 0;
    let count_xxx = 0;
    for (const line of lines) {
      if (line === "OOO") {
        count_ooo++;
      }
      if (line === "XXX") {
        count_xxx++;
      }
    }
    
    if (count_o === count_x) {
      return count_ooo === 0 ? 1 : 0;
    } else if (count_o === count_x + 1) {
      return count_xxx === 0 ? 1 : 0;
    } else {
      return 0;
    }
  }