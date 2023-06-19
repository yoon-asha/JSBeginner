/**
수식 최대화
https://school.programmers.co.kr/learn/courses/30/lessons/67257
*/

function solution(expression) {
    const operators = ["*", "+", "-"];
    var answer = 0;

    for (let i = 0; i < operators.length; i++) {
        for (let j = 0; j < operators.length; j++) {
            if (i === j) continue;
            for (let k = 0; k < operators.length; k++) {
                if (i === k || j === k) continue;
                answer = Math.max(answer, Math.abs(calculate(expression, [operators[i], operators[j], operators[k]])));
            }
        }
    }
    return answer;
}

function calculate(expression, operators) {
    let numbers = expression.split(/[*+|-]/);
    let operator = expression.split(/\w+/);

    for (let op of operators) {
        let removeIndices = [];

        for (let i = 0; i < operator.length; i++) {
            if (operator[i] === op) {
                switch (op) {
                    case "*":
                        numbers[i] = String(Number(numbers[i - 1]) * Number(numbers[i]));
                        break;
                    case "+":
                        numbers[i] = String(Number(numbers[i - 1]) + Number(numbers[i]));
                        break;
                    case "-":
                        numbers[i] = String(Number(numbers[i - 1]) - Number(numbers[i]));
                        break;
                }
                removeIndices.push(i - 1);
            }
        }
        for (let i = removeIndices.length - 1; i >= 0; i--) {
            numbers.splice(removeIndices[i], 1);
            operator.splice(removeIndices[i] + 1, 1);
        }
    }
    return Number(numbers[0]);
}
