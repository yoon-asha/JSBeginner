
function reverse(p){
    return p.split("").map((c) => (c === "(" ? ")" : "(")).join("");
}

function solution(p) {
    var answer = '';
    if (p.length === 0){
        return ''
    }
    let checksum = 0
    let is_appropriate = true;
    for (let i=0; i < p.length; ++i){
        if (p[i] === "("){
            checksum += 1;
        } else{
            checksum -= 1;
        }
        if (checksum <0){
            is_appropriate = false;
        }
        if (checksum === 0){
            const u = p.slice(0,i+1)
            const v = p.slice(i+1)
            if (is_appropriate){
                answer =  u + solution(v)
            } else{
                answer = '(' + solution(v) + ')' + reverse(u.slice(1,-1));
            } 
            return answer
        }
    }
}