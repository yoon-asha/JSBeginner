function solution(order) {
    
    const reverseOrder = [...order].reverse();
    const stack = [];
    let count = 0;

    for (let i = 1; i <= order.length; i++) {
        stack.push(i);
        while (stack.length && stack.at(-1) === reverseOrder.at(-1)) {
            count += 1;
            stack.pop();
            reverseOrder.pop();
        }
    }
    return count;
}