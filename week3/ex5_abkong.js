function solution(p) {
    if (p.length == 0) {
        return "";
    }
    let position = getPosition(p);
    var u = p.substring(0, position);
    let v = p.substring(position);

    if (isValidParentheses(u)) {
        return u + solution(v);
    } else {
        var newStr = "(";
        newStr += solution(v);
        newStr += ")";
        u = u.substring(1, u.length - 1);
        newStr += Array.from(u).map((char) => (char == "(" ? ")" : "(")).join("");
        return newStr;
    }
}

function isValidParentheses(str) {
    let stack = [];
    
    for (let c of str) {
        if (c == "(") {
            stack.push("(");
        } else {
            if (stack.length == 0) {
                return false;
            }
            stack.pop();
        }
    }
    return stack.length == 0;
}

function getPosition(str) {
    var start = 0;
    var end = 0;
    
    for (let c of str) {
        if (c == "(") {
            start++;
        } else {
            end++;
        }
        if (start == end) {
            return start + end;
        }
    }
    return -1;
}
