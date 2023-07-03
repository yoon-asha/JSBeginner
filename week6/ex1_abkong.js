/**
크레인 인형뽑기 게임
https://school.programmers.co.kr/learn/courses/30/lessons/64061
*/

function solution(board, moves) {
    var answer = 0;
    var bucket = [];
    
    for (let move of moves) {
        let index = move - 1;
        
        for (let i = 0; i < board.length; i++) {
            if (board[i][index] != 0) {
                let dollNum = board[i][index];
                board[i][index] = 0;
                
                if (!bucket.isEmpty && bucket[bucket.length - 1] == dollNum) {
                    answer += 2;
                    
                    bucket.pop();
                } else {
                    bucket.push(dollNum);
                }
                break;
            }
        }
    }
    return answer;
}
