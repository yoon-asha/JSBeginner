/**
부족한 금액 계산하기
https://school.programmers.co.kr/learn/courses/30/lessons/82612
*/

function solution(price, money, count) {
    var total = 0;
    
    for (let i = 1; i <= count; i++) {
        total += price * i;
    }
    return total - money > 0 ? total - money : 0;
}
