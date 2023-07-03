/**
택배상자
https://school.programmers.co.kr/learn/courses/30/lessons/131704
*/


function solution(order) {
    var answer = 0;
    var stack = [];
    
    for (let i = 1; i <= order.length; i++) {
        stack.push(i);
        while (stack.length > 0 && stack[stack.length - 1] == order[answer]) {
            stack.pop();
            answer++;
        }
    }
    return answer;
}
