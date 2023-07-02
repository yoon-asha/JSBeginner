function solution(board, moves) {
    var answer = 0;
    
    const box = [];
    for(let i = 0; i < board.length; ++i){
        let line = board.map(x=>x[i]).filter(x=>x>0);
        box.push(line);
    }    
    const stack = []
    for (move of moves){
        let line = box[move-1]
        if (line.length>0){
            let item = line.shift();
            if (stack.length>0 && stack.at(-1) === item){
                stack.pop();
                answer += 2;
            } else {
                stack.push(item);
            }
            
        }
    }
    return answer;
}