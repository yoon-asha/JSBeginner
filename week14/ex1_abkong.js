/**
가장 큰 정사각형 찾기
https://school.programmers.co.kr/learn/courses/30/lessons/12905
*/

function solution(board) {
    var answer = 0;
    
    for (var i = 1; i < board.length; i++) {
        for (var j = 1; j < board[i].length; j++) {
            if (board[i][j] == 1) {
                board[i][j] = Math.min(Math.min(board[i - 1][j], board[i][j - 1]), board[i - 1][j - 1]) + 1;
                
                if (board[i][j] > answer) {
                    answer = board[i][j];
                    continue;
                }
            }
        }
    }
    return board.length == 1 ? board[0][0] : Math.pow(answer, 2);
}
